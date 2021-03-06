//tabUI를 module화 시켰으며, tabUI내에서 ajax를 제외한 모든 함수 및 변수는 private 한 속성을 갖고 있음.
//한번 받은 데이터에 대해 cache를 생성하여 속도개선.

const tabUI = (function() {
  let prevSpan = null;
  const postCache = {}; //local cache
  const tabList = document.querySelectorAll('.tab');
  tabList.forEach((tab, index) => tab.addEventListener('click', () => ajax(index)));

  function ajax(index) {
    //캐쉬된 데이터가 있을 시 로드
    if(postCache[index]) {
      const title = postCache[index].title;
      const contents = postCache[index].contents;
      onTabSelected(tabList[index], index);
      addElement(title, contents);
      return;
    }

    const oReq = new XMLHttpRequest();
    oReq.addEventListener('load', (evt) => changeContents(evt, index));
    oReq.open('GET', `http://jsonplaceholder.typicode.com/posts/${(index + 1)}`);
    oReq.send();
    onTabSelected(tabList[index], index);
  }


  function changeContents(evt, index) {
    const data = JSON.parse(evt.target.responseText);
    const title = data.title;
    const contents = data.body;
    addElement(title, contents);

    //캐쉬된 데이터 없을 시 데이터를 캐쉬화
    if(postCache[index] === undefined) {
      memoizePost(index, title, contents);
    }
  }

  function addElement(title, contents) {
    const titleDiv = document.querySelector('.myName');
    const contentsDiv = document.querySelector('.myDesc');
    titleDiv.innerHTML = title;
    contentsDiv.innerHTML = contents;

  }

  function memoizePost(index, title, contents) {
    postCache[index] = {
      title: title,
      contents: contents
    }
  }


  // //선택된 tab css 처리
  function onTabSelected(element) {
    let span = element.querySelector('span');
    if(prevSpan !== null) {
      onTabDeSelected(prevSpan)
    }
    prevSpan = span;
    span.style.backgroundColor = '#f89e82';
    span.style.color = 'white';
  }

  // 선택 해제된 tab css 처리
  function onTabDeSelected(span) {
    span.style.backgroundColor = 'white';
    span.style.color = 'black';
    span.style.borderColor = 'black';
  }

  return {
    ajax: ajax
  }
})();



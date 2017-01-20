let data;
let obj;
let keys;

function ajax() {
  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", addElement)
  oReq.open("GET", "../data.json");
  oReq.send();
}

function addElement() {
  data = JSON.parse(this.responseText);
  obj = data.owner;
  keys = Object.keys(obj);

  var list = [obj.id,
    obj.avatar_url,
    obj.login,
    obj.url,
    obj.gravatar_id,
    obj.html_url,
    obj.followers_url,
    obj.gists_url,
    obj.starred_url,
    obj.subscriptions_url];

  for(var i=0; i<list.length; ++i) {
    var newDt = document.querySelector("dl");
    //이런부분때문에 react 의 JSX 같은게 좋다 . 라이브러리 쓰기도 한다. 이런부분은 마크업이 수정될 때 마다 이슈사항 발생
    newDt.insertAdjacentHTML('beforeend','<dt>' + keys[i] + '</dt>');
    newDt.insertAdjacentHTML('beforeend','<dd>' + list[i] + '</dd>');
  }
}



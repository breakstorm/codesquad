/* 
 * 1. executeItemNode 함수를 완성하세요
 * 이 함수의 actionType 매개변수는 'add' 또는 'remove'를 받습니다.  add를 받으면 추가하고, remove를 받으면 일을 삭제합니다.
 * todoORNumber 는 add일때는 새로운 일을 문자열로 받고, remove일때는 숫자를 받습니다.
 * 할일 목록은 할일의 문자열 길이 순으로 정렬됩니다. 목록이 추가될때마다 바로 정렬되야 합니다.(가장 긴 할일 내용이 뒤로 가야함)
 * 삭제하려는 경우 num과 일치하는 item번호가 없다면 'message' 영역에서 적당한 메시지를 붉은색으로 표시됐다 3초뒤 사라집니다.
 * 추가하려는 경우 이미 같은일이 있다면 message영역에서 적당한 메시지를 붉은색으로 표시했다 3초뒤 사라집니다.
 * 함수를 여러개로 나눠도 상관없습니다.
 * 참고로 1번을 풀기 위해서는 string조작과 setTimeout이라는 것을 공부해야 할 수도 있습니다.
 * 
 * 2. 좀더 사용하기 쉬운 웹화면이 되도록, css에 다양한 스타일을 적용하면서 꾸며봅니다.
 * 
 * 3. 아래 event 관련 코드를 학습해보고, 어떤 코드를 의미하는지 최대한 자세히 주석으로 설명을 넣어보세요.
 */

const listSection = document.querySelector(".basket > ul");
const messageSection = document.querySelector(".message");
let todoList = ["씻기", "공부하기", "게임한판하기", "html공부하기", "자바스크립트 책 사기"];

function executeItemNode(actionType, todoORnumber) {
  if(actionType === "add") {
    todoORnumber = todoORnumber.trim();

    if(_isThereAlreadySameTodo(todoORnumber)) {
      _addErrorMessage("You already have this todo.");
      return;
    }

    _removeAllChildNode(listSection);
    todoList.push(todoORnumber);
    todoList.sort((a, b) => a.length - b.length);
    todoList.forEach(todo => _appendNewChildNode(listSection, todo));
  }

  if(actionType === "remove") {
    if(todoORnumber > todoList.length || todoORnumber < 1) {
      _addErrorMessage("You missed, please check the number of todo");
      return;
    }

    _removeAllChildNode(listSection);
    todoList.splice(todoORnumber - 1, 1);
    todoList.forEach(todo => _appendNewChildNode(listSection, todo));
  }
}

function _isThereAlreadySameTodo(todoORnumber) {
  const result = todoList.some(todo => todo === todoORnumber);
  return result;
}

function _addErrorMessage(message) {
  var h4 = document.createElement("h4");
  h4.appendChild(document.createTextNode(message));
  h4.style.color = "red";
  messageSection.appendChild(h4);
  setTimeout(() => {
    _removeAllChildNode(messageSection);
  }, 3000);
}

function _removeAllChildNode(root) {
  if(root) {
    while(root.firstChild) {
      root.removeChild(root.firstChild);
    }
  }
}

function _appendNewChildNode(root, todo) {
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(todo));
  root.appendChild(li);
}


/* 
 * 3번문제는 여기에 자세히 설명을 넣으시면 됩니다.
 * 
 * 
 * 
 */

let controller = document.querySelector(".controller");

(function() {
  if(todoList.length !== 0) {
    todoList.forEach(todo => _appendNewChildNode(listSection, todo));
  }
})();

controller.addEventListener("click", function(evt) {
  let btn = evt.target;
  if(btn.tagName !== "BUTTON") return;
  let inputValue = btn.previousElementSibling.value;
  let actionType = btn.className;
  executeItemNode(actionType, inputValue);
});


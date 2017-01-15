
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
 querySelector를 이용해서 얻어진 controller에  onclick함수에  callback함수를 매개변수로 넣어 addEventListener함수를 호출합니다
 btn의 tagName이 버튼이면, inputValue에 String값이나 number값을 넣고 actionType에는 btn의 className을 넣는데 이 숙제에서 버튼의 className은 add이거나 remove입니다.
 이 두개의 값을 executeItemNode에 인자값으로 넘겨 함수를 실행합니다
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


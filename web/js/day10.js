

const writeInput = document.querySelector(".write_input");
const writeLocation = document.querySelector(".write_location");
const writeCancel = document.querySelector(".write_cancel");
const writeError = document.querySelector(".write_error");
writeInput.addEventListener("focus", writeInputFocusHandler);
writeInput.addEventListener("focusout", writeCancelClickHandler);
writeInput.addEventListener("keydown", writeInputKeyDownHandler);
writeCancel.addEventListener("click", writeCancelClickHandler);

function writeInputFocusHandler(evt) {
  writeLocation.style.display = "none";
  writeCancel.style.display = "inline";
}

function writeCancelClickHandler(evt) {
  writeInput.value = "";

  writeLocation.style.display = "inline";
  writeCancel.style.display = "none";
}

function writeInputKeyDownHandler(evt) {
  if (writeInput.value.length > 20) {
    writeError.style.display = "block";
  } else {
    writeError.style.display = "none";
  }
}














//position의 absolute는
//domContentLoaded / addEventListener에서 핸들러는
//나중에 실행될 함수를 callback함수라고 함
//eventQueue는 callback함수들이 모여있는 메모리 공

//function aaaa() {
//1  el.addEventListener("click", 7 function(){});
//2  for(var i=0; i<10000000000; ++i) {
//3
//4  }
//5  callAnother();
//6  callAnother2();

//}

//여기서 7번은 callback함수

//비동기 callback과 stack의 관계
//setInterval 과 setTimeout

//function aaaa() {
//1  el.addEventListener("click", 7 function(evt){});
//2  for(var i=0; i<10000000000; ++i) {
//3
//4  }
//5  callAnother();
//6  callAnother2();

//}

// var googleInput = document.querySelector(".test_id");
// googleInput.addEventListener("focus", clickHandler);
// googleInput.addEventListener("click", myfunction);
// function myfunction(evt) {
//   evt.style.background = "yellow";
//
// }
//
// function clickHandler(evt) {
//   console.log("hi");
// }

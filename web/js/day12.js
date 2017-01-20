function reqListener(){
  console.log(this.responseText);
  console.log(2);
}
var oReq = new XMLHttpRequest();
console.log(1);
oReq.addEventListener("load", reqListener);
console.log(3);
oReq.open("GET", "https://api.zigbang.com/v1/items?detail=true&item_ids=7156351");
oReq.send();
console.log(oReq.id);



//-------------------------------------------------


function ajax() {
  function reqListener(){
    console.log(this.responseText);
  }
  var oReq = new XMLHttpRequest();
  console.log(1);
  oReq.addEventListener("load", reqListener);
  oReq.open("GET", "https://api.zigbang.com/v1/items?detail=true&item_ids=7156351");
  oReq.send();
  return true;
}

ajax();



//-------------------------------------------------



function ajax() {
  var oReq = new XMLHttpRequest();
  console.log(1);
  oReq.addEventListener("load", function(evt) {
    console.log(5);
  });
console.log(2);
oReq.open("Get", "https://api.zigbang.com/v1/items?detail=true&item_ids=7156351");
console.log(3);
oReq.send();
console.log(4);
return true;
}
ajax();

for(var i=0; i<10; ++i) {
  console.log(i);
}
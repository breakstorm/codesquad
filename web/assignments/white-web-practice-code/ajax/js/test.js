let data;
let obj;
let keys;

function ajax(data) {
  var oReq = new XMLHttpRequest();
  var data = "\""+ data +"\"";
  console.log(data);
  oReq.addEventListener("load", addElement)
  oReq.open("GET", data);
  oReq.send();
}

function addElement() {
  data = JSON.parse(this.responseText);
  obj = data.html_url;
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
    newDt.insertAdjacentHTML('beforeend','<dt>' + keys[i] + '</dt>');
    newDt.insertAdjacentHTML('beforeend', '<dd>' + list[i] + '</dd>');
  }
}

ajax("../data2.json");
    <!--class와 id 의 차이 class는 여러곳에 쓸 수 있다. id도 여러곳에 쓸 수 있지만 비추
설명 상
ID는 Unique 하며 각각의 요소가 오직 한 ID만 갖고 있을 수 있다. 각각의 페이지는 그 ID를 가진 오직 한 요소만 갖고
있을 수 있다.
Class는 Unique하지 않고 여래가의 요소에 같은 class를 달 수 있고, 반대로 같은 요소에 다양한 class를 붙일 수도 있다
-->
    <!-- block element와 inline element / table tag는 진짜 표를 만들 때만 써라, 레이아웃 잡을 때는 쓰지 말아라-->
    <!-- 네비 ,검색창, 하단 나오는 순서대로-->
-----
var list = document.querySelector("ul");
list.removeChild(list.childNodes[2]);
--> removeChild 같은경우 노드 내에 있는 공백이나 일반 text까지도
모두 child로 인식한다. 그리고 index는 1부터 시작
-----
var node = document.createElement("LI");
vat textNode = document.createTextNode("Kiwi");
node.appendChild(textNode);
document.querySelector("ul").appendChilde(node);
----
var newItem = document.createElement("LI");
var textNode = document.createTextNode("water");
newItem.appendChild(textNode);

var list = document.querySelector("ul");
list.insertBefore(newItem, list.childNodes[1]);
----
var list = document.querySelector("ul");
var item = list.lastChild;
var newItem = item.cloneNode(true);
document.querySelector("ul").appendChild(newItem);
----
var list = document.querySelector("ul");
lst.removeChild(list.childeNodes(".red"));




---------------------------------------
document.querySelector(".glst_m") -> glst_m class의 첫번째 값을 돌려준다
document.querySelectorAll(".glst_m") -> glst_m class 의 모든 값을 배열로 돌려준다.
document.querySelector(".myWrap li:nth-child(1)").textContent;


<DOM 탐색 API>
몇가지 유용한 속성
tagName
textContent
nodeType
<이동>
childNodes
firstChild
firstElementChild
parentElement
nextSibling
nextElementSibling

nodeType은 크게 두가지가 있다.
이 두개를 잘 구분해서 탐색을 해야 원하는 걸 찾을 수 있다.
TEXT_NODE
ELEMENT_NODE
------------------------------------
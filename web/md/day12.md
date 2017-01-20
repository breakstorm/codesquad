/**
 * Created by JunHo on 2017. 1. 19..
 */
/*
* 중첩된 DOM에 이벤트가 여러개 있을 때 모두 발생하는거다
* <div id="div1>
*   <div id=div2>
*     <div id=div3>
*     </div>
*   </div>
* </div>
*
* 위임
*이 경우 div3의 이벤트를 실행할 때 div2, div1의 이벤트까지 모두 일어남
* 이것을 event bubbling이라고 표현함 (자식 이벤트부터 발생하는 경우)
* event capturing은 부모 이벤트부터 발생시킬수 있다
* 버블링과 캡처링은 eventhandler의 3번째 인자가 기본 false로 되어 있으면 버블링 이것을 true로 바꾸면 캡처링 발생함
*
*
* 함수의 인자로 받는 함수를 콜백 함수 (당장 필요하지 않지만 니가 필요할 떄 그 함수에서 불러다 써 )
*
* json은 key:value를 갖는 데이터 포맷 (Ajax 통신하는데 필요한 데이터 포맷 기존 표준으로 XML이 있지만
* 불편해서 만든 json) json으로 받으면 그걸 자바스크립트 내에 object로 한번 변환하고 json.parse()로 object를
* 다 파싱해서 json내에 있는 문자열을 javascript로 변환 ,
* 귀찮으니 서버에서 HTML포맷까지 만들어 줘서 보내면 innerHTML로 다 받아서 뿌리기만 하면 경우도 있다 . 이거는 통 HTML이다
*
* */


XHR객체 (javascript)


html tag  dt/dd/dl


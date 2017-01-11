
var a = 3;
var b = 4;
var c = a+b;
console.log(c);
console.log(a+b);
console.log("a 더하기 b는 이겁니다" + c);
//자동 형 변환 (암묵적 형 변환) 자바스크립트의 특징이다. c 가 7로 변환된 것 근데 그렇게 숫자로 바꾼 후 다시 문자열로 변환해서 합친거다
//type casting을 외우려고 알려고 하지말고 몸으로 익힐 때까지 냅두자


//연산자 우선순위
var d = a + ( b * 2);
console.log(d);


//자바스크립트는 모든 함수에 뭔가 return하게끔 만들었다. java같은 경우는 void 형같은걸로 그냥 실행하기만 하는 함수를 만들 수 있지만.
//자바스크립트는 무조건 return 값을 갖고 있어야 함. return값이 없으면 오류를 뱉어내지 않고 default로 undefined를 뱉어낸다.
//console.log()는 반환값이 없는 함수이기 때문에 default로 undefined를 뱉음


var r = 3;
var circle = Math.PI*r*r;
console.log(circle);

var x = 2;
var y = 3;
var rectangler = x*y;
console.log(rectangler);

//javascript console.log의 comma는 더하는 기능을 한다.
console.log("wwer","sdsfs");

console.time();
console.timeEnd();

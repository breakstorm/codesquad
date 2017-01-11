//주석은 남들이 이해하지 못하는 부분만 최소한으로 주석
//주석이 하나도 없어도 코드를 읽고 이해가 되는 코드가 최고의 코드다, 그렇지만 그게 힘들경우 읽고 이해가 안 가거나 어려워보이는 부분만
//주석을 쓰는게 간결하고 좋은 코드 ( 무조건 주석을 많이 쓴다고 좋은게 아님 )


//재사용 하지 않는 함수를 왜 만들까? -> 일이 많아지면 일의기능을 분리하기 위해서, 의존성,결합도를 낮추게 하기 위해서 , 변화가 필요할때
//그것들을 의존하지 않게 하기위해서. 함수의 최소단위를 어떻게 할지도 코딩컨벤션 중 하나. 크롱 기준으로 함수는 길이로 보지 않음, 함수의 의미기능
//함수 이름이 getName인데 그 이름을 반환하기 하지만, 함수안에 서버에서 통신도 하고 뭣도 가져오고 이름을 쪼개기도 하고 이런 작업들을 다 기능별로
//분리해서 함수를 따로 빼서 만듬, 함수의 이름이 하는 일만 하는 그런 함수.


----------------------------
const perBookPrice = 500000;
var deliveryFee = 5000;
var discount = 0.3;


function doCalc(num) {
    var result;
    if(0 < num < 5) {
        deliveryFee = 10000;
        discount = 0.1;
    } else if(5 < num < 10) {
        deliveryFee = 8000;
        discount = 0.3;
    }

    result = (perBookPrice * num * (1 - discount)) + deliveryFee;
    return result;
}

console.log(doCalc(1));
console.log(doCalc(5));
console.log(doCalc(10));

-----------------------------


var result;
var price = unit_price * num * (100-dis_rate)/100;
if(price >= free_ship) {
    ship = 0;
}
result = price + ship;
return result;

------------------------------

//원의 둘레 구하기

function calc(radius) {
    var result = 2 * radius * Math.PI;
    return result;
}

function getCircleRound(radius) {
    var circleRound = calc(radius);
    return circleRound;
}

console.log(getCircleRound(3));


------------------------------
//거리값 구하기
function calc (x1,x2,y1,y2) {
    var xDistance = x2-x1;
    var yDistance = y2-y1;
    var result = Math.sqrt((xDistance ** 2) + (yDistance ** 2));
    return result;
}
function getDistance(x1,x2,y1,y2) {
    var distance = calc(x1,x2,y1,y2);
    return distance;
}
console.log(getDistance(2,3,4,5));

-------------------------------
//곱셉
for(let i=1; i<=100; ++i) {
    for(let j=1; j<=9; ++j) {
        let result = i*j;
        console.log(i + " * " + j + "= " + result);
    }
}

--------------------------------

function sum(inputA, inputB) {
    var total = 0;
    for(let i=inputA; i<=inputB; ++i) {
        total += i;
    }
    return total;
}
console.log(sum(2,4));

---------------------------------

function sumEven() {
    var total = 0;
    for(let i=1; i<=100; ++i) {
        if(i%2 === 0) {
            total += i;
        }
    }
    return total;
}
console.log(sumEven());

------------------------------------

function sumOdd() {
    var total = 0;
    for(let i=1; i<=100; ++i) {
        if(i%2 !== 0) {
            total += i;
        }
    }
    return total;
}
console.log(sumOdd());
--------------------------------------
//소수 찾기 과제
function findPrime(inputNum) {
    var prime = [2];

    loop:
    for(let i=3; i<=inputNum; i++) {
        for(let j=2; j<parseInt(Math.sqrt(i)) + 1; j++) {
            if(i%j === 0 ) continue loop;
        }
        prime.push(i);
    }
    return prime;
}
console.log(findPrime(100));



---------------------------------------
//피보나치
function fibo(endNum) {
    var result = 1;

    for(let i=0; i<=endNum; ++i) {
        result += result
    }
    return result;
}

console.log(fibo(6));

-----------------------------------------

var myfriend = ["크롱","jk","honux","코니","브라이언"];
myfriend.push("joy"); //배열의 맨 뒤에 새로운 값을 추가하겠다는 것,

var printMyfriend = function(numType, myfriend) {

    var result = checkArgs("string", myfriend);
    var result2 = [];
    if(result.length !== 0) {
        return result;
    } else {
        for(var i=0; i<myfriend.length; ++i) {
            result2[i] = log("my friend's name is ", myfriend[i]);
        }
        return result2;
    }
}

var checkArgs = function(numType, myfriend) {
    for(var i = 0; i < myfriend.length; ++i) {
        var arg = myfriend[i];
        if(typeof(arg) !== numType) {
            return "Type you input is wrong";
        }
    }
    return "";
}

var log = function(str,result) {
    return str + result;
}

console.log(printMyfriend("string", myfriend));

var result = printMyfriend("string", myfriend);
for(var i=0; i<result.length; ++i) {
    console.log(result[i]);
}


// console.log(myfriend);
// myfriend.indexOf(3); //인자값 3이 myfriend 배열 내에 있는 첫번째 자리
// myfriend.splice(2,0,"unini") //myfriend배열의 2번째 자리에 삭제하는 값 없이 unini를 집어넣겠다는 것, 원래배열이 변경됨
// console.log(myfriend);
// var newMyfriend = myfriend.slice(1,4); //배열의 2번째와 3번째 값을 따로 갖고 있겠다는 것, 원래배열은 변경되지 않음.

for(friend in myfriend) {
    console.log(friend);
}
for(friend in myfriend) {
    console.log(myfriend[friend]);
}
for(var i=0; i<myfriend.length; ++i) {
    console.log(myfriend[i]);
}

--------------------------------------------------

//자바스크립트에서만 작동하는 경우이다 . 특이함.
var a = [];
a[0] = 1;
a[1000000] = 1;
a.length //1000001

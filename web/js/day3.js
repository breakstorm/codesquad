'use strict';

var calculateAvg = function() {
    var argNums = arguments.length;
    var total = 0;
    for(var i = 0; i < argNums; ++i) {
        total += arguments[i];
    }
    var result = total / argNums;
    return result;
}

var avgResult = calculateAvg(10,20,30);

console.log("average is " + avgResult);










//debugger;
var checkArgs = function(numType, total) {
    for(var i = 0; i < total.length; ++i) {
        var arg = total[i];
        if(typeof(arg) !== numType) {
            return "Type you input is wrong";
        }
    }
    return "";
}

var log = function(str,result) {
    return str + result;
}

var sum = function(numType, total) {
    var result = checkArgs("number", total);
    var result2 = 0;
    if(result.length !== 0) {
        return result;
    } else {
        for(var i=0; i<total.length; ++i) {
            result2 += total[i];
        }
        return log("sum is " ,result2);
    }
}

var minus = function(numType, total) {
    var result = checkArgs("number", total);
    var result2 = total[0];
    if(result.length !== 0) {
        return result;
    } else {
        for(var i=1; i<total.length; ++i) {
            result2 -= total[i];
        }
        return log("minus is " ,result2);
    }
}
var multiply = function(numType, total) {
    var result = checkArgs("number", total);
    var result2 = 1;
    if(result.length !== 0) {
        return result;
    } else {
        for(var i=0; i<total.length; ++i) {
            result2 *= total[i];
        }
        return log("multiply is " ,result2);
    }
}
var division = function(numType, total) {
    var result = checkArgs("number", total);
    var result2 = total[0];
    if(result.length !== 0) {
        return result;
    } else {
        for(var i=1; i<total.length; ++i) {
            result2 /= total[i];
        }
        return log("division is " ,result2);
    }
}
var average = function(numType, total) {
    var result = checkArgs("number", total);
    var result2 = 0;
    if(result.length !== 0) {
        return result;
    } else {
        for(var i=0; i<total.length; ++i) {
            result2 += total[i];
        }
        result2 = result2/total.length;
        return log("average is " ,result2);
    }
}


var calculate = function(numType) {
    if(numType === "sum") {
        var total = [];
        for(var i = 1; i < arguments.length; ++i) {
          total[i-1] = arguments[i];
        }
        return sum(numType, total);
    }
    if(numType === "minus") {
        var total = [];
        for(var i = 1; i < arguments.length; ++i) {
          total[i-1] = arguments[i];
        }
        return minus(numType, total);
    }
    if(numType === "multiply") {
        var total = [];
        for(var i = 1; i < arguments.length; ++i) {
          total[i-1] = arguments[i];
        }
        return multiply(numType, total);
    }
    if(numType === "division") {
        var total = [];
        for(var i = 1; i < arguments.length; ++i) {
          total[i-1] = arguments[i];
        }
        return division(numType, total);
    }
    if(numType === "average") {
        var total = [];
        for(var i = 1; i < arguments.length; ++i) {
          total[i-1] = arguments[i];
        }
        return average(numType, total);
    }
}


var sumResult = calculate("sum",10,"20");
console.log(sumResult);

var sumResult = calculate("sum",10,20);
console.log(sumResult);

var sumResult = calculate("sum",10,20,30,40,2,3,4,5,6,99);
console.log(sumResult);

var minusResult = calculate("minus",10,20);
console.log(minusResult);

var multiplyResult = calculate("multiply",10,20);
console.log(multiplyResult);

var divisionResult = calculate("division",10,20);
console.log(divisionResult);

var averageResult = calculate("average",10,20);
console.log(averageResult);
//


------------------------
function getAdd(num1, num2) {
    var result = num1 + num2;
    return function (arg) {
        console.log(result);
    }
}


getAdd(1,2)();
//getAdd(1,2)가 돌려주는 것이 function이고 그 function을 다시 실행해야 하니까 ()를 한번 더 실행.



var result = getAdd(1,2);
result();


function getAdd(num1, num2) {
    var result = num1 + num2;
    return function (arg) {
        console.log(arg,result);
    }
}
var func = getAdd(1,2);
func("result is " );


//typeof(3) == "string" 

-------------------


var globalName = "Kim";
function setName(lastName) {
    firstName = "youn";
    console.log("my name is",firstName + lastName);
}

console.log(globalName);
setName(" Kim");
console.log(firstName);
//javascript의 함수의 유효범위는 var가 있을 때 그 함수 내에서만 유효함.
//var를 빼면 글로벌 변수가 된다 덜덜더 대박 그래서 var는 꼭 되도록 명시적으로 명시해 주는것이 좋다


---------------


function setName(lastName) {
    function printName() {
        var firstName = "youn";
        console.log("my name is ", firstName + lastName);
        console.log(lastName);
    }
    printName();
    console.log(lastName);
    console.log(firstName);

}
setName("kim");
//scope는 점차 전역인게 맞다. 그래서 함수1안에 함수2가 있고 함수3이 있으면 함수 3에서 함수1,2의 변수들을 잡고 있는건
//가능한대 함수 1에서 함수2,3의 변수들을 잡고 있는건 안된다. -->클로저의 개념 , scope chain
//scope는 위로 타고 올라가게 되어 있다. 가장 큰건 window!!!


------------------


var num1 = 1;
function a() {
    var num2 = 2;
    function b() {
        var num3 = 3;
        function c() {
            var num4 = 4;
            console.log(num1);
            console.log(num2);
            console.log(num3);
            console.log(num4);
        }
        c();
        console.log(num1);
        console.log(num2);
        console.log(num3);
        console.log(num4);
    }
    b();
}
a();


--------------------
function a() {
    var a = "a";
    function b() {
        function c() {
            console.log("a is "+ a);
        }
        c();
    }
    b();
}
a();



-------------------
function a() {
    var a = "a";
    var b = function() {}
    var c = function() {
        console.log("a is ", a);
    }
    return {"b":b, "c":c}
}

---------------------
(function() {
    var a = 3;
    function getA() {
        return a;
    }
})();
console.log(getA());

//즉시 실행함수.익명함수, 일반적인 방법은 아님 꼼수같은 느낌, 이 안에 엄청나게 많은 함수를 넣어둔다.그 이유는
//다른곳에서 접근이 안되게 하려고 , 만약 저렇게 감싸고 하지 않으면 저 안에 있는 코드는 어디에서든지 접근이 가능하다.
//즉시실행함수는 한번 수행 후 다시 호출할 수 없음. 이런이유로 최초 한번의 실행만을 필요로 하는 초기화 코드부분에 패턴으로 많이 사용
//그러나 저 접근할 수 없는 부분에서 메모리 낭비가 발생할 수 있다.


//switch case
function calculate2(a,b,c) {
    var result = 0;
    var size = arguments.length;

    //들어온 매개변수의 갯수가 3개가 맞는 지 확인
    if(size !== 3) {
        return "You must input three arguments!!";
    }

    //들어온 a, b 매개변수의 type이 number가 맞는지 아닌지 확인
    debugger;
    var result = checkOps(a,b,c);
    if(result.length !== 0) return result;
    // if(!isExactly(a,b,c)) return;

    //a,b 둘다 type이 number일 경우 사칙연산 실행
    switch (c) {
        case "plus":
            result = a+b;
            return a + " + " + b + " " + c + " is " + result;
        case "minus":
            result = a-b;
            return a + " - "+ b + " " + c + " is " + result;
        case "multiply":
            result = a*b;
            return a + " * " + b + " " + c + " is " + result;
        case "division":
            result = a/b;
            return a + " / " + b + " " + c + " is " + result;
        default:
            return "You should input exactly 'c' value";
    }
}


function checkOps(a,b,c) {
    if(typeof(a) !== "number") {
        return "You have to fix value a.";
    }
    if(typeof(b) !== "number") {
        return "You have to fix value b.";
    }
    if(typeof(c) !== "string") {
        return "You have to fix value c.";
    }
    return "";
}



// console.log(calculate2(20,"minus"));
// console.log(calculate2(20,10,"plus"));
// console.log(calculate2(15,20,"multiply"));
// console.log(calculate2(10,"20","plus"));
console.log(calculate2(10,20,"pluuuuus"));
console.log(calculate2(10,20,30,"pluuuuus"));
console.log(calculate2(20,"10","plus"));

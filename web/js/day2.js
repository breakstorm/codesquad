
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






// function myLog(data,data2) {
//     return data + data2;
// }
//
// console.log(myLog(2,2));
//
// //a + " + " + b + " " + c + " " + " is " + result;
//
// //if
// function calculate(a,b,c) {
//     var result = 0;
//     if(typeof(a) === "number" && typeof(b) === "number") {
//         if(c === "plus") {
//             result = a+b;
//             return a + " + " + b + " " + c + " is " + result;
//         }else if(c === "minus") {
//             result = a-b;
//             return a + " - " + b + " " + c + " is " + result;
//         }else if(c === "multiply") {
//             result = a*b;
//             return a + " * " + b + " " + c + " is " + result;
//         }else if(c === "division"){
//             result = a/b;
//             return a + " / " + b + " " + c + " is " + result;
//         }else {
//             return "Error";
//         }
//     } else {
//         return "Error!!!";
//     }
// }
//
// console.log(calculate(2,"3","plus"));
// console.log(calculate(2,"plus"));
// console.log(calculate(2,3,"pluss"));
// console.log(calculate(2,3,"plus"));
// console.log(calculate(2,3,"minus"));
// console.log(calculate(2,3,"multiply"));
// console.log(calculate(2,3,"division"));
//
//
// //switch case
// function calculate1(a,b,c) {
//     var result = 0;
//
//     if(typeof(a) === "number" && typeof(b) === "number") {
//         switch (c) {
//             case "plus":
//                 result = a+b;
//                 return result;
//                 break;
//             case "minus":
//                 result = a-b;
//                 return result;
//                 break;
//             case "multiply":
//                 result = a*b;
//                 return result;
//                 break;
//             case "division":
//                 result = a/b;
//                 return result;
//                 break;
//             default:
//                 return "Error";
//                 break;
//         }
//     } else {
//         return "Error!!!!";
//     }
//
// }
//
// console.log(calculate1(10,20,"plus"));
// console.log(calculate1(10,"20","minus"));
// console.log(calculate1(10,20,"pluuuuus"));
//
//
// //switch case
// function calculate2(a,b,c) {
//     var result = 0;
//
//     //들어온 매개변수의 갯수가 3개인지 확인하는 부분
//     if(arguments.length !== 3) {
//         return "You mun input three arguments!!";
//     }
//     //들어온 a, b 매개변수의 type이 number가 맞는지 아닌지 확인
//     if(typeof(a) !== "number" || typeof(b) !== "number") {
//         return "You must input a or b type 'number' !!!";
//     }
//     //a,b 둘다 type이 number일 경우 사칙연산 실행
//     switch (c) {
//         case "plus":
//             result = a+b;
//             return a + " + " + b + " " + c + " is " + result;
//             break;
//         case "minus":
//             result = a-b;
//             return a + " - "+ b + " " + c + " is " + result;
//             break;
//          case "multiply":
//             result = a*b;
//             return a + " * " + b + " " + c + " is " + result;
//             break;
//         case "division":
//             result = a/b;
//             return a + " / " + b + " " + c + " is " + result;
//             break;
//         default:
//             return "You should input exactly 'c' value";
//             break;
//     }
// }
// console.log(calculate2(20,"minus"));
// console.log(calculate2(1,20,"minus"));
// console.log(calculate2("10",20,"plus"));
// console.log(calculate2(10,20,"pluuuuus"));
// console.log(calculate2(10,20,30,"pluuuuus"));

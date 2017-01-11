

var checkArgs = function(args, numType) {


    for(var i = 0; i < args.length; ++i) {
        var arg = args[i];
        if(typeof(arg) !== numType) {
            return "Type you input is wrong";
        }
    }
    return "";
}

var log = function(str,result) {
    return str + result;
}

var sum = function(a,b) {
    var argsNums = arguments.length;
    var args = [];
    for(var i = 0; i < argsNums; ++i) {
        args[i] = arguments[i];
    }
    var result = checkArgs(args, "number");
    if(result.length !== 0) {
        return result;
    } else {
        var result2 = a+b;
        return log("sum is " ,result2);
    }
}

var calculate = function(a,b,c) {
    if(c === "sum") return sum(a,b);
    if(c === "minus") return minus(a,b);
    if(c === "multiply") return multiply(a,b);
    if(c === "division") return division(a,b);
    if(c === "average") return average(a,b);
}


var sumResult = calculate(10,"20","sum");
console.log(sumResult);

var sumResult = calculate(10,20,"sum");
console.log(sumResult);


var arr = ["크롱", "jk", "honux",["코니","샐리"],"브라이언",["joy","uni"]];
var lineFriend = arr[3];
var sally = lineFriend[1];
console.log(sally === arr[3][1]);

function printArrayElement(arr) {
    let indexStr = "";
    let str = "";
    let result;
    for(let i = 0; i < arr.length; ++i) {
        if(!Array.isArray(arr[i])) continue;
        indexStr += i +", ";
        for(let j = 0; j < arr[i].length; ++j) {
            str += arr[i][j] + " ";
        }
    }
    result = "array element는 " + indexStr + "번째에 있으며, 그 값은 " + str +"입니다.";
    return result;
}
console.log(printArrayElement(arr));

-----------------------------------------------------

function printNotArrayElement(arr) {
    let result = [];
    for(let i = 0; i < arr.length; ++i) {
        if(!Array.isArray(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(printNotArrayElement(arr));

-----------------------------------------------------

function main() {
    let result = printArrayElement(arr);
    console.log("array element는 ");
}

-----------------------------------------------------
let giveLikeNum = 5;
var myfriend = {name : "레너드",
    age : 1,
    sns : "https://naver.com",
    reply : ["So Good", "So bad", "SoSo"],
    likeNum : 3,
    giveLikeNum : 1 };
myfriend.like = function(plus) {
    this.giveLikeNum += plus;
}

myfriend.like(10);
console.log(myfriend.giveLikeNum);
console.log(giveLikeNum);



let publicKeys = Object.keys(myfriend);
publicKeys.forEach(printMyfriend);

function printMyfriend(a) {
    if(Array.isArray(myfriend[a])) {
        //console.log(myfriend[a]);
        myfriend[a].forEach(printMyfriend2);
    } else {
        console.log(myfriend[a]);
    }
}

function printMyfriend2(a) {
    console.log(a);
}
-----------------------------------------------------

let facebook = { "id" : 23,
     "name" : "honux",
     "content" : "오늘의 커피는 왜 항상 맛있지?",
     "like" : 2,
     "comment" : ["^^", "i like this"]
};

function modifyObject(key, value, objectToChange) {
    if(Object.hasOwnProperty(key)) {
        delete objectToChange[key];
    } else {
        objectToChange[key] = value;
    }
};
let answer = modifyObject("phone", "01022", facebook);
console.log(facebook);

-----------------------------------------------------

//forEach

//map

//filter
[
{"id" : 23, "name" : "honux", "content" : "오늘의 커피는 왜 항상 맛있지?", "like" : 2, "comment" : ["^^", "i like this"]},
{"id" : 55, "name" : "nigayo", "content" : "드디어 출근!", "like" : 4, "comment" : ["이직 하셨나봐요? "]},
{"id" : 93, "name" : "jk", "content" : "어제 읽은 책이 아직도 ", "like" : 20, "comment" : ["잠자기 전에 만화책은 금물..", "그게 뭘까?"]},
{"id" : 4, "name" : "crong", "content" : "코드스쿼드가 정말 좋은 곳일까? 믿을 수가 없다..", "like" : 0, "comment" : ["누가 그러디"]}
]

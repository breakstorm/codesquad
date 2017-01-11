//assingment 1-1
function getOdd(input) {
    let Odds = [];
    while(input>0) {
        if(input%2 !== 0) {
            Odds.push(input);
            input--;
        }
        input--;
    }
    return Odds.reverse();
}
console.log(getOdd(10));

------------------------------------------------------

//assingment1-2
function getRectArea(width, height) {
    let area = width * height;
    return area;
}
console.log(getRectArea(3,4));

-------------------------------------------------------

//assingment1-3
function getTriangleArea(base, height) {
    let area = base * height / 2;
    return area;
}
console.log(getTriangleArea(3,4));

-------------------------------------------------------

//assingment1-4
function getArea(base, height) {
    let rectArea = getRectArea(base,height);
    let triArea = getTriangleArea(base, height);
    let result = [rectArea, triArea];
    return result;
}
console.log(getArea(3,4));

-------------------------------------------------------

//assingment1-5
const recentSearchWords = ["코드스쿼드", "자바스크립트그룹"];

function addWord() {
    let size = arguments.length;
    for(let i=0; i<size; ++i) {
        recentSearchWords.push(arguments[i]);
    }
}
addWord("크롱","joy");
console.log(recentSearchWords);


function removeWord(deleteWord) {
    let size = recentSearchWords.length;
    for(let i=0; i<size; ++i) {
        if(deleteWord === recentSearchWords[i]) {
            let newPart1 = recentSearchWords.slice(0,i);
            let newPart2 = recentSearchWords.slice(i+1,size);
            recentSearchWords = newPart1.concat(newPart2);
        }
    }
}
removeWord("자바스크립트그룹");
console.log(recentSearchWords);

-------------------------------------------------------

//assingment1-6
const myfriends = ["hary", "john", "rock"];

function insertElement(myfriends, index, newMember) {
    myfriends.splice(index,0,newMember);
}
insertElement(myfriends,2,"joy");
console.log(myfriends);

-------------------------------------------------------

//assingment1-7 (pre-study)
let car = {name : "아방이",
    color : "blue",
    speed : 0,
    accelate : function(speed) {
        this.speed += speed;
    }};

car.break = function() {
    this.speed = 0;
}

//특정 name에 해당하는 값을 얻기
console.log(car.name);
console.log(car["name"]);
//특정 name에 해당하는 값을 수정
car.name = "개나소나타";
console.log(car["name"]);
//특정 값을 추가
car.type = "SUV";
console.log(car["type"]);
//특정 값을 삭제
delete car.name;
delete car["name"];
console.log(car);
//객체는 어떤 상황에서 유용하게 쓰일 것 같나요?
-->어떤 한 대상의 특징을 설명할 때. 즉 여러 값들이 하나로 뭉쳐 한 대상을 설명할 때








//아래부터 개인공부
-------
function findValue(key) {
    return car[key]
}
console.log(findValue("name"));

-------

function Car(name, color) {
    this.name = name;
    this.color = color;
    this.speed = 0;
}
Car.prototype.accelate = function(speed) {
    this.speed += speed;
}
-------

class Car {
    constructor(name, color) {
        this.name = name;
        this.color = color;
        this.speed = 0;
    }

    accelate(speed) {
        this.speed += speed;
    }
}
let car2 = new Car("아방이2", "red");
console.log(car2);

-------
//알고리즘공부
function setAlign(n, k) {
  var answer = [];
  var numbers = [];
  for(var i = 1; i <= n; ++i) {
    numbers.push(i);
  }

  var cipher = n - 1;
  var index = 0;
  while(answer.length !== n) {
    var temp = factorialN(cipher);
    if(temp < k) {
    	k -= temp;
      index++;
    } else {
      answer.push(numbers[index]);
      numbers = numbers.slice(0,index).concat(numbers.slice(index+1,numbers.length));
      index = 0;
      temp = 0;
    }
  }

	return answer;
}

function factorialN(n) {
  if(n <= 1) return 1;

  return n * factorialN(n-1);
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(setAlign(3, 5));


//

function jumpCase(num) {
  if (num <= 2) {
    return num;
  }
  else {
    var result = jumpCase(num-2) + jumpCase(num-1);
    return result;
  }
}
console.log(jumpCase(10));

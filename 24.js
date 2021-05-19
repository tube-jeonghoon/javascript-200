// 삼항 연산자
var condition = 5 > 10; // false
condition ? console.log("Left") : console.log("Right");

var result = condition
    ? (console.log("첫번째 표현식 입니다."), "표현식1")
    : (console.log("두번째 표현식 입니다."), "표현식2");

console.log(result);

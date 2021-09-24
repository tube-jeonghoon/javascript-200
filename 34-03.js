// 생성자 함수로 함수 생성

var add = new Function("x", "y", "return x+y");

console.log(add(3, 5));

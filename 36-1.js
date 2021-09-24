// arguments 객체 이해하기

function sum() {
  let total = 0;
  for (var i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  console.log(arguments instanceof Array); // instanceof 연산자를 통해 argument 객체가 배열이 아니라는 것을 알수있다.
  return total;
}

let sumOf1to3 = sum(1, 2, 3);
console.log(sumOf1to3);

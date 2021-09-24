// 클로저 이해하기

function createCounterClosure() {
  let count = 0;
  return {
    increase: function () {
      count++;
    },
    getCount: function () {
      return count;
    },
  };
}

const counter1 = createCounterClosure();
const counter2 = createCounterClosure();

counter1.increase();
counter1.increase();
console.log(`counter1의 값은 ${counter1.getCount()}입니다.`);

counter2.increase();
console.log(`counter2의 값은 ${counter2.getCount()}입니다.`);

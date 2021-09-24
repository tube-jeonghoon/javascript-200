const outer = function () {
  let a = 1;
  const inner = function () {
    a++;
    console.log(a);
  };
  return inner;
};

const fnc = outer();

fnc();
console.log(a);

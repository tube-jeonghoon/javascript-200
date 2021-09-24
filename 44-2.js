let a = 2;
function inner() {
  let b = 4;
  function innerinner() {
    console.log(b);
  }
  return innerinner();
}

inner();
console.log(a);

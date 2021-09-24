// 함수 나머지 매개변수 이해하기

function sum(...args) {
    var total = 0;
    for (var i = 0; i < args.length; i++) {
        total += args[i];
    }
    console.log(args.indexOf(1));
    return total;
}
console.log(sum(1, 2, 3));

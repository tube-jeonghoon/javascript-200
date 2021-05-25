// 화살표 함수 함수 몸체 정의

const power = (x) => x ** 2;
console.log(power(2));

console.log(power(2));

const create = (id, content) => {
    return { id, content };
};

// 여러개의 문은 중괄호 생략 불가능
const sum = (a, b) => {
    const result = a + b;
    return result;
};

// 즉시 실행 함수
const person = ((name) => ({
    sayHi() {
        return `Hi? my name is ${name}`;
    },
}))("Lee");

console.log(person.sayHi());

// 고차함수 ES5
[1, 2, 3].map(function (v) {
    return v * 2;
});

// 고차함수 ES6
[1, 2, 3].map((v) => v * 2);

var person = {
    // 프로퍼티 키는 name, 프로퍼티 값은 'Lee'
    name: "Lee",
};

console.log(person.name);
console.log(person["name"]);

person.name = "Kim";

person.age = 20;
console.log(person);

delete person.age;
console.log(person);

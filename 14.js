/*
반복문 for-in
for-in은 in 키워드를 사용합니다.

for (속성명 in 반복할 대상) {

}
*/

var store = { snack: 1000, flower: 5000, beverage: 2000 };

for (var item in store) {
    if (!store.hasOwnProperty(item)) continue;

    console.log(item, store[item]);
}

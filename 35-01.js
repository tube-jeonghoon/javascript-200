// 예외 처리하기
// try catch finally 문
console.log("[Start]");

try {
    foo();
} catch (error) {
    console.error("[에러발생]", error);
}
console.log("[End]");

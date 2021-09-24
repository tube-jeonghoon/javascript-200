// 함수 표현식
let 함수표현식 = function (name) {
  return console.log(`이건 ${name} 입니다.`);
};

// 함수 선언문
function 함수선언문(name) {
  return console.log(`이건 ${name} 입니다.`);
}

// Function 생성자 함수
let 생성자함수 = new Function(
  'name',
  'return console.log(`이건 ${name} 입니다.`)'
);

// 함수 표현식
let 화살표함수 = (name) => {
  return console.log(`이건 ${name} 입니다.`);
};

함수표현식('함수표현식');
함수선언문('함수선언문');
생성자함수('생성자함수');
화살표함수('화살표함수');

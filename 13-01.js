var hometown = [
  { name: "남준", place: "일산", city: "고양" },
  { name: "진", place: "과천" },
  { name: "호석", place: "광주", city: "전라도" },
  { name: "지민", place: "부산", city: "경상도" },
];

console.log(hometown.length);

for (var i = 0; i < hometown.length; i++) {
  var h = hometown[i];
  if (h.name === "호석") {
    console.log(
      h.name + "의 고향은 " + h.city + "이며 지역은 " + h.place + "입니다."
    );
  }
}

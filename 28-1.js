// 객체 이해하기 1
let family = {
  adrress: 'seoul',
  members: {},
  addFamily: function (age, name, role) {
    this.members[role] = {
      age: age,
      name: name,
    };
  },
  getHeadcount: function () {
    return Object.keys(this.members).length;
  },
};

family.addFamily(30, 'chloe', 'aunt');
console.log(family.getHeadcount());

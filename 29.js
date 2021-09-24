var family = {
    adress: "Seoul",
    member: {},
    addFamily: function (age, name, role) {
        this.member[role] = {
            age: age,
            name: name,
        };
    },
    getHeadcount: function () {
        return Object.keys(this.member).length;
    },
};

family.addFamily(30, "chloe", "aunt");
family.addFamily(3, "lyn", "niece");
family.addFamily(10, "dangdangi", "dog");

var printMembers = function () {
    var members = family.member;
    for (role in members) {
        console.log(
            "role => " +
                role +
                ", name => " +
                members[role].name +
                ", age => " +
                members[role].age
        );
    }
};
printMembers();

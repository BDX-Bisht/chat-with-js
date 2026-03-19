//? ---- for in loop for both array and objects --------------

const myObj = {
    game1: "Spiderman",
    game2: "Irom Man",
};

for (const key in myObj) {
    // console.log(myObj[key]);
}

const myArr = [1, 2, 3, 4, 5, 6];
for (const key in myArr) {
    // console.log(myArr[key]);
}

const maps = new Map();
maps.set("name", "Dipanshu");
maps.set("city", "Almora");
maps.set("state", "Uttrakhand");

for (const key in maps) {
    // console.log(maps[key]);
}



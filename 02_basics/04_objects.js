//?-------- This is singleton object.....
// const tinderUser = new Object();

//?-------- This is non singleton object....
const tinderUser = {};

tinderUser.id = "1234asdf";
tinderUser.name = "Dipanshu Bisht";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "demo@gmail.com",
  fullname: {
    userFullName: {
      firstName: "Demo",
      lastName: "Kumar",
    },
  },
};

// console.log(regularUser?.fullname);

const obj1 = { 1: "One", 2: "two" };
const obj2 = { 3: "Three", 4: "Four" };
const obj3 = { 5: "Five", 6: "Six" };

// const obj4 = { obj1, obj2 };
// const obj4 = Object.assign({}, obj1, obj2, obj3);
const obj4 = { ...obj1, ...obj2, ...obj3 };

// console.log(obj4);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

//!--- Destructured In Objects----

const course = {
  name: "Js in hindi",
  coursePrice: 999,
  instructor: "hitesh",
};

const { instructor: inst } = course;

console.log(course["name"]);
console.log(inst);

// singleton

// Object.create()

// object literals

const newSym = Symbol("mykey");
const user = {
  name: "Dipanshu",
  "full Name": "Dipanshu Bisht",
  age: 20,
  [newSym]: "mykey1",
  location: "Jaipur",
  email: "dipanshu@gmail.com",
  isLoogedIn: false,
};

// Object.freeze(user);

// console.log(user.name);
// console.log(user.email);
// console.log(user["name"]);
// console.log(user["full Name"]);

// console.log(user[newSym]);

user.email = "bisht@gmail.com";

// console.log(user.email);

user.greetings = function () {
  console.log("Welcome to the User");
};
user.greetings2 = function () {
  console.log(`Welcome to the User ${this.name}`);
};

// console.log(user.greetings);
// console.log(user.greetings());

console.log(user.greetings2());

const user = {
    username: "Dipanshu",
    price: 200,
    welcomeMessage: function () {
        console.log(`Welcome to website, ${this.username}`);
        console.log(this);
    },
};

// user.welcomeMessage();
// user.username = "Kamal";
// user.welcomeMessage();

// console.log(this);

// const chai = function () {
//     let username = "Dipanshu";
//     console.log(this.username);
// };

// const chai = () => {
//     let username = "Dipanshu";
//     console.log(this);
// };

// chai();

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// };

// const addTwo = (num1, num2) => num1 + num2;

const addTwo = (num1, num2) => ({ username: "Dipanshu" });

console.log(addTwo(3, 4));

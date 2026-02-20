// Dates

let myDate = new Date();

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2003, 5, 22, 8, 0);
let myCreatedDate = new Date("2023-05-22");
// let myCreatedDate = new Date("22-6-2003"); //!-- Invalid date
// console.log(myCreatedDate.toLocaleString());

let myDateTimeStamp = Date.now();

// console.log(myDateTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());
console.log(newDate.getFullYear());
// console.log(newDate.getVarDate);

console.log(
  newDate.toLocaleString("default", {
    day: "2-digit",
    weekday: "long",
    year: "numeric",
    formatMatcher: "best fit",
  }),
);

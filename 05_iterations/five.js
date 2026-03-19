const coding = ["js", "ruby", "java", "python", "c++"];

coding.forEach((val, index, arr) => {
    // console.log(val, index, arr);
});

const myCoding = [
    {
        language: "javascript",
        short: "JS",
    },
    {
        language: "ruby",
        short: "RB",
    },
    {
        language: "java",
        short: "java    ",
    },
];

myCoding.forEach((element) => {
    console.log(`Language ${element.language} short name is ${element.short}`);
});

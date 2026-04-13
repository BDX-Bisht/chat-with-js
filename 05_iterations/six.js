// const coding = ["js", "ruby", "java", "python", "c++"];

//! For each function do not return any values
// const values = coding.forEach((item) => {
//     console.log(item);
//     return item;
// });

// console.log(values);

///////////////////////////////////////////////////////////////

//! Array filters mothods
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const myValues = myNums.filter((val) => {
    return val >= 8;
});

// console.log(myValues);

const books = [
    {
        title: "Echoes of Tomorrow",
        genre: "Science Fiction",
        publish: 2018,
        edition: "1st",
    },
    {
        title: "Galactic Drift",
        genre: "Science Fiction",
        publish: 2021,
        edition: "2nd",
    },
    {
        title: "The Silent Forest",
        genre: "Mystery",
        publish: 2020,
        edition: "1st",
    },
    {
        title: "Hidden Clues",
        genre: "Mystery",
        publish: 2017,
        edition: "3rd",
    },
    {
        title: "Crimson Skies",
        genre: "Fantasy",
        publish: 2015,
        edition: "2nd",
    },
    {
        title: "Dragon’s Oath",
        genre: "Fantasy",
        publish: 2019,
        edition: "1st",
    },
    {
        title: "Fragments of Truth",
        genre: "Thriller",
        publish: 2022,
        edition: "1st",
    },
    {
        title: "Dark Pursuit",
        genre: "Thriller",
        publish: 2016,
        edition: "2nd",
    },
    {
        title: "Waves of Eternity",
        genre: "Romance",
        publish: 2019,
        edition: "1st",
    },
    {
        title: "Hearts Entwined",
        genre: "Romance",
        publish: 2023,
        edition: "1st",
    },
];

// const userBooks = books.filter((item) => item.genre === "Thriller");
const userBooks = books.filter(
    (item) => item.publish > 2020 && item.genre == "Thriller",
);

console.log(userBooks);

// for loop

for (let i = 1; i <= 10; i++) {
    // console.log(`Table of ${i} is :`);

    for (let j = 1; j <= 10; j++) {
        // console.log(`${i} X ${j} = ${i * j}`);
    }
}

// break and continue

// for (let i = 1; i <= 20; i++) {
//     if (i == 5) {
//         console.log("Detected 5");
//         break;
//     }
//     console.log(`Value of i is : ${i}`);
// }

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log("Detected 5");
        continue;
    }
    console.log(`Value of i is : ${i}`);
}

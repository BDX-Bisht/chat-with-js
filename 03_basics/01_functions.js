function addTwoNumbers(num1, num2) {
    console.log(num1 + num2);
}

// addTwoNumbers(4, 5);

function calculateCartPrice(val1, val2, ...num1) {
    return num1.reduce((acc, num) => acc + num);
}

// console.log(calculateCartPrice(200, 400, 500, 600));

const user = { username: "Hitesh", price: 199 };

function handleObject(asyObject) {
    console.log(
        `Username is ${asyObject.username} and price is ${asyObject.price}.`,
    );
}

// handleObject(user);
// handleObject({ username: "DIpanshu", price: 400 });

const mynewArr = [300, 20, 400];

function returnSecondValue(getArr) {
    return getArr[1];
}

console.log(returnSecondValue(mynewArr));
console.log(returnSecondValue([3, 4, 5, 6]));

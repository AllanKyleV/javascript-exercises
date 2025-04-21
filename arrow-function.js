// Anonymous function & arrow function

//Arrow function
const getAverage = (firstNum, secondNum) => {
    return (firstNum + secondNum) / 2;
}

console.log(getAverage(10, 20)); // Output: 15
console.log(getAverage(5, 7));   // Output: 6


//Shorter
const getAverage2 = (x, y) => (x + y) / 2;

console.log(getAverage2(10, 20)); // Output: 15
console.log(getAverage2(5, 7));   // Output: 6

//Challenge: Double the Numbers

const doubleNumbers = (numbers) => numbers.map(num => num * 2);

console.log(doubleNumbers([1, 2, 3, 4, 5]));  
// Output: [2, 4, 6, 8, 10]

//Exercises
const hello = (name) => console.log(`Hello ${name}.`);

const numbers = [1, 2, 3, 4, 5, 6]

const squares = numbers.map((element) => Math.pow(element, 2));

console.log(squares);






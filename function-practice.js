// Function declaration
function sayHello() {
    console.log('Hello');
}

sayHello()

// Function expression
const sayOlah = function() {
    console.log('Olah');
}

sayOlah()

// Arrow function
const sayHi = () => console.log('Hi');

sayHi()

// An example with parameters
/*function greet(name) {
    console.log(`Hello, ${name}`)
}*/

const greet = (name) => console.log(`Hello, ${name}`)

greet('Tim')

const numbers = [1, 2, 3, 4, 5, 6];

/*const squaredNum = numbers.map(square);

function square(num) {
    return num * 2;
}*/

const squaredNum = (numbers) => numbers.map(num => num ** 2);

console.log(squaredNum(numbers));

// Using filter
// Filter the even numbers then, get the power of 3
/*const nums = [5, 6, 7, 8, 9, 10];

const getPower = (nums) => {
    return nums.filter(num => num % 2 === 0).map(num => num ** 3)
};

console.log(getPower(nums))*/

//Reduce challenge
const nums = [5, 10, 15, 20, 25, 30];

//const squaredOdds = (nums) => nums.filter(num => num % 2 !== 0).map(num => num ** 2).reduce((acc, curr) => acc + curr, 0);

//Writing it using .reduce() instead of .filter().map()

const squaredOdds = nums.reduce((acc, num) => {
    if (num % 2 !== 0) {  
      return acc + num ** 2; 
    }
    return acc;
  }, 0);

console.log(squaredOdds);
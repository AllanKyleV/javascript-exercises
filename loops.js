for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
};
console.log('-----------------')

// Odd Numbers Sum
/*let sum = 0

for (num = 1; num <= 20; num++) {

    if (num % 2 !== 0) {
        sum += num;
    }
}

console.log(sum);*/

console.log('-----------------')

// Some of Multiples of 3
let sum = 0;

for (let num = 1; num <=50; num++) {
    if (num % 3 === 0) {
        sum += num;
    }
}

console.log(sum)

console.log('-----------------')

const numbers = [3, 6, 9, 12, 15, 18, 21, 24];

let doubledEvens = [];

for (let num = 0; num < numbers.length; num++) {
    if (numbers[num] % 2 === 0) {
        doubledEvens.push(numbers[num] * 2);
    }
}

console.log(doubledEvens);

console.log('-----------------')
// Using map method

let doubledEvens2 = numbers.filter(num => num % 2 === 0).map(num => num * 2);

console.log(doubledEvens2)

console.log('-----------------')

function anotherNumbers() {
    const numbers = [2, 5, 8, 11, 14, 17, 20];

    let tripledOdds = [];

    for (let num = 0; num < numbers.length; num++) {
        if (numbers[num] % 2 !== 0) {
            let newNum = numbers[num] * 3;
                tripledOdds.push(newNum);
        }
    }

    console.log(tripledOdds);
}

anotherNumbers()

console.log('-----------------')

//For loop
function forLoop() {
    const nums = [4, 7, 2, 9, 5];

    let multipliedByIndex = [];
    let i = 0;

    for (let num = 0; num < nums.length; num++) {
        multipliedByIndex.push(nums[num] * i++);
    }
    console.log(multipliedByIndex)
}

forLoop()

// For of
function forOff() {
    const nums = [4, 7, 2, 9, 5];

    let multipliedByIndex = [];
    let i = 0;
    
    for (let num of nums) {
        multipliedByIndex.push(num * i++);
    }
    console.log(multipliedByIndex)
}

forOff()

console.log('-----------------')

function numbersDivisibleByIndex () {
    const nums = [5, 10, 15, 8, 20, 25];

    const newNums = [];
    let i = 0;

    for (let num = 0; num < nums.length; num++) {
        if (nums[num] % i === 0) {
            newNums.push(nums[num])
        }
        i++;
    }

    console.log(newNums)
}

numbersDivisibleByIndex()

function numbersDivisibleByIndex2 () {
    const nums = [5, 10, 15, 8, 20, 25];

    const newNums = [];
    let i = 0;

    for (let num of nums) {
        if (num % i === 0) {
            newNums.push(num)
        }
        i++;
    }

    console.log(newNums)
}

numbersDivisibleByIndex2()
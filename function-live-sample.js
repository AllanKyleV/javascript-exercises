const numbers = (numbers) => (numbers.filter( num => (num % 2) == 0)).map(num => num * 10);

console.log(numbers([1, 2, 3, 4]))
console.log('----------------------')

// Reduce method challenge

const multiplyAll = (nums) => nums.reduce((acc, curr) => acc * curr, 1); 

console.log(multiplyAll([2, 3, 4]));
// Output: 24
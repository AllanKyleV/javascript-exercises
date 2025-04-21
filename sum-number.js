const sumEvens = (nums) => (nums.filter(num => num % 2 === 0)).reduce((acc, curr) => acc + curr, 0);

console.log(sumEvens([1, 2, 3, 4, 5, 6]));
// Output: 12 (because 2 + 4 + 6 = 12)

function reducedNumbers(nums) {
    const reducedNum = nums.filter(num => num > 10).map(num => num ** 2).reduce((acc, curr) => acc + curr, 0);
    return reducedNum;
}   

console.log(reducedNumbers([3, 12, 5, 20, 8]))
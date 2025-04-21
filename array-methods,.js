// Exercise 1: .map()
function doubledNums(nums) {
    const doubled = nums.map(num => num * 2);
    return doubled;
}
//map methods loops through each item in an array, enables to configure each, according to your conditions and then return as a new configured array.


console.log(doubledNums([2, 5, 8]));

// Exercise 2: .filter()
function ageRestriction(ages) {
    const allowed = ages.filter(age => age >= 18);
    return allowed;
}
console.log(ageRestriction([12, 19, 22, 15, 30]));
//Filter loops through an array and filter each item then return as a new array in an item passed the condition.

// Exercise 3: .reduce()
function sum(nums) {
    /*
    const total = nums.reduce(function(acc, curr) {
        return acc + curr;
    }, 0);*/

    //Arrow function
    const total = nums.reduce((acc, curr) => acc + curr, 0)
    return total;
}
console.log(sum([10, 5, 20]));

// Exercise 4: .find()
function findLetterS(words) {
    /*const some = words.find(function(word) {
        if (word[0] == 's') {
            return word;
        }
    })
    return some;*/

    const some = words.find(word => word[0] === 's');
    return some;
}

console.log(findLetterS(["apple", "sun", "banana", "star"]));
// Find an element which matches the condition, it returns the item if it passes the condition.

// Exercise 5: .some()
function evenNum(nums) {
    const even = nums.some(num => num % 2 === 0);
    return even;
}
console.log(evenNum(([3, 7, 11, 4])));
// Some method check if atleast one element in an array passed the function provided, retuning true, otherwise, false.
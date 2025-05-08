// 1 Array Iteration
function arrayIteration(nums) {
    return nums.filter(num => num % 3 === 0);
}   
console.log(arrayIteration([2, 3, 4, 5, 6]));

// 2 Sum of Squares 
function sumOfSquares(nums) {
    return nums.map(num => num ** 2).reduce((acc, curr) => acc + curr, 0)
}
console.log(sumOfSquares([1, 2, 3, 4]))

// 3 Object Property Finder
function objectPropertyFinder(object, key) {
    return key in object ? object[key] : undefined;
    /*if (key in object) {
        return object[key]; // object[key] to target key value
    } else {
        return undefined;
    }*/
}
const person = {name: 'John', age: 25}
console.log(objectPropertyFinder(person, "gender"))
console.log(objectPropertyFinder(person, "age"))

// 4 Array Flattening
function arrayFlattening(arrays) {
    return arrays.flat(Infinity);
    /*let result = [];

    for (let item of arrays) {
        if (Array.isArray(item)) {
            result = result.concat(arrayFlattening(item)); // recursive call
        } else {
            result.push(item);
        }
    }
    return result;*/
}

console.log(arrayFlattening([1, [2, 3], [4, [5, 6]]]))
// Loop through the array, 

// 5 Counting Occurrences
function countingOccurrences(arrays, times) {
    return arrays.filter(num => num === times).length;
    /*let count = 0;
    for (let num of arrays) {
        if (num === times) {
            count++;
        }
    } return count;*/
}
console.log(countingOccurrences([1, 5, 5, 2, 5, 2, 5, 5], 5))
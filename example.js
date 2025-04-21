const numbers = [1, 2, 3];

function doubleNum(numbers) {
    const doubled = numbers.map(function(num) {
        return num * 2;
    })
    return doubled;
}

// Arrow function
function doubleNums(numbers) {
    const doubled = numbers.map(num => num * 2);
    return doubled;
}

console.log(doubleNum(numbers));
console.log(doubleNums(numbers));
// Factorial
function factorial(n) {
    if (n === 1) return n;
    return n * factorial(n - 1);
}
console.log(factorial(5));

// Count Down
function countDown(n) {
    if (n === 0) return n;
    console.log(n);
    return countDown(n - 1);
}
countDown(5);

// Count Up
function countUp(n) {
    if (n === 0) return n;
    countUp(n - 1);
    return console.log(n);
}
countUp(5);
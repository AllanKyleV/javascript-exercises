// Input: n (e.g. 10)
// Output: → 3 + 5 + 6 + 9 = 23
// Goal: returns the sum of all the multiples of 3 or 5 that are less than n.

/* Pseudocode:
    
*/

function sumMultiples(n) {
    let multiples = 0;
    for (let num = 0; num < n; num++) {
        if (num % 3 === 0 || num % 5 === 0) {
            multiples += num;
        }
    }
    return multiples;
}

console.log(sumMultiples(10)); // → 3 + 5 + 6 + 9 = 23

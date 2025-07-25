function anagramPalindrome(str) {
    // if (str === str.split('').reverse().join('')) return true;
    // return false;

    const arr = str.split('');

    count = 0;

    for (let item of arr) {
        if(!arr.includes(item)) {
            console.log(item)
        }
    }
    
}

console.log(anagramPalindrome('civic'));
console.log(anagramPalindrome('ivicc'));
console.log(anagramPalindrome('hello'));
console.log(anagramPalindrome('aabb'));
console.log(anagramPalindrome('aabbc'));

// Pseudocode: to tell if its a palindrome, the original string and the reversed string should be equal.

// If we re arranged we can tell if the string is palindrome, by it's doubled letters and at least one letter has is different. 

// Option I: Loop and find pair.
// loop, an item will try to find another item that has the same value, if it founds that value, splice that from the origsinal string. And so on until empty or one remains.
    // issue: if that one unique letter is not at the middle of the string, there could be a problem.

// Option II: Series of conditions.

// A string can form a palindrome if at most one character appears an odd number of times (in case of odd-length strings).
// Get the number on how many times the items appers on the string, find the odd numbers, if more than one odd number then it's not an anagram palindrome. 
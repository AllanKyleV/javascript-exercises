function anagramPalindrome(str) {
    if (str === str.split('').reverse().join('')) return true;
    return false;
}

console.log(anagramPalindrome('civic'));
console.log(anagramPalindrome('ivicc'));
console.log(anagramPalindrome('hello'));
console.log(anagramPalindrome('aabb'));

// Pseudocode: to tell if its a palindrome, the original string and the reversed string should be equal.

// If re arranged we can tell if the string is palindrome, by it's doubled letters and at least one letter has is different. 

// Option I:
// loop, an item will try to find another item that has the same value, 
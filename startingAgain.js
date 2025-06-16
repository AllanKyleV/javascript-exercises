// Reverse string
function reverseString(str) {
//   let result = [];
//   const arr = str.split('');
  
//   for (let item of arr) {
//     result.unshift(item);
//   }
  
//   return result.join('');

    return str.split('').reverse().join('');
}
console.log(reverseString('hello'));

// Capitalize the First Letter
function capitalizeFirstLetter(str) {
    // let result = [];
    // const arr =  str.split('');

    // for (let i = 0; i < arr.length; i++) {
    //     if (i === 0) {
    //         result.push(arr[i].toUpperCase());
    //     } else {
    //         result.push(arr[i].toLowerCase());
    //     }
    // }

    // return result.join('');

    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}
console.log(capitalizeFirstLetter('javascript'));
    
// Check for Palindrome
function isPalindrome(str) {
    // let reversedStr = str.split('').reverse().join('');
    // if (reversedStr === str) {
    //     return true;
    // } else {
    //     return false;
    // }
    return str === str.replace(/\s+/g, '').split('').reverse().join('');
}
console.log(isPalindrome('racecar'));
console.log(isPalindrome('hello'));

// Goal, return true if palindrome, else false
// reverse the string, if the reversed str is equal to the original str, return true, else false.
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
    let result = [];
    const arr =  str.split('');

    for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
            result.push(arr[i].toUpperCase());
        } else {
            result.push(arr[i].toLowerCase());
        }
    }

    return result.join('');
}
console.log(capitalizeFirstLetter('javascript'))
function removeSmallest(arr) {

    let baseNum = 0;
    for (let num of arr) {
        if (num === arr[0]) baseNum = num;
        if (num < baseNum) baseNum = num;
    }

    if (arr.includes(baseNum)) {
        arr.splice(arr.indexOf(baseNum), 1);
    }

    return arr;
}

console.log(removeSmallest([5, 3, 2, 1, 4]));
console.log(removeSmallest([1, 2, 3, 1]));

// Pseducode:
//      Loop through the array, create a base that will hold the current number to be conditioned. If the current number is the array[0] then it is the base number. Next num, if the num(a current num) is lower than the base num, then make it the base num. And so on.

//      New Goal: remove the smallest number in the array and return the new array.
// Pseducode: Since I already started the code,the good thing is that I found the smallest number. Next is the remove that number in the array.
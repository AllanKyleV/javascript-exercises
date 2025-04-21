// Input: a string 'hello'
// Output: reversed 'olleh'
// Goal: create a function that returns the reversed version of the input string

const string = ('hello');
let reversedString = '';

for (let letter of string) {
    reversedString = letter + reversedString;
}

console.log(reversedString)

// Return the highest number
function getHighestNum(numbers) {
    let index = 0;
    let max = numbers[index];

    for (num of numbers) {
        if (num >= max) {
            max = numbers[index];
            index += 1;
        } else {
            index += 1;
        }
    }

    console.log(max)
}

getHighestNum([3, 7, 2, 9, 5]);

//Count a Letter in a String
function countLetter(string, letter)  {
    let count = 0;

    for (let i of string) {
        if (i == letter) {
            count += 1;
        }
    }

    return count;
}

console.log(countLetter('bummer', 'm'))
function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for (char of str.toLowerCase()) {
        if (vowels.includes(char)) count++;
    }
    return count;
}

console.log(countVowels("feeling better already"));
console.log(countVowels("Walks clear my mind"));

// Goal: Count the vowels, return the number of vowels appeared on the string.
// Pseducode: Loop through the string, if the item includes vovels, the count++; return count;

// Next Challenge: VOwel frequency Counter
function vowelFrequencyCounter(str) {
    let frequency = {
        'a': 0,
        'e': 0,
        'i': 0,
        'o': 0,
        'u': 0
    }

    for (let char of str.toLowerCase()) {
        if (char in frequency) {
            frequency[char]++;
        }
    }
    return frequency;
}
console.log(vowelFrequencyCounter("Already clearing space"));

// Presducode:  Create an object where each element's property has a key with a zero value.
// Requirements: Must be case sensitive. set string to lowercase. 
// Loop through 
function reversedWord(str) {
    let reverseWord = [];
    for (let char of str) {
        reverseWord.unshift(char);
    }
    return reverseWord.join('');
}

console.log(reversedWord('javascript'));


const reverse = (str) => {
    let reversedWord = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }
    return reversedWord;
}

console.log(reverse('programmer'));
function logWordLengths(words) {
    words.forEach(word => console.log(`Word: ${word}, Length: ${word.length}`));
}

logWordLengths(["code", "javascript", "fun"]);
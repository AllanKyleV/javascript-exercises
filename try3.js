// divide 2 numbers
// if empty, throw error 'Cannot divide by zero'
// catch error and log the message

function result(a, b) {
    try {
        if (b === 0) {
            throw new Error('Cannot divide by zero');
        }
        let result = a / b;
        console.log(result)
    } catch (error) {
        console.log(error.message); // "Cannot divide by zero"
      }
}

result(5, 0);
result(10, 2); // This should log the result of the division (5)

console.log('------------------------')

function str(str) {
    try {
        if (str === '') {
            throw new Error('Input cannot be empty');
        } else {
            console.log(`Valid input: ${str}`)
        }
    } catch (error) {
        console.log(error.message)
    }
}

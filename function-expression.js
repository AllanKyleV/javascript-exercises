const sayMessage = function() {
    console.log("JavaScript is fun!");
}

sayMessage()
console.log('----------------------')

const greetUser = function(name) {
    console.log(`Hello ${name}`);
}

greetUser('Alice')
console.log('----------------------')

//Call back function
function runCallBack(callback) {
    callback()
}

runCallBack(function() {
    console.log(`Callback is running`);
});

console.log('----------------------')
function displayMessage(name, callback) {
    const message = callback(name);
    console.log(message)
}

displayMessage("Lina", function(name) {
    return `Welcome, ${name}! Have a great day.`;
  });
  
console.log('----------------------')

function compliment(name, callback) { 
    const message = callback(name);
    console.log(message);
}

compliment(`Sid`, function(name){
    return `Hi ${name}, you're a genius`;
});


//Function Expression
const sayHello = function() {
    console.log('Hello');
}

sayHello()

function hello() {
    console.log('Hello')
}

hello()


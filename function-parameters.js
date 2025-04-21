function canDrive(name, age) {
    console.log(age >= 18 
        ? `${name} is allowed to drive.`
        : `${name} is not allowed to drive. Please wait ${18 - age} more years.`);
}

canDrive("Maria", 21); 
// Output: Maria is allowed to drive.

canDrive("Leo", 15); 
// Output: Leo is not allowed to drive.5

console.log('-------------------------')

function gradeStudent(name, score) {

    let grade;

    if (score <= 100 && score >= 90) {
        grade = 'an A'; 
    } else if (score >= 80 && score <= 89) {
        grade = 'B';
    } else if (score >= 70 && score <= 79) {
        grade = 'C';
    } else if (score >= 60 && score <= 69) {
        grade = 'D';
    } else if (score <= 59) {
        grade = 'F';
    } else {
        return console.log(`Okay Einstein, try again!`)
    }
    
    const sentence = `${name} got a ${grade}.`;
    console.log(sentence)
}

gradeStudent("Alice", 88);
// Output: Alice got a B.
gradeStudent('Albert', 102);

console.log('-------------------------')

function getTicketPrice(age) {
    let price;

    switch (true) {
        case (age >= 0 && age <= 4):
            price = 'Ticket is free';
            break;
        case (age >=5 && age <= 12):
            price = 'Child ticket: $5'

            break;
        case (age >=13 && age <= 17):
            price = 'Teen ticket: $8'
            break;
        case (age >=18 && age <= 64):
            price = 'Adult ticket: $10'
            break;
        case (age > 65):
            price = 'Senior ticket: $6'
            break;
        case (age < 0):
            return console.log('Invalid age!')
    };

    console.log(price);
}

getTicketPrice(3);  
// Output: Ticket is free!

getTicketPrice(10); 
// Output: Child ticket: $5

getTicketPrice(70); 
// Output: Senior ticket: $6

getTicketPrice(-2); 
// Output: Please enter a valid age.

console.log('-------------------------')

//Clean Version
function getTicketPrice(age) {
    let price;

    switch (true) {
        case (age < 0):
            return console.log('Invalid age!');
        case (age <= 4):
            price = 'Ticket is free';
            break;
        case (age <= 12):
            price = 'Child ticket: $5';
            break;
        case (age <= 17):
            price = 'Teen ticket: $8';
            break;
        case (age <= 64):
            price = 'Adult ticket: $10';
            break;
        case (age >= 65):
            price = 'Senior ticket: $6';
            break;
    }

    console.log(price);
}

getTicketPrice(5); 
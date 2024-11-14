//How to find factorial of a given number

//factorial-product of all number from 1 to that number 
//eg=5!=>1*2*3*4*5=120
------------------1st Method--------------------------
function factorial(n){
    if(n === 0){
        return 1;
    }else return n* factorial(n-1);
}
console.log(factorial(5));

//OUTPUT=>120
-----------------------------------------2nd Method---------------------
function factorial(num) {
    if (num < 0) return 'Factorial not defined for negative numbers';
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(5)); 

// Output: 120
-----------------------------------------3rd Method---------------------
// take input from the user
const number = parseInt(prompt('Enter a positive integer: '));

// checking if number is negative
if (number < 0) {
    console.log('Error! Factorial for negative number does not exist.');
}

// if number is 0
else if (number === 0) {
    console.log(`The factorial of ${number} is 1.`);
}

// if number is positive
else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
    }
    console.log(`The factorial of ${number} is ${fact}.`);
}

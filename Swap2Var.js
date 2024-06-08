//How to swap two variable without using third variable

let a=7;
let b=3;
//with using third variable
let temp=a;
a=b;
b=temp;
console.log(`Using Third Value:- Value of a is ${a} and value of b is ${b}`);
console.log("-------------------------------------")
let A=17;
let B=23;
//without using third variable
[A,B]=[B,A];

console.log(`Without Using Third Value:-Value of A is ${A} and value of B is ${B}`);
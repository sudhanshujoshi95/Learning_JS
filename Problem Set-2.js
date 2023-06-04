//1. Program to check, whether, the age of person is between 10 and 20 or not.

let age = prompt("Enter the age");

if(age>10 && age<20){
    console.log("Yes");
}
else{
    console.log("No");
}

//2. Program to check, whether, the given number is divisible by both 2 and 3 or not.

let num = prompt("Enter the num");

if(num%2==0 && num%3==0){
    console.log("Yes");
}
else{
    console.log("No");
}

//3.num divisible by either 2 or 3.

if(num%2==0 || num%3==0){
    console.log("Yes");
}
else{
    console.log("No");
}

//4. Person having age geater than 18 can drive, and person having age less than 18 can't drive, write a program using Ternary Operator.

let drive_age = prompt("Enter the Age");

console.log("Person can ", drive_age>=18? "Drive" : "Not Drive");
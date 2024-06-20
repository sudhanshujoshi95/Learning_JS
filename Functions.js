function myName(firstName, lastName){
    return `${firstName} ${lastName}`;
}

console.log(myName('pawan', 'joshi'));

function add(num1, num2){
    return num1+num2;
}

console.log("The result is: ", add(1, 2));

/* function multi(){
    let v1 = prompt("Enter Value1: ");
    let v2 = prompt("Enter Value2: ");
    
    console.log(v1*v2);
}

multi();  */

// function expression

const myNewName = function(firstName, lastName){
    return `${firstName} ${lastName}`;
}

console.log(myNewName('sudhanshu', 'joshi'));

//function  constructor

const myFunc = new Function('val1', 'val2', 'return val1/val2');

const myVar = myFunc(10, 2);

console.log("The result is: ", myVar);

//variable hoisting
//This means that the function is invoked before its declaration, is possible. But this is not possible in function definitions and constructors.
console.log("Result: ", multi(4, 5));

function multi(a, b){
    return a*b;
}

//modern way of making a function in Js.

const hello = (num1, num2) => {
    console.log("Hello, This is the New Way of making Function in Js.");
    console.log("The sum is: ", num1+num2);
    return num1+num2;
    
}

console.log(hello(2, 8)); // function calling

//higher-order functions[Custom higher-order function]:-

let uppercase = function(str){
    return str.toUpperCase();
}

let lowercase = function(str){
    return str.toLowerCase();
}

let transformer = function(str, fun){
    return fun(str);
}

console.log(transformer("abcdefgh", uppercase))
console.log(transformer("BDSHCBHB bshcbh BJBBuj bJBJSJ", lowercase))


// built-in higher order functions:- map, filter, reduce.

//map:-
const num = [1, 2, 3, 4];
const doubled = num.map(x => x * 2);
console.log(doubled); // [2, 4, 6, 8]

//filter:-
const nums = [1, 2, 3, 4];
const even = nums.filter(x => x%2 === 0);
console.log(even);

//reduce:-
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum); // 10

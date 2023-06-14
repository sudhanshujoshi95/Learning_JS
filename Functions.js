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


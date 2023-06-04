//1. create a var. of type string and add it to a number.

let a = "P-";
let b = 1;

console.log(a+b);

//2. use typeof operator to find the type of string used in last Q.

console.log(typeof(a+b));

//3. create a Const obj. in js, and check whether you can change it to hold a number later.

const a1 = {
    name: "sudhanshu",
    age: 21,
    isMale: true
}

//a1 = 20;  //ANS: No! We can't hold a number/strimg anything in CONST obj.

console.log(a1);

//4. Try to add a new Key to the CONST obj in the Q.3, is it possible to do it??

a1['student'] = true;
a1['Enrollment_No.'] = 766;
a1['name'] = "pawan";

//ANS: Yes, We can add New Keys to the Const. Obj and also We can change the value of the keys which are in CONST. obj.

console.log(a1);

// a1 = { }  We Can't make Const. object again with the same name.

//5. Write a JS program to find the meaning of 5 words from Diictionary.

const dictionary = {
    appreciate: "recognize the ful of worth of.",
    ataraxia: "a state of freedom from emotional disturbance and Anxiety.",
    yakka: "work, especially HARD-WORK."
}

console.log(dictionary);
console.log(dictionary.appreciate);
console.log(dictionary['ataraxia']);  //Just the different ways to access(Print) the Particular obj.
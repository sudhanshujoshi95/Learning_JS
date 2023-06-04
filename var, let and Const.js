/* 
Var can be re declared and also can be re updated, It is Globally Scoped.
Let can't be re declared, but can be re updated, it is Blocked Scoped.
Const neither be Re declared, nor be Re Updated, it is also Blocked Scoped.
*/

var a=10;

console.log(a); //10

var a = 20;  //var can be re-declared and re-updated

console.log(a) //20

var b = "world"  //intead of 'var', here we can also use 'let'

{
    let b = "hello"
    console.log(b);  //hello
}

console.log(b);  //world

const c = "byee";

console.log(c);

let d =100;
// let d=200;  --> throws an error, 'let' can't be re-declared
console.log(d);
d=200; // but can be re-updated

console.log(d);  //200
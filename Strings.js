// Strings are Immutable, i.e., can't be changed.

let str = "I'm Sudhanshu Joshi";
console.log(str);
console.log(str.length);
console.log(str[4]);

let newstr = new String("I'm Sudhanshu Joshi");  //object
console.log(typeof(newstr));
console.log(str==newstr);  // same values --> True.
console.log(str===newstr); // same value, but diff. types --> False.

let name1 = 'pawan';
let name2 = 'sudhanshu';

console.log(`${name1} is a friend of ${name2}`); //This thing of using/inserting Variables in a Template Literal
                                                 //is called "STRING INTERPOLATION".
                    
 let fruit = 'Let\'s do this.\nWe are on Fire\rWe did it guys!'; // Escape Sequece Characters --> counted only as 1 character.
 console.log(fruit);                                       



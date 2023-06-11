let str = "My name is Sudhanshu Joshi, My age is 21. ";
let newstr = new String("I love to Play Cricket.");
console.log(str);
console.log(str.indexOf("My", 10));  //can take two Parameters.
console.log(str.lastIndexOf("My"));  //can take two parameters.
console.log(str.search("Sudhanshu"));  //can only take one parameter.
console.log(str.slice(11, 26));  // parameters are -> start-index and end-index, It can also take -ve argument.
console.log(str.substring(27, 38)); //same as SLICE, but It can't take the -ve argument.

console.log(str.concat(newstr).toUpperCase()); //Concatenated two Strings, and make them Display as UPPERCASE, by using .toUpperCase() method.
console.log(str.toLowerCase());  // .toLowerCase() method to make the String Display as LowerCase.
console.log(str.concat(newstr).toUpperCase().replace('SUDHANSHU', 'Pawan')); //Just, Replaced 'SUDHANSHU' with 'Pawan'.
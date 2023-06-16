console.log(console);  //gives all the console-object's list.

//console.assert(10<5); //gives an error, 'Assertion Failed'
//console.assert(10>5); // no error, 'undefined'
//console.error("Hey, this is an error");

console.clear();  //clears the console.
console.warn("This, is Warning"); //gives the warning.
console.info("This is a Info"); //gives the info.

let obj = {
  name: 'Sudhanshu Joshi',
  age: '21',
  gender: 'Male',
  hobby: 'Cricket',
  role: 'Student'
}

console.log(obj);
console.table(obj);  // show objects in the form of table.

console.time("obj");
console.timeEnd("obj");  //gives the execution time of the particular obj.

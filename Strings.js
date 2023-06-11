let str = "I'm Sudhanshu Joshi";
console.log(str);
console.log(str.length);
console.log(str[4]);

let newstr = new String("I'm Sudhanshu Joshi");  //object
console.log(typeof(newstr));
console.log(str==newstr);  // same values --> True.
console.log(str===newstr); // same value, but diff. types --> False.
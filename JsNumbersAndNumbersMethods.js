var x = 4.3572347;
var y = 6;
var y1 = "5"; //as a String
var z = y.toString();  //toString
var a = x.toExponential(2);  //toExponential
var b = x.toFixed(2);  //toFixed DecimalPoint
var c = Number(y1);  //Converts to Number
var d = parseInt(x);  //Converts DecimalNumberToInt
var e = Number(true);  //Prints "1"
var f = Number(false);  //Prints "0"

console.log(c);
console.log(typeof c);
console.log(y1);
console.log(typeof y1);
console.log(d);
console.log(e);
console.log(f);

console.log(x+y);
console.log(z);
console.log(x+z);
console.log(y+z);
console.log(a);
console.log(b);
/*
7 Primitive DataTypes: NN BB SS U
N: Null
N: Number
B: Boolean
B: BigInt
S: String
S: Symbol
U: Undefined
*/

var a = 2;
var b = 5;
var c = a + b;
var d;
var e = {
    name: "Sudhanshu Joshi",
    "sudhanshu": true         //Object/Non-Primitive DataType
};
var f = "Pawan";
var g = null;

var func = ()=>{
  return 1;
}

console.log(c);
console.log(typeof d);
console.log(e);
console.log(e["sudhanshu"])
console.log(typeof e);
console.log(f);
console.log(typeof f);
console.log(g);
console.log(typeof g);
console.log(func);
console.log(typeof func);
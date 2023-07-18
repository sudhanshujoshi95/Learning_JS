let arr = [2, 4, 6, 8, 7, 3, 5];

for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}


console.log("\n");

// if we want to square each element of Array, then:-

arr.forEach((element) => {
    console.log(element*element);
})

console.log("\n");

// convert any obj. to Array, then:-

let name = "Sudhanshu"; //string obj.

let newArr = Array.from(name); // array
console.log(newArr);

console.log("\n");

// for.... of

for(let i of arr){
    console.log(i); //prints values.
}

console.log("\n");

// for.... in

for(let item in arr){
    console.log(arr[item]); //prints keys associated with values or say vice-versa
}
const arr = [11, 32, 23, 34, 45, 66, 71, 86, 19];
console.log(arr);
console.log(arr.length);
console.log(Array.isArray(arr));//Checks, Whether the given obj. is Array or Not.
console.log(arr.sort()); //by default in js --> Merge Sort.
console.log(arr[arr.length-1]); //Accessing the Last Element of Array.

arr.push(20, 12, 11, 10, 45);

console.log(arr);
console.log(arr.sort());

// *Note: We can also assign different types of data in a Array like String, Number, etc. But, it is better to assign Similar type of data/obj. to a Array.
 const newArr = [1, 2, 3, 4, 5, 'sudhanshu', 'pawan'];

 console.log(newArr);

console.log(newArr[newArr.length-1]);
console.log(Array.isArray(newArr));
console.log(newArr.sort());
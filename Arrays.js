// Arrays are Mutable, i.e., can be changed.

const arr = [11, 32, 23, 240,  101, 66, 332, 71, 86, 19];
console.log(arr, typeof arr);
console.log(arr.length);
console.log(Array.isArray(arr));//Checks, Whether the given obj. is Array or Not.
console.log(arr.sort()); //by default in js --> Merge Sort. and it modifies original array, and it sorts alphabeticalyy.

// To sort in Ascending order --> compare Fn in sort is used.
// The Compare Fn, will take two arguments: A and B, and returns:
// return A-B --> for sorting in Ascending order.
// return B-A --> for sorting in Descending order.

let compare1 = (a, b) => {
    return a-b;             //Fn for Sorting in Ascending order.
};

let compare2 = (a, b) => {
    return b-a;             //Fn for Sorting in Descending order.
};

console.log(arr.sort(compare1));

console.log(arr.sort(compare2));


console.log(arr[arr.length-1]); //Accessing the Last Element of Array.

arr.push(20, 12, 11, 10, 45);

console.log(arr);
console.log(arr.sort());

// *Note: We can also assign different types of data in a Array like String, Number, etc. But, it is better to assign Similar type of data/obj. to a Array.
 const newArr = [1, 2, 3, 4, 5, 'sudhanshu', 'pawan'];

 console.log(newArr, typeof newArr);

console.log(newArr[newArr.length-1]);
console.log(Array.isArray(newArr));
console.log(newArr.sort());
let b = arr.toString(); //converts the Array obj. to String.
console.log(Array.isArray(b));
console.log(typeof b);

//join() --> Join all the Array elements using "Seperator".
let c = arr.join("-");
console.log(c);


let moreNewArr = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let concatenatedArr = arr.concat(newArr, moreNewArr);
console.log(concatenatedArr);
console.log(concatenatedArr.sort());

//delete --> deletes the element of particular index, but the length of the arr, remains same as it is, the length doesn't decrease.

delete newArr[0];
console.log(newArr, newArr.length);

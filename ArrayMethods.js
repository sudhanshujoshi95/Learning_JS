const arr = ['fisrt', 'second', 'third', 'fourth'];

console.log(arr);

console.log(arr.join(' / '));
console.log(arr.join(' & '));

arr.pop(); //deletes the last element.
console.log(arr);
arr.push('newElement'); //adds new element at the Last/end.
console.log(arr);

arr.shift(); //deletes the first element.
console.log(arr);
arr.unshift('newFirstElement'); //adds new element at the first index.
console.log(arr);

arr.splice(3, 2, 'FirstNewAddedElement', 'SecondNewAddedElement');
/* arr.splice(after how many elements, no. of elements to be deleted, 'in the place of first deleted
element the element which is to be added', 'in the place of second deleted element the element which is
to be addedd'); */

console.log(arr);


console.log(arr.toString()); //converts the Array obj. to String.
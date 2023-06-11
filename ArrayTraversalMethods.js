let arr1 = [1, 2, 3, 4, 5];
console.log(arr1);

/* function mapFunc(value, index){
    return value*index;
}

const mapArr = arr1.map(mapFunc); */

            //OR

const mapArr = arr1.map((value, index)=> value*index);
// map --> Method applied on Arrays which returns the New Array after performing the given Action that is Present in the Callback.

console.log(mapArr);

const filterArr = arr1.filter(value=> value >= 3);
// filter --> Method applied on Arrays which returns a new Array with all the Elements that pass the given condition that's provided in your Callback.

console.log(filterArr);

let book = [        //filter method can also be applied on 'Objects', rather than Arrays Only.
    {
    name: 'julliet',
    isFiction: true,
    author: 'John'
    },
    {
    name: 'Robin',
    isFiction: true,
    author: 'Mark'
    },
    {
    name: 'Madison',
    isFiction: false,
    author: 'David'
    }

 ];
 
 console.log(book);
 
 const filterBook = book.filter(value => !value.isFiction);
 
 console.log(filterBook);
 
 // reduce --> reduce method is applied on Arrays, which executes a reducer function on each element of the array and return a New single output.
 const reduceArr = arr1.reduce((accumulator, current, index, arr1) => {
     console.log(accumulator);
     return accumulator*current
 }, 2);  //here the '2' is Initial value in the Accumulator, by default it takes   //the fisrt value of the Array.
 
 console.log(reduceArr);
 
 
 //find --> gives the next value, according to the condition given by us.
 const findArr = arr1.find(value=> value>2);
 console.log(findArr);
    
    
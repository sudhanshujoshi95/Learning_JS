console.log("Hello1");
console.log("Hello2");

setTimeout(function(){
  console.log("Hello3, inside setTimeout.")
}, 5000);

let promise = new Promise(function(resolve, reject){
  alert("Hello! I am a promise");
  resolve(95);
})

console.log("Hello4");
console.log("Hello5");

setTimeout(function(){
  console.log("Hello6, inside setTimeout.")
}, 1000);

console.log(promise);

/* 

Promises are used for parallel executions.

If we go in a browser, and run this code, the sequence may come differently, the alert() function may appear first and then the rest of the things will be executed accordingly.

As of now as we are in node.js environment the setTimeout(), and the promise will be executed according to the time interval as we have given in the setTimeout function().

**Note:- Promises are the object in js.

*Promises consists of Two Properties:-

1.State:- Initially it is "Pending", afterwards it becomes "fulfilled", if resolve is called, or "rejected" if the reject is called.

2.Result:- Initially "Undefined", then changes the value if resolved, resolve(value) or reject(value).

*/
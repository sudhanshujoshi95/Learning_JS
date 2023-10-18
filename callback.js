/*
Callback function is a function, passed into another function as an argument, which is then invoked inside some other outer function as to complete an action.
*/

function loadScript(src, callback) {
    var script = document.createElement("script");
    script.src = src;
    script.onload = function() {
      console.log("Loaded Script with SRC: " + src);
      callback(src);
    }
  
  
    script.onerror = function() {
      console.log("Error loading script with SRC: " + src);
    }
    document.body.appendChild(script);
  }
  
  function hello(src) {
    alert("Hello World" + src);
  }
  
  function goodmorning(src) {
    alert("Good Morning" + src);
  }
  
  loadScript("https://www.youtube.com/watch?v=IJlGpI6l92U&list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR&index=52&ab_channel=CodeWithHarry", hello)
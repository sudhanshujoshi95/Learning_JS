let inp = prompt("Enter one Snake/Water/Gun");

let a1 = Math.floor(Math.random() * 3);
let a = ['snake', 'water', 'gun'][a1];

alert(`Cpu: ${a} and User: ${inp}`);

if(inp==a){
  alert("Match Tied.");
}

else if(inp=='snake' && a=='gun'){
  alert("You Lose!");
}
else if(inp=='snake' && a=='water'){
  alert("Congratulations! You are the Winner!");
}
else if(inp=='gun' && a=='water'){
  alert("You Lose!");
}
else if(inp='gun' && a=='snake'){
   alert("Congratulations! You are the Winner!");
}
else if(inp=='water' && a=='snake'){
  alert("You Lose!");
}
else{
  alert("Congratulations! You are the Winner!");
}
let obj = {
    pawan: 89,
    sudhanshu: 90,
    mohan: 78,
    shyam: 80,
    radha: 80
  }
  
  //for-in : loops through the keys of an object.
    
  for(let a in obj){
    console.log("The marks of " +a+ " are: " +obj[a]);
  }
  
  //for-of : loops through the values of an object.
  //Note: here, the object should be Iterable, e.x. Strings and Arrays.
  
  for(let b of '12345'){  
    console.log(b);
  }
  
  for(let c of 'Sudhnashu Joshi'){  
    console.log(c);
  }
  
  //while and do-while loops.
  
  let num = prompt("Enter the num: ");
  num = Number.parseInt(num);
  
  let i=0;
  
  while(i<num){
    console.log(i+1);    //while-loop: firts the condition is being checked,  and then the block of code runs.
    i++;
  }
  
  let num1 = prompt("Enter the num: ");
  num1 = Number.parseInt(num1);
  
  let i1=5;
  
  do{                   //do-while loop: first the block of code runs, and then the condition is being checked.
    console.log(i1+1);
    i1++;
  } while(i1<num1);
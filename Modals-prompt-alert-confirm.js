let num = prompt("Enter a number!");
num = Number.parseInt(num);

alert("You Entered Number: " + num + " Which is of type " +
      typeof(num));

let write = confirm("Do you want to write it to the page?");

if(write){
  document.write(num); // document.write --> writes the input to the page.
}

else{
  document.write("Please Allow me to Write");
}
let a = prompt("What's your age ?");  //Takes String type by default.
a = Number.parseInt(a);  // TypeCasting String type to Number-Int.

if(a<1){
    alert("This is an Invalid Age");
}
else if(a<9){
    alert("Invalid Age, don't even think of Driving");
}
else if(a>9 && a<18){
    alert("Invalid Age, but you can think of driving");
}
else{
    alert("Valid Age for Driving");
}

//Use of Ternary Operators: Syntax --> (Condition? "if true this Statement" : "if fasle this Statement").

let marks = prompt("Enter Marks");

console.log("The Student is ", marks>34? "Passed." : "Failed.");
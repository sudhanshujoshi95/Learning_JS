let input = prompt("Enter your Choice");

const exprsn = input;

switch(exprsn){
    case 'Mangoes':
        alert("Mangoes are Rs.70 per KG.");
        break;
    
    case 'Papaya':
    case 'Orange':
        alert("The Price for this Fruit is: Rs.80 per KG.");
        break;
        
    default:
    alert(`Sorry, We are of Out of ${exprsn}`); //tilde symbol ` ` Used.
}
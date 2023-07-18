const changeBgColor = ()=> {
    a.firstElementChild.style.background = "yellow"; 
};

let a = document.body;
console.log(a.firstChild);      // gives Node, which can be text, comment or can be anything.
console.log(a.firstElementChild);   // gives Element only, such as div, nav, or etc.

/*
Certain DOM elements may provide Additional properties specific to their type for Convenience.

Table element, is one of the good example of such an element which provides additional properties.
*/
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

// DOM Searching

// let li_font = document.getElementsByClassName("list")[0];
// li_font.style.color = "red";

// document.getElementById("container-1").style.color = "yellow";

document.querySelector(".list").style.color = "red";

// document.getElementsByTagName("a");
// document.getElementsByName("Search"); --> input type = "Search" Name = "Search"  

// Three more Imp. Methods to Search DOM:
// 1. elem.matches --> To check if element matches the given css selector.
// 2. elem.closest --> To look for the nearest ancestor that matches the given css-selector. The element
//                                                                itself is also checked.

let list2 = document.getElementById("list-2");
let p1 = document.getElementById("p-1");
let container1 = document.getElementById("container-1");

console.log(list2.matches(".list"));
console.log(p1.closest(".container"));
console.log(container1.contains("p1"));
console.log(p1.contains(container1));

/*
DOM: Document obj. model, DOM represents the page content as html.

document.body  --> page body as js object.
document.body.style.background = 'red' --> changes page background to red.

DOM TREE:- Refers to the html page, where all the Nodes are Objects.
           There can be 3 main types of Nodes in the DOM TREE:-
           1. Text Nodes.
           2. Element Nodes.
           3. Comment Nodes.
     In HTML page, <html> is a Parent(at a root) and <head> & <body> are its children.
     The Text Node is always a Leaf Node of the tree.

*Note: If we use the script-tag (js) is written before the body, then document.body can sometimes be 'null'.

     *element.firstChild -> first child node == elem.childNodes[0].
     *element.lastChild -> last child node == elem.childNodes[elem.childNodes.length-1].
     *element.childNodes -> list of children --> It may look like an Array, but actually its not 
                         an Array but a collection. We can use Array.from(documnet.body.childNodes)
                         to convert it into an Array. But, the Array methods will not work here.

     There is also a method -> elem.hasChildNodes() to check, wheteher there are any child nodes.

     DOM COLLECTION: They are read-only.

     Siblings and Parent:
     <head> and <body> are siblings of each other, and they both are children of <html> which is parent of both <head> and <body>
     <body> is said to be the next-sibling or right-sibling of <head> and
     <head> is said to be the previous-sibling or left-sibling of <body>

     $0.nextSibling
     $0.previousSibling

     The parent Node is available as Parent.

     console.log(document.body.firstChild);
     a = document.body.firstChild;
     console.log(a.parentNode);
     console.log(a.parentElement);

     document.documentElement.parentNode --> document.
     document.documentElement.parentElement --> Null.

     **Note: document.documentElement --> <html>
---------------------------------------------------------------------------------------------------------------

BOM: Browser obj. model, It represents additional objects provided by the browser(host environment)
     for working with everything except the document.

     The Fns- 'alert', 'confirm', 'prompt' are the part of BOM.

     also, location.href = "site-link";
*/
// Write a JavaScript program that creates a new <li> element with some text and adds it to an existing <ul> list when a button is clicked.

function addElement(){
    let ul=document.getElementById("list");
    let li=document.createElement("li");
    li.appendChild(document.createTextNode("New Item"));
    ul.appendChild(li);
}
addElement();
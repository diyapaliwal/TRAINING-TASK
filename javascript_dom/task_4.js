// Create a list of items. Write a function to remove an item from the list when a specific button next to it is clicked.

function removeElement(){
    let ul=document.getElementById("list");
    let li=document.getElementsByTagName("li");
    for(let i=0;i<li.length;i++){
        let button=document.createElement("button");
        button.appendChild(document.createTextNode("Remove"));
        button.setAttribute("onclick","removeItem("+i+")");
        li[i].appendChild(button);
    }
}

function removeItem(i){
    let ul=document.getElementById("list");
    let li=document.getElementsByTagName("li");
    ul.removeChild(li[i]);
}
removeElement();


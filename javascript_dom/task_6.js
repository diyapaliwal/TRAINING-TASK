// Write a program that adds an event listener to a button so that when it is clicked, an alert message is shown.

function addEventListener(){
    let button=document.getElementById("button");
    button.addEventListener("click",function(){
        alert("Hello World");
    });
}
addEventListener();
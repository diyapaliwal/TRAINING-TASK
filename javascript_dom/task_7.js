// Create an HTML element with a class of 'hidden'. Write a JavaScript function that toggles this class when a button is clicked, showing and hiding the element.

function toggleClass(){
    let hidden=document.getElementById("hidden");
    hidden.classList.toggle("hidden");
}
console.log(toggleClass());
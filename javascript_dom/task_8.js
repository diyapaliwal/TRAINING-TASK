// Write a program that retrieves the value of an input field and displays it in another part of the document when a button is pressed.

function displayValue(){
    let input=document.getElementById("input").value;
    let output=document.getElementById("output");
    output.innerHTML=input;
    return false;
}

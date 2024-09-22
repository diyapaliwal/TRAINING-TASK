// Create an HTML element with some text that includes HTML tags. Write two JavaScript functions:
// one that retrieves the innerHTML and one that retrieves the textContent of the element, and display these values elsewhere on the page.

function getInnerHTML(){
    let element=document.getElementById("element");
    let innerHTML=document.getElementById("innerHTML");
    innerHTML.innerHTML=element.innerHTML;
}

function getTextContent(){
    let element=document.getElementById("element");
    let textContent=document.getElementById("textContent");
    textContent.innerHTML=element.textContent;
}
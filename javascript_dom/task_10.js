// Write a JavaScript program that automatically updates the content of an element every second, displaying the current time

function updateTime(){
    let time=document.getElementById("time");
    time.innerHTML=new Date().toLocaleTimeString();
}
setInterval(updateTime,1000);
// Create a simple HTML form with input fields for a user's name and email. Write JavaScript to display a message below the form that says 'Thank you for submitting, [name]!' when the form is submitted.

function displayMessage(){
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let message=document.getElementById("message");
    message.innerHTML="Thank you for submitting, "+name+"!";
    return false;
}


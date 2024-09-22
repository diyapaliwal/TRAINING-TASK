// Write a JavaScript program that checks if a number is positive, negative, or zero. Print 'Positive', 'Negative', or'Zero' accordingly

function checkNumber(number){
    if(number > 0){
        return "Positive";
    }else if(number < 0){
        return "Negative";
    }else{
        return "Zero";
    }
}

let number = 5;
console.log(checkNumber(number));
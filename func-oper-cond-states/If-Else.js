// Write a function `isEven` that takes a number as an argument and returns "Even" if the number is even, and "Odd" if the number is odd.

function isEven(num){
    if(num%2===0){
        return "Even";
    }
    return "Odd";
}
console.log(isEven(5));
console.log(isEven(6));
console.log(isEven(7));


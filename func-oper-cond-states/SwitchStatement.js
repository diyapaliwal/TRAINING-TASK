// Create a function `getDayType` that takes a number (1-7) as an argument and returns:
//  - "Weekend" if the number is 6 (Saturday) or 7 (Sunday),
//  - "Weekday" if the number is between 1 and 5.
//  Use a `switch` statement to implement this logic

function getDayType(num){
    switch(num){
        case 6:
        case 7:
            return "Weekend";
        default:
            return "Weekday";
    }
}
console.log(getDayType(5));
console.log(getDayType(6));
console.log(getDayType(7));
console.log(getDayType(1));
console.log(getDayType(2));
console.log(getDayType(3));
console.log(getDayType(4));
console.log(getDayType(5));

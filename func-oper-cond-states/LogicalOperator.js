// Write a function `isBetweenOneAndTen` that takes a number as an argument and returns `true` if the number is between 1 and 10 (inclusive), otherwise `false`.

function isBetweenOneAndTen(num){
    if(num>=1 && num<=10){
        return true;
    }
    return false;
}
console.log(isBetweenOneAndTen(5));
console.log(isBetweenOneAndTen(6));
console.log(isBetweenOneAndTen(0));
console.log(isBetweenOneAndTen(-1));
console.log(isBetweenOneAndTen(-10));
console.log(isBetweenOneAndTen(100));

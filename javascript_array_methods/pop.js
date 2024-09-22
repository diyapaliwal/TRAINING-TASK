// Create a JavaScript program that removes the last element from an array using the `pop()` method

function removeLastElement(arr){
    arr.pop();
    return arr;
}
let arr=[1,2,3,4,5];
console.log(removeLastElement(arr));

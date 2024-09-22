// Use the `shift()` method to remove the first element from an array.

function removeFirstElement(arr){
    arr.shift();
    return arr;
}
let arr=[1,2,3,4,5];
console.log(removeFirstElement(arr));

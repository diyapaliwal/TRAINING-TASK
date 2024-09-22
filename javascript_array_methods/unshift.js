// Write a program that adds an element to the beginning of an array using the `unshift()` method.

function addElement(arr,element){
    arr.unshift(element);
    return arr;
}
let arr=[1,2,3,4,5];
console.log(addElement(arr,0));
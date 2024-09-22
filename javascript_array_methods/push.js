//  Write a JavaScript program that uses the `push()` method to add an element to an array.

function addElement(arr,element){
    arr.push(element);
    return arr;
}
let arr=[1,2,3,4,5];
console.log(addElement(arr,6));
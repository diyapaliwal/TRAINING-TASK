// splice method is used to add or remove elements from an array. 

function removeElement(arr, index){
    arr.splice(index,1);
    return arr;
}
let arr=[1,2,3,4,5];
console.log(removeElement(arr,2));
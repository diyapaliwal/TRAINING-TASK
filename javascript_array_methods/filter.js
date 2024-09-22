// filter method 

function filterArray(arr){
    return arr.filter((element)=>element%2==0);
}
let arr=[1,2,3,4,5];

console.log(filterArray(arr));
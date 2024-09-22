// reduce method

function sumOfArray(arr){
    return arr.reduce((acc,curr)=>acc+curr);
}
let arr=[1,2,3,4,5];
console.log(sumOfArray(arr));
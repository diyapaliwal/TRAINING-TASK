// : Write a JavaScript program that creates an array of 5 numbers, calculates the sum of all the numbers in the array,and prints the result
let arr=[1,2,3,4,5];
console.log(sumArray(arr));
function sumArray(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}
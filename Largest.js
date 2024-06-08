//How to find second largest value and remove first larget value in array

//1.find largest value from array 2.find index of larget array 
//3.delete index from array using slice method 4.apply same logic that use for find larget value

const intArray = [2,8,9,4];
const largestValue =(arr)=>{
    firstLargestValue = Math.max(...arr)
    index=arr.indexOf(firstLargestValue);
    arr.splice(index,1)
    secondLargestValue = Math.max(...arr)
    return(secondLargestValue);

}
console.log(largestValue(intArray))
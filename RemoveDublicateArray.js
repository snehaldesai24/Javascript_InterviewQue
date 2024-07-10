function removeDuplicate(arr){
    //convert the array to a set
    //which is allow unique values
    //and convert the set back to array
    return [...new Set(arr)];

}
console.log(removeDuplicate([1,2,3,1,5,3,7,3]));
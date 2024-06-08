//How to find Duplicate element in a given Array
const arrNum = [1,5,2,3,2,6,3,1,6,4]
const duplicate = arrNum.filter((ele,index,arr)=> arr.indexOf(ele)!==index)    //filter(element,idex,array)
console.log(duplicate);

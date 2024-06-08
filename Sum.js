//How to find sum of all elements in given array usin reduce() method.

const arrNum =[1,6,3,8,4,9,5,16]
const sumOfNum =(arr)=>{
    return arr.reduce((pre,cur)=>{
        return pre+cur 
    })
}
console.log(sumOfNum(arrNum));
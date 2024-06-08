//How to find Max and Min value in a given array 
//min value
console.log("Min Value :");
const arrNum = [1,9,25,47,2,6,17,35,9]
const minfun =(arr)=>{
    return arr.reduce(function(pre,cur){
        return pre<cur?pre:cur;
    })
}
console.log(minfun(arrNum));
console.log("--------------------------------------");
//max value
console.log("Max Value :");
const arrNum1 = [1,9,25,47,2,6,17,35,9]
const maxfun =(arr)=>{
    return arr.reduce(function(pre,cur){
        return pre>cur?pre:cur;
    })
}
console.log(maxfun(arrNum1));
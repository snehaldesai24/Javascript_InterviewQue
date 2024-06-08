//How to find even or odd number in a given array

const numbers = [1,4,7,2,8,4,16,37,26,9]
const even = numbers.filter((item)=>{
    return item%2===0
})
const odd = numbers.filter((item)=>{
    return item%2==!0
})
console.log('Even Number :',even);
console.log('Odd Number :',odd);

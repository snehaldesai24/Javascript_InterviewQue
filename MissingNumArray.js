//find the missing number from given array input
//let arr=[1,2,3,5] count=10  O/P=> arr=[4,6,7,8,9,10]

let arr=[1,2,3,5];
count=10;
output=[];

for(let i=1;i<=count;i++){
    !arr.includes(i)?output.push(i):"";
}

console.log(output);
//Take a string and find the number of occurrences of specific character

const str ='aabecdadwea'
let count = 0
for(let i=0;i<str.length;i++){
    if(str[i]=== 'a'){
        count++
    }
}

console.log(count);
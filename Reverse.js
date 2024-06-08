//How to reverse a string

const reverseString =(str)=>{
    //string convert to array then array value reverse the string
    var strtoArray=str.split("")
    var arrReverse=strtoArray.reverse()
    var strReverse=arrReverse.join("")
    return strReverse

}
console.log(reverseString("javascript"))
console.log("-------------------------------------")

function rString(str){
    //empty string
    let newString = "";
    for(let i=str.length-1;i>=0;i--){
        newString+= str[i];
    }
    return newString;
}
const string = prompt("Enter a String:");
const result = rString(string);
console.log(result);


function isPalindrom(str){
    const reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
}

console.log(isPalindrom("racecar"));
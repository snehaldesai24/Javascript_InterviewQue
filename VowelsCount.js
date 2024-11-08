# Count the number of vowels in a string (your full name) without using loop

function countVowels(str) {
    const vowels = str.match(/[aeiouAEIOU]/g);  //is a regular expression that matches all vowels (both uppercase and lowercase) in the string.
    return vowels ? vowels.length : 0;
}

// Replace "Your Full Name" with your actual name
const fullName = "Your Full Name";
console.log(countVowels(fullName));

//Can you write a function in JavaScript to get the current date in the format “YYYY-MM-DD”?

const getCurrentDate = () => new Date().toISOString().split('T')[0];

console.log(getCurrentDate()); 
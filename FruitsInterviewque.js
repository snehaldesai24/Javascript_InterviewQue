var fruits = [
    {
        "banana":1,
        "mango":5,
        "apple":6
    },
    {
        "banana":7,
        "mango":5,
        "apple":10
    },
    {
        "banana":4,
        "mango":5,
        "apple":4
    }
];
let banana = 0;
let mango = 0;
let apple = 0;

fruits.forEach(fruit =>{
    banana += fruit.banana;
    mango += fruit.mango;
    apple += fruit.apple;
});

console.log("Banana", banana); //12
console.log("Mango", mango);  //15
console.log("Apple", apple);   //20
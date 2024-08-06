const food = ["pizza", "cake", "salad", "cookies"];

food.splice(0,0,"fruit")  //o/p=>[ 'fruit', 'pizza', 'cake', 'salad', 'cookies' ]
food.splice(4,1,"fruit")  //o/p=>[ 'fruit', 'pizza', 'cake', 'salad', 'fruit' ]
food.splice(2,1,"vadapav") //o/p=>[ 'fruit', 'pizza', 'vadapav', 'salad', 'fruit' ]
console.log(food);
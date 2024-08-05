const companies = [
    {name: "Google", category:"Product Based", start:1981, end:2004},
    {name: "Amazon", category:"Product Based", start:1992, end:2008},
    {name: "Paytm", category:"Service Based", start:1999, end:2007},
    {name: "Mindtree", category:"Service Based", start:1989, end:2010}
];

const ages=[33, 12, 35, 16, 19, 45, 38, 59, 69];

//using function
const age= ages.filter(function(age){
    if(age <=20){
        return true;
    }
})
console.log(age);

//using arrow function
const finalage = ages.filter((age,index)=> age >=30)
console.log(finalage);

//service based company display
const sb = companies.filter(company => company.category === "Service Based");
console.log(sb);

//first letter starts
let arr = ['abhishek', 'sneha', 'soha', 'ankit', 'vicky', 'suman'];
let startsWithS = arr.filter(name=> name.startsWith('s'));
console.log(startsWithS);


//length greater than 6

let lengthgreaterthanSix = arr.filter(name => name.length > 6);
console.log(lengthgreaterthanSix);

var includesA = arr.filter(name=>name.includes('a'));
console.log(includesA);
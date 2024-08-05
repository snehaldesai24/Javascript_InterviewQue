const companies = [
    {name: "Google", category:"Product Based", start:1981, end:2004},
    {name: "Amazon", category:"Product Based", start:1992, end:2008},
    {name: "Paytm", category:"Product Based", start:1999, end:2007},
    {name: "Mindtree", category:"Product Based", start:1989, end:2010}
];

const ages=[33, 12, 35, 16, 19, 45,38, 59, 69];

//1st method
const sumage = ages.reduce(function(total,age){
    return total+age;
},0)
console.log(sumage);

//2nd method
const sumage1 = ages.reduce((total,age)=>total+age,0)
console.log(sumage1);
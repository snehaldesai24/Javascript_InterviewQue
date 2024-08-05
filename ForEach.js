const companies = [
    {name: "Google", category:"Product Based", start:1981, end:2004},
    {name: "Amazon", category:"Product Based", start:1992, end:2008},
    {name: "Paytm", category:"Product Based", start:1999, end:2007},
    {name: "Mindtree", category:"Product Based", start:1989, end:2010}
];

const ages=[33, 12, 35, 16, 19, 45,38, 59, 69];

//first method using function
companies.forEach(function(company,index){
    //console.log(index);
    console.log(company.start);
});

//using arrow function
companies.forEach((company,index)=>(console.log(company.name)));

ages.forEach((age,index)=>{
    console.log(index)
});

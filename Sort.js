const companies = [
    {name: "Google", category:"Product Based", start:1981, end:2004},
    {name: "Amazon", category:"Product Based", start:1992, end:2008},
    {name: "Paytm", category:"Product Based", start:1999, end:2007},
    {name: "Mindtree", category:"Product Based", start:1989, end:2010}
];

const ages=[33, 12, 35, 16, 19, 45,38, 59, 69];

//sorted with start
const sorted = companies.sort(function(c1,c2){
    if(c1.start <c2.start){
        return 1;
    }else{
        return -1;
    }
})
console.log(sorted);

//2nd method using arrow method
const sorted1 = companies.sort((c1,c2)=> (c1.end > c1.end ? 1 : -1));
console.log(sorted1);

//ages
const sortedAge = ages.sort((a,b)=>(a-b));
console.log(sortedAge);


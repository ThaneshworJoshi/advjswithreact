//Arrow and its functions
let myarr = [
    {name:"tyagi", age: 20, start: 55, end: 100}, 
    {name:"samir", age: 25, start: 98, end: 10}, 
    {name:"sad", age: 22, start: 90, end: 89}, 
    {name:"sus", age: 26, start: 44, end: 77}, 
  ];
  // Iterating all objects inside array with simple for loop.
  for(let i=0; i<myarr.length; i++){
    console.log(myarr[i]);
  }
  // Iterating    objects of an array with foreach loop. It is callback function and it is syncronous.
  myarr.forEach(function(company){
    console.log(company)
  })
  // we can get company, index and whole array by this callback function
  myarr.forEach(function(company, index, myarr){
    console.log(company)
    console.log(index)
    console.log(myarr)
  })


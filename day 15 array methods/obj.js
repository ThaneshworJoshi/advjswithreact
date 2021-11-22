// Array and its methods

const { func } = require("prop-types");

// Array can store any kinds of data. also function and dictionary
let arr = ['apple', 11, {age:23}, function(){return 'tyagi';}];
console.log(arr[2].age)
console.log(arr[3]())
// replacing array
arr[0] = "grapes";
console.log(arr)

// queue: queue supports push and shift
let myarr = ['tyagi', 1 ,'samir', 'zebra']
myarr.push("horse")
console.log(myarr)
myarr.shift()

// stack: push, pop
myarr.push("my")
myarr.pop()

// splice method
// we can delete array but the length of array remains the same.
delete myarr[2]
console.log(myarr)

// splice method helps to insert, remove, replace element
myarr.splice(1,1) // 1st parameter 1 is index and next para is the total element to be removed
console.log(myarr);
// remove and insert element
myarr.splice(2, 1, "t", "rex")
console.log(myarr);

// insert without removing
myarr.splice(2,0, "saam", 'dam', 'oho')
console.log(myarr);

// slicing of array is like taking a particular elements of array and copying it if we assign in a variable.
let myarrSlicedcopy = myarr.slice(2,6)
console.log(myarrSlicedcopy)

// concat is adding elements in array
myarr.concat([10,44]);
console.log(myarr)

// Iterate: forEach
let rating = [5,3,5,6,7];
let sum = 0;
console.log(rating.indexOf(5))
let sumFunction = function(a,b){
    return a+b
}
rating.forEach(function(ratings){
    sum = sumFunction(sum, ratings)
})
console.log(sum)
console.log(rating.indexOf()) //finds index of element
console.log(rating.lastIndexOf()) // find index of element
console.log(rating.includes()) //boolean value

// find and findIndex.
let result = myarr.find(function(item, index, array){
    if (item === "tyagi"){
        return true;
    }
});
console.log(result);

// using arrow function
let res = myarr.find(ar => item="tyagi")
console.log(res)

// using arrow function with findIndex method
let res = myarr.findIndex(arr => arr<4)
console.log(res)

// find the object inside array
const inventory = [
    {'name': 'ty', quantity: 3},
    {'name': 'banana', quantity:12},
];
function isBanana(fruit){
    return fruit.name==="banana";
}
console.log(inventory.find(isBanana));

// finding object, object inside array
const fru = [
    {name:'banana', price: 23, quantity: 42},
    {name:'mango', price: 223, quantity: 142},
    {name:'grapes', price: 213, quantity: 242},
    {name:'orange', price: 123, quantity: 442},
]
function myFruitFunc(fruit){
    return fruit. name === 'orange';
}
console.log(fru.find(myFruitFunc))


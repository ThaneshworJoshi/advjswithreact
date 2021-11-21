// Array and its methods
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
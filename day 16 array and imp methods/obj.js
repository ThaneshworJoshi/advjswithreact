// filter method. filter return whole array 
// find method finds the value but only the first value and it is a string
let myarr = [1,3,5,2, 64, 6,7]
let result = myarr.filter(function(item, index, array){
    if (item>6){
        return true;
    }
})
console.log(result)

const words = ['tyagi', 'naam', 'mango', 'orange, presentation', 'exibations']
const result = words.filter(word=>word.length<5)
console.log(result)

// map function in array.
let myresult = myarr.map(function(item, index, array){
    return item
})
console.log(myresult)

let map1 = [3,2,1,6,7,8,4]
let myresult = map1.map(x=> x*3)
console.log(myresult)

// reverse array
map1.reverse();
console.log(map1)
map1.sort()
console.log(map1)

// join and split
let names = 'bilbo, gandhaf, nazgul'
let arr = names.split(', ')
console.log(arr)
let xrr = names.split('')
console.log(xrr)
let mss = names.join('-')
console.log(mss)
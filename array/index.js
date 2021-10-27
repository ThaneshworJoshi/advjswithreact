//empty array sacores with on element
let num = new Array();
//array with 5 element
let numbers = new Array(5, 4, 3, 6, 7);
//different array
let athletes = new Array(3); // creates an array with initial size 3
let scores = new Array(1, 2, 3); // create an array with three numbers 1,2 3
let signs = new Array("Red"); // creates an array with one element 'Red'

//array hold 3 string
let fruits = ["apple", "banana", "orange"];
console.log(fruits[0]);

//print 3 string
let colors = ["res", "green", "orange"];

console.log(colors[0]); // 'red'
console.log(colors[1]); // 'green'
console.log(colors[2]); // 'orange'

//replace index [2] string
let colors = ["red", "green", "orange"];
colors[2] = "pink";

console.log(colors);

//array length
let colors = ["red", "green", "orange"];
console.log(colors.length);

//adding element end of array

let colors = ["red", "green", "orange"];
colors.push("pink");
console.log(colors);

//adding element beginning of an array
let colors = ["red", "green", "orange"];
colors.unshift("pink");
console.log(colors);

//last element removing
let colors = ["red", "green", "orange"];
const lastElement = colors.pop();
console.log(lastElement);

//removing begaining of array
let colors = [1, 2, 3, "red", "green", "orange"];
const firstElement = colors.shift();

console.log(firstElement);

//find indexof element
let colors = ["red", "green", "orange"];
let index = colors.indexOf("green");
console.log(index);

//array is an array
let colors = ["red", "green", "orange"];
console.log(Array.isArray(colors));

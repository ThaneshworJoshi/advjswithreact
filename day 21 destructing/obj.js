// Array destructuring
const foo = ['one', 'two', 'three']
const[red, green, yellow, noise] = foo;
console.log(red);
console.log(green);
console.log(yellow)
console.log(noise)
// Assignment separate from declaration
let a, b;
[a,b] = [1,3];
console.log(a)
console.log(b)
// swapping variable
let x = 5;
let y = 9;
[y,x] = [x,y]
console.log(y)
console.log(x)
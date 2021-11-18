// optional changing
function User(name, address, school){
  this.fname = name;
  this.address = address;
  this.myschool = school;
}
let user = new User('tyagi', 'gadhi', 'east point')
console.log(user.address.street);
console.log(user.address?user.address.street?user.address.street.name:null:null);
console.log(user?.address?.street)
console.log(user.address?.street)

// data types and its methods
let num = 43;
console.log(typeof(num.toString(num)))
console.log(num)
console.log(Math.floor(2.6))
console.log(Math.ceil(2.1))
console.log(Math.round(2.4))
console.log(Math.round(2.5))
console.log(Math.round(2.6))
console.log(parseInt("244tya"))
console.log(parseFloat("2.54something"))

// Random in math
console.log(Math.floor(Math.random()*(6-1+1)+1))

// length in js
let string= "this is my first string";
console.log(string[0])
console.log(string.charAt(8))
// acessing last character
console.log(string[string.length-1])

// iterating strings
for(let char of string){
  console.log(char)
}
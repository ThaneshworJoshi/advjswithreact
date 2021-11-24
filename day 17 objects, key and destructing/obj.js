// object.keys, values, entries and destructruing 
let myobj = {
    name: 'tyagi', 
    age: 23,
    school: "nawayug"
}
console.log(Object.keys(myobj))
console.log(Object.values(myobj))
console.log(Object.entries(myobj))

// destructuring assignment
// swapping object or arrray assignment
let arr = ["Samir", "hero"]
let [first, last] = arr;
console.log(first)
console.log(last)
// split methods
let [firstN, lastN] = "Hero No1".split(' ');
console.log(firstN)
console.log(lastN)
// Ignoring elements using comma
let [school, , title] = ['nawayug', 'balaha', 'east point']
console.log(school)
let guest = 'Jane';
let admin = 'Pete';
[admin, guest] = [guest, admin]
console.log(admin,guest)
// The ...rest
let myobj = {
    title: 'Menu',
    height: 4,
    width: 100
}
let {title, ...c} = myobj
console.log(c.title)
//how to access properties from ...rest
// It is a special syntax that allows us to "unpack" arrays or objects into a bunch of variables.
// if, for, while and so on 
if(true){
    let message = "Hello";
    console.log(message)
}
console.log(message) //Not accessable here.
for (let i= 0; i<3; i++){
    console.log(i)
}
console.log(i)

// nested function
function sayHiBye(firstName, lastName){
    function getFullName(){
        return firstName + " "+lastName;
    }
    console.log(getFullName())
}
sayHiBye('Tyagi', 'sen')

// Random number generator
function randomNumGen(){
    let count =0;
    return function(){
        return count++;
    }
}
let counter = randomNumGen();
console.log(counter());
console.log(counter());
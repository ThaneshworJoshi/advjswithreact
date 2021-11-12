let myObj = {
    name: 'samir', 
     age: 21,
     roll: 12433, //This last comma is called tailing
     'my likes': 1000
};
console.log(myObj);
console.log(myObj.name);
console.log(myObj['age']);
for(let key in myObj){
console.log(myObj[key]);
}
  // creating empyt object
myObj.subject = 'Math';
myObj['solution'] = 'Salt'
console.log(myObj);
// Trying to access object value asigning key in some variable.
let key = 'name';
// console.log(myObj.key) We cannot access using dot notation while we get key from some variables.
console.log(myObj[key]) //Value of the object can be accessed from variable using bracket notation.

// computed property
let veg = prompt()
let myHand = 'rajnikant'
let home = 'aurabani'
let myStore = {
    [veg]:120,
    [myHand]: 'right',
    [home]: 'myhome town',
};
console.log(myStore)

// shorthand property
function myDesc(name, age){
    let aboutMe = {
        name,
        age
    }
}
myDesc('samir', 43)
// without shorthand property in object.
function school(name, roll){
    let myStudents = {
        name: name, 
        roll: roll,
    }
    console.log(myStudents())
}
school('safal', 4)
// Property name limitation
let myPropertyName = {
    for: 'ajay',
    in: 'aur',
    let: 'saf'
    // __proto__: 'something' //This cannt be used in property name
}
console.log(myPropertyName)
// ways to check property existance. 
console.log('for' in myPropertyName);

for(let key in myPropertyName){
    console.log(key)
    console.log(myPropertyName[key])
}
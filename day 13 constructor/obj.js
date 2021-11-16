// constructor in javascript
// constructor starts with capital letter.
function Person(name, age, address){
  this.name = name;
  this.age = age;
  this.address = address;
}
// We cannot add property to the constructor.
Person.nationality = "Nepali";
let person = new Person('tyagi', 24, 'gadhi');
console.log(person)
console.log(person.name)
// avoid return statement with object as it doesnot show any of other this statements
// it ignores return statement with primitive data type.
// methods in object and ways to access.
function MyFunction(name, school){
  this.firstName = name;
  this.school = school;
  this.details = function(){
    return this.firstName+this.school
  }
}
let myFunction = new MyFunction();
console.log(myFunction.firstName)

// changing or editing the property value from the function
function MyNewConst(name, age, school){
  this.secondName = name;
  this.myage = age;
  this.school = school;
  this.changeSchool = function(changedName){
    this.school = changedName
  }
}
let myNewConst = new MyNewConst('tyagi', 11, "nawayug");
console.log(myNewConst);
myNewConst.changeSchool("Sushma");
console.log(myNewConst);
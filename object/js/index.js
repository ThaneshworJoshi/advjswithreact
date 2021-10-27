// object is a standalone entity that holds multiple values in terms of properties and methods
//myCar object and its property make model year
 let myCar = {
 make = "Ford",
 model = "Mustang",
 year = 1969
 }

console.log(myCar.make);

//
let person = {
  firstName: "John",
  lastName: "Doe",
};

console.log(person.firstName);
console.log(person.lastName);

//replacing firstName
let person = {
    firstName: 'John',
    lastName: 'Doe'
};

person.firstName = 'Jane';

console.log(person);
//adding new property
let person = {
    firstName: 'John',
    lastName: 'Doe'
};

person.age = 25;

console.log(person)

//delete property
let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25
};
delete person.age;


console.log(person)

//check property exits or not
let employee = {
    firstName: 'Peter',
    lastName: 'Doe',
    employeeId: 1
};

console.log('ssn' in employee);
console.log('employeeId' in employee);

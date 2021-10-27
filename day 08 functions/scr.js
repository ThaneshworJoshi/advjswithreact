/*
Function: - 
A function in javascript is similar to procedure a set of statement that performs 
particular task or calculates a value but for a procedure to qualify as a function.
we can reuse the function by easily calling it by its name.
function should take an input and return an output where obvious needs to have relation between
input provided and the output.
*/
let myObj = {
    firstName: 'Tyagi',
    lastName: 'Sen',
    address : 'Aurabani',
    age: myAge(2000, 2021),
};
function myAge(birthDate, todayDate){
    return todayDate - birthDate;
}
console.log(myObj)

function sum(num1, num2){//here is the parameter
    let additionValue = num1+num2;
    return additionValue;
  }
  let calculatedValue= sum(1,3);//here is the argument.
  console.log(calculatedValue);

//   The above function is number calculation function which take two number as input and provides a output.

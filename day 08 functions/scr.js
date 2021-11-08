/*
Function: - 
A function in javascript is similar to procedure a set of statement that performs 
particular task or calculates a value but for a procedure to qualify as a function.
we can reuse the function by easily calling it by its name.
function should take an input and return an output where obvious needs to have relation between
input provided and the output.
*/
let myObj = {
  firstName: "Tyagi",
  lastName: "Sen",
  address: "Aurabani",
  age: myAge(2000, 2021),
};
function myAge(birthDate, todayDate) {//here is the parameter
  return todayDate - birthDate;
}
myAge(23,12) //here is the argument
console.log(myObj);

function sum(num1, num2) {
  //here is the parameter
  let additionValue = num1 + num2;
  return additionValue;
}
let calculatedValue = sum(1, 3); //here is the argument.
console.log(calculatedValue);

//   The above function is number calculation function which take two number as input and provides a output.
//function with one parameter already provided
function getAdditionValue(num1=1, num2 =null) {
  return num1 * num2;
}
console.log(getAdditionValue(undefined, 12));
getAdditionValue(2,4)// it is invoking the function. or calling function
//function arguments are the value receved by the function when it is invoked.

// null is to make the value none if it contains some value.
// undefined is the value which doesnot contain any value. it is just initialized.

// here while using this function the function can be called before it is created.
let x = myFunction(2,4)
function myFunction(firstNum, SecNum){
    return firstNum*SecNum
}
// If the function doesnot return anything then if we invoke function then it return undefined.
let myHi=function(car="benz", bike="Dukati"){
    console.log(`I have got ${car} car and ${bike} bike.`)
}
console.log(myHi())//this returns undefined
console.log(myHi)// this prints all the code inside the myHi function
// function expression
// In function expression we cannot access before initialization. for accessing function should be invoked below the function created.
let sayHi = function(firstName="Tyagi", lastName="Sen"){
    console.log(firstName, lastName)
}
console.log(sayHi)

let nameOfPeople = ['samir', 'tyagi', 'raj', 'arsana']
for(let i=0; i<nameOfPeople.length; i++){
    let myPeopleName = nameOfPeople[i]
    let namedFunc = (names) =>{
        if(names==='tyagi')
            return `This man MR ${names} is selected.`;
        else{
            return `This man ${names} not selected`
        }
    }
    console.log(namedFunc(myPeopleName));
}



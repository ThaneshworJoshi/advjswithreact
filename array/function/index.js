// //defining a function
// function <function-name>()
// {
//     // code to be executed
// };

// //calling a function
// <function-name>();

//alert message
function Showmessage() {
  alert("Hello world!");
}
Showmessage(); //Hello world!

//parameters function
function Showmessage(firstName, lastName) {
  alert("Hello" + firstName + " " + lastName);
}

Showmessage("nisha", "panday"); // Hello nishapanday
Showmessage("sita", "ram"); //Hello sitaram

//without parameter it is undefine
function ShowMes(firstName, lastName) {
  alert("Hello " + firstName + " " + lastName);
}

ShowMes("sita", "ram", "Mr.");
ShowMes("amit");
ShowMes();

//arguments object is an array like object
function ShowMessage(firstName, lastName) {
  alert("Hello " + arguments[0] + " " + arguments[1]);
}

ShowMessage("sita", "ram"); //Hello sita ram

ShowMessage("ashok", "amit"); //Hello sita ram

ShowMessage(100, 200); //Hello 100 200

//without paramete rarguments object is  valid
function Display() {
  alert("Hello " + arguments[0] + " " + arguments[1]);
}

Display("ram", "sita"); //Hello ram sita

//for loop in function display alert
function Show() {
  for (var i = 0; i < arguments.length; i++) {
    alert(arguments[i]);
  }
}

Show("nisha", "panday");

//return value
function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);
alert(result); //3

//
function checkAge(age) {
  if (age >= 18) {
    return true; //greater 18
  } else {
    return confirm("Do you have permission from your parents?"); //less
  }
}

let age = prompt("How old are you?", 18);

if (checkAge(age)) {
  alert("Access granted"); //if 18
} else {
  alert("Access denied"); //else
}

// program to print the text
// declaring a function
function greet(name) {
  console.log("Hello " + name + ":)");
}

// variable name can be different
let name = prompt("Enter a name: ");

// calling function
greet(name);

// program to add two numbers using a function
// declaring a function
function add(a, b) {
  console.log(a + b);
}

// calling functions
add(3, 4);
add(2, 9);

// program to add two numbers
// declaring a function
function add(a, b) {
  return a + b;
}

// take input from the user
let number1 = parseFloat(prompt("Enter first number: "));
let number2 = parseFloat(prompt("Enter second number: "));

// calling function
let result = add(number1, number2);

// display the result
console.log("The sum is " + result);

// program to find the square of a number
// function is declared inside the variable
let x = function (num) {
  return num * num;
};
console.log(x(4));

// can be used as variable value for other variables
let y = x(3);
console.log(y);
//
function myFunc(theObject) {
  theObject.brand = "Toyota";
}
var mycar = {
  brand: "Honda",
  model: "Accord",
  year: 1998,
};
console.log(mycar.brand);
myFunc(mycar);
console.log(mycar.brand);

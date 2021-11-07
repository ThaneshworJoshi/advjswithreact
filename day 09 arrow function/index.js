// arrow function
let myFunc= function(myFirst, mySecond){
    return myFirst+mySecond
  }
  console.log(myFunc("Tyagi", "Sen"))


let myArr = () =>{
    return "This is my arrow function";
}
console.log(myArr());

let myNewArr= (firstName, lastName) =>{
    return `My full name is ${firstName} ${lastName}`;
}
console.log(myNewArr());
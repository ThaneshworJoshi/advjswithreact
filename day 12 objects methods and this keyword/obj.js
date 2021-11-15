let myObj = {
  name: "samir",
  age: 21,
  roll: 12433, //This last comma is called tailing
  "my likes": 1000,
};
// we can add function inside object which is called method.
myObj.likes = function () {
  console.log("I like football");
};
// Next method of doing the same thing
let myNewObj = {
  name: "samir",
  age: 21,
  roll: 12433,
  like: function () {
    console.log("Dont go for likes.");
  },
};
myNewObj.like();
// method shorthand
let myShortObj = {
  name: "samir",
  age: 21,
  roll: 12433,
  like() {
    console.log("Dont go for likes.");
  },
};
myShortObj.like(); //this key word is myShortObj
// this keywords. To access objects method stored in same object this keyword is used
let myLatestObj = {
  name: "samir",
  age: 21,
  roll: 12433,
  like() {
    console.log(this.name);
  },
};
myLatestObj.like();
// js this keyword refers to the object it belongs to
// in method this is owner object, along is global object,
// in function, alone is global object
// in strict mode is undefined
// in an event this refers to the element that receive the event
// method like call() and apply() can refer this to any object.
let user = { name: "john" };
let admin = { name: "Admin" };
function sayHi() {
  console.log(this.name);
}
user.f = sayHi;
admin.f = sayHi;
user.f();
admin.f();
// "this in js is free"


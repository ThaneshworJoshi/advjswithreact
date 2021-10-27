// object literal syntax
// date, math, reular expressions, array, function, object are object
// all js values, except primitives, are objects
// string, number, boolean, null, undefined are primitive dt
// method are the actions that can be performed on object.
// objects property can be both primitive values, other objects, and functons
//  an object method is an object property containing a function definition.

// object literal is a list of name:value pair inside the curly braces.
let myobj = {
    firstName : 'tyagi',
    age : 22,
    height: "5' 6\"",
};
console.log("accessing object")
console.log(myobj.height);


delete myobj.height;
console.log(myobj)

// creating objects in object literal
myobj.weight = 50;
console.log(myobj)
myobj.firstName = 'manabi'

// creating object in another way
let obj1 = new Object();

obj1.firstName = 'Moti';
obj1.lastName = 'Pokharel';
console.log(obj1);


// accesing Object
console.log("Accessing first name from object")
console.log(myobj['firstName']);
console.log(myobj.firstName);


// updating object
obj1.age=17;

// deleting object
console.log("Deleting age")
delete obj1.age;
console.log(obj1)
console.log(obj1['age'])
// console.log(obj1.age)

// looping objects
console.log("looping through the objects")
for (let key in myobj){
    console.log(myobj[key])
    console.log(key)
    if(key==='age'){
         
        console.log("I cann't show age")
    }
}





// Define an object constructor, and then create objects of the constructed type.
// Array Literal
// create object using Object.create()





let arr = [1,'ram', 'hari', 3, 5,1,'ram', 'hari', 3, 5];
console.log(arr[arr.length-1]);
console.log("Looping array")
for(let x=0; x<arr.length; x++){
    console.log(arr[x])
}


// function without name is anonymous function
console.log("Looping array using anonymous function. It can't be called as other functions")
arr.forEach(function(item){
    console.log(item)
});



console.log(typeof(arr))
// or
console.log(typeof arr)

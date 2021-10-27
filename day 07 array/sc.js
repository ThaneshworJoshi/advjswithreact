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
console.log()

delete myobj.height;
console.log(myobj)
console.log()
// creating objects in object literal
console.log("Adding new property to the object")
console.log(myobj)
myobj.weight = 50;
console.log(myobj)
console.log()
console.log("Updating object property")
myobj.firstName = 'manabi'
console.log(myobj)

// creating object in another way
console.log()
console.log("Creating Object using new key words")
let obj1 = new Object();

obj1.firstName = 'Moti';
obj1.lastName = 'Pokharel';
console.log(obj1);
console.log()
// accesing Object
console.log("Accessing first name from object")
console.log(myobj['firstName']);
console.log(myobj.firstName);


// updating object
obj1.age=17;

console.log()
// deleting object
console.log("Deleting age")
delete obj1.age;
console.log(obj1)
console.log(obj1['age'])// here age is already deleted so it has undefined value.
// console.log(obj1.age)

// looping objects
console.log()
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
console.log()

let arr = [1, 'ram', 'hari', 3, 5, 1,'ram', 'hari', 3, 5];
console.log(arr[arr.length-1]); //counting array lenght
console.log("Looping array")
for(let x=0; x<arr.length; x++){
    console.log(arr[x])
}
console.log()

// function without name is anonymous function
console.log("Looping array using anonymous function. It can't be called as other functions")
arr.forEach(function(item){
    console.log(item)
});
console.log()
console.log("Array before deleting");
console.log(arr);
console.log();
console.log("array after deleting hari")
delete arr[2];//I haven't problem with this code but the result i get is the problem.
console.log(arr); 

console.log(typeof(arr))
// or
console.log(typeof arr)


// push and pop
// push adds into the array as last item
// pop removes last item from array
console.log()
console.log("Push method")
arr.push('zumba')
console.log(arr)

arr.pop()
console.log(arr)
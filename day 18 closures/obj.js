//closure function 
function makeCount(firstName, lastName){
    let count = 0;
    return function(){
        return firstName + " "+lastName + count++;
    };
}
let counter = makeCount()
console.log(counter())
//without closure function. This function wont work
function showCount(){
    let x = 0;
    function xyz(){
        return x;
    }
}
let show = showCount();
console.log(show())
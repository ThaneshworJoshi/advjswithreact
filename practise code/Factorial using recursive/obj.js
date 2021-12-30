// factorial 
function factorial(num){
  let val=1;
  if(num===1){
    return 1
  }
  else if(num>1){
    val = num*factorial(num-1)
  }
  return val
}
console.log(factorial(5))
function myPerfectSquare(n){
  if (n%1===0){
    let myNum = Math.floor(Math.sqrt(n))
    let myNextNum = myNum+1
    return myNextNum*myNextNum;
  }
}
console.log(myPerfectSquare(-5))
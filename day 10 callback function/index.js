let x=7
let myNewFunc = (y)=>{
    let y= y-1
    return y
};
let numFunction = (x)=>{
    while(x>0){
        let x = x*myNewFunc(x)
    }
    

    
}

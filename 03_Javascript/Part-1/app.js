
// Variable in javascript

let a = 10   
console.log(typeof(a)) //number

let b = true 
console.log(typeof(b)) //boolean

let c = "sadique" 
console.log(typeof(c)) //String

let d 
console.log(typeof(d))  //undefined

let e = null 
console.log(typeof(e)) //object

let f = BigInt(9999999999999999);
console.log(typeof(f))  //BigInt


//operator in Javascript 

let A = 10 //Assigment operator 

//Unary operator

console.log(A++) //increment operator
console.log(A--) //decrement operator


let s=10
let h=2

console.log(s+h) //12
console.log(s*h) //20
console.log(s/h) //5
console.log(s%h) //0
console.log(s**h) //100

let age =22

if(age>=18){
    console.log("Eligible for voating")
}else{
    
    console.log("Not Eligible for voating")
}



let color="red";

switch(color){
    case "red":
        console.log("red");
        break;
    case "green":
        console.log("green");
        break;
    case "blue":
        console.log("blue");
        break;
    case "white":
        console.log("white");
        break;
    default:
        console.log("NO set color")
    
}



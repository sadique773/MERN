const student = {
    name: "Sadique",
    age: 23,
    eng: 54,
    math:70,
    phy:70,

    getAvg(){
        console.log((this.eng+this.math+this.phy)/3)
    }
}

student.getAvg()



try{
    console.log(A)
}catch(err)
{
    console.log("got errorr ... A is not declare ")
    console.log(err)
}




const sum = (a,b) =>{
    console.log(a+b)
}
sum(1,2)

const sum2 = (a,b) =>(a+b)
console.log(sum2(2,3))

console.log("check in")

setTimeout( () => {
    console.log("I am parallely run bro")
},4000);

console.log("Checkout")


let id= setInterval(()=>{
    console.log("Set Interval bro")
},100)


console.log("Checkout")

console.log("Checkout")

console.log("Checkout")

clearInterval(id);


let num = [1,2,3,4,5,6,7]
let double = num.map((ele)=>{
    return ele*2
})
console.log(num)
console.log(double)

let num2 = [1,2,3,4,5,6,7]
let double2 = num.filter((ele)=>{
    return ele%2==0
})
console.log(num2)
console.log(double2)


let num3 = [1,2,3,4,5,6,7]

let double3 = num3.every((ele)=>{
    return ele%2==0
})
console.log(double3)

let double4 = num3.reduce((result,ele)=>{
    return result+ele
})
console.log(double4)

console.log( Math.min(...num))

function restOperator(...nums){
    for (let number of nums){
        console.log(number)
    }
}
restOperator(1,2,3,4,4,4,4,4,5)



 

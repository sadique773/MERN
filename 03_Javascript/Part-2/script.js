
str =" Sadique Hussain  "
console.log(str.trim())
console.log(str.toLowerCase())
console.log(str.toUpperCase())
console.log(str.indexOf("a"))
console.log(str.slice(1,4))
console.log(str.replace("ad","re"))
console.log(str.repeat(2))


arr=["Sadique","Hussain","Huzefa","Khanam"]
arr2=[1,2,3,4,5,6,7]
console.log(arr)

arr.push(12)
console.log(arr)

arr.unshift(10) 
console.log(arr)
arr.pop()
console.log(arr)
arr.shift()
console.log(arr)

console.log(arr.indexOf("Huzefa"))
console.log(arr.includes("Huzefa"))
console.log(arr.concat(arr2))

console.log(arr.reverse())
console.log(arr.reverse())
console.log(arr.slice(2))
console.log(arr.slice(-2))


//for odd number
for (let i = 0; i<=15; i++)
    {
     if(i%2!=0){
         console.log(i)
     }
    }

//for even number
for (let i = 0; i<=15; i++)
   {
    if(i%2==0){
        console.log(i)
    }
   }

//multiplication of 5
for (let i = 1; i<=10; i++)
    {
        console.log(5*i);
    }


function dice(){
    return Math.floor(Math.random()*6+1)
}

console.log(dice())


function fullName(firs,last){
    return firs+" "+last
}

console.log(fullName("sadique","Hussain"))

function average(a,b,c){
    return (a+b+c)/3
}
console.log(average(2,3,4))

function printTable(n){
    for(let i=1;i<=10;i++){
        console.log(n*i);
    }
}
printTable(5);


function printSum(n){
    let sum=0;
    for(let i=1;i<=n;i++){
        sum+=i;
    }
    console.log(sum)
}
printSum(2)

arr=[1,2,3,4,5,5]
function concat(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    console.log(sum)
}
concat(arr)

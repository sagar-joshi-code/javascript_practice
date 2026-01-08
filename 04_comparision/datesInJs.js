// ***************************Dates******************************

// let d=new Date()
// console.log(d.toString());
// console.log(d.toDateString());
// console.log(d.toLocaleString());
// console.log(typeof d);


// let D=new Date(2026,0,8,3,33)
// console.log(D.toLocaleString());
// let myCreatedNewDate=new Date("2026-01-8")
// console.log(myCreatedNewDate.toLocaleString());


// let myTimeStamp=Date.now()
// console.log(myTimeStamp.toLocaleString());
// console.log(myCreatedNewDate.getTime());
// console.log(Math.floor(Date.now()/1000));


// let myDate=new Date()
// console.log(myDate.getDate());
// console.log(myDate.getDay());
// console.log(myDate.getHours());
// console.log(`${myDate.getDate()} and day is ${myDate.getDay()} and hours is ${myDate.getHours()}`)


//mini project//
let d=new Date()

//date parts
let y=d.getFullYear()
let m=d.getMonth() +1
let D=d.getDate()

//time parts
let hours=d.getHours()
let minute=d.getMinutes()
let second=d.getSeconds()

console.log(m+"/",D+"/",y)
console.log(hours+":",minute+":",second)





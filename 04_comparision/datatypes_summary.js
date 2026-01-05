//primitive datatypes

//7 types:string,number,boolean,null,undefined,symbol,bigint

// const number=100
// const score=100.55
// isLoggedIn=true
// const outSideTemperature=null
// let userEmail;

// let id=Symbol('abc')
// let anotherId=Symbol('abc')
// console.log(id === anotherId);
// const bigNumber=1234567912345678n






//Reference (non-primitive):Array,object,function

// let heroes=["shaktiman","spiderman","batman"]
// let myObj={
//     name:"sagar",
//     age:20
// }

// let myFunction=function(){
//     console.log("hello world");
    
// }
// console.log(typeof myFunction);


//stack memory(primitive)=number,string,boolean,null,undefined,bigInt,symbols

/*
let a =10   //original
let b=a    //copy
b=5        //only b changes
console.log(b) //5 
console.log(a)    // original unaffected


Primitive types = number, string, boolean, null, undefined, bigint, symbol
Assignment always copies the value → original unaffected

*/


//heap memory(non-primitive)=object,function,array

// let userOne={
//     name:"sagar",
//     roll:10

// }
// let userTwo=userOne
// userTwo.name="dipesh"
// // console.log(userOne);
// console.log(userTwo);
// console.log(userOne)


/*

from the above example of heap or non-primitive datatype  the original data is affected 
*/


/*
in conclusion from both 
primitive(stack) ma aru data ko copy pauxa and in non-primitive(heap) ma aru data ko original copy pauxa 
*/






let valOne={
    name:"sagar",
    age:20

}
let valTwo=valOne
valTwo.name="hitesh"
console.log(valTwo);
console.log(valOne);
















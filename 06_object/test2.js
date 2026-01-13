// // const user=new Object()  //singleton object=Only ONE instance (copy) of the object exists in memory

// const user={}     //non-singleton=Multiple instances (copies) can be created

// console.log(user);



const new_user={}
new_user.id="123abc";
new_user.name="sagar joshi";
new_user.isLoggedIn=true
// console.log(new_user)


const regularUser={
    email:"sagar@google.com",
    fullName:{
        firstName:"Sagar",
        lastName:"Joshi",
    }
}
// console.log(regularUser.fullName.lastName);

//combining object
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const newVal={...obj1 , ...obj2}
// const newVal=Object.assign({},obj1,obj2)
// console.log(newVal);


//array of object
const user=[
    {
    id:1,
    email:"sagar@gmail.com",
},
{
     id:2,
    email:"dipesh@gmail.com",
    

},
{
     id:3,
    email:"binod@gmail.com",

}

];
// console.log(user[0].id)

// console.log(new_user)
// console.log(Object.keys(new_user))
// console.log(Object.values(new_user))
// console.log(Object.entries(new_user))
// console.log(new_user.hasOwnProperty("isLogged"))
// console.log()


//object without destructing
// const bag={
//     pen:2,
//     pensils:2,
//     erasor:3,
// }
// console.log(bag.pen)
// console.log(bag.pensils)
// console.log(bag.erasor)

//object with destructing
// const bag2={
//      pen:2,
//     pensils:2,
//     erasor:3,
// }
// const{pen,pensils,erasor}=bag2;
// // console.log(pen,pensils,erasor)



// {
//     "userName":"sagar",
//     "courseName" :"js" 
// }


















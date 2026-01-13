// Parameters & Arguments

// function greeting(name){
//     console.log("Hello",name)

// }
// greeting("Sagar")
// greeting("Dipesh")

// ****************mini practice************
// orderCoffee("Medium","Americano")
// function orderCoffee(size,coffeeType){
//     console.log(`Your coffee size is ${size} and coffee type is ${coffeeType}`)
// }


// *****************mini practice***********
function greetPerson(name){   
    console.log(`Hello, ${name}! Welcome! `)

}
// greetPerson("Sagar Joshi")
// greetPerson("Binod Joshi")
// greetPerson("Dipesh Joshi")



// *************Practice Question 2: Coffee Shop Order ☕*******************

function orderCoffee(name,size,coffeeType){
    console.log(`${name} ordered a ${size} ${coffeeType} `)
}
orderCoffee("Sagar Joshi","Medium","Americano")
orderCoffee("Dipesh Joshi","Small","Espresso")
orderCoffee("Binod Joshi","Large","Cappuccino")
orderCoffee("Binod Joshi","Large","Cappuccino")
orderCoffee("Binod Joshi","Large","Cappuccino")
orderCoffee("Binod Joshi","Large","Cappuccino")
orderCoffee("Binod Joshi","Large","Cappuccino")
orderCoffee("Binod Joshi","Large","Cappuccino")
orderCoffee("Binod Joshi","Large","Cappuccino")
orderCoffee("Binod Joshi","Large","Cappuccino")
orderCoffee("Binod Joshi","Large","Cappuccino")
orderCoffee("Binod Joshi","Large","Cappuccino")


// ***********console.log vs return **************************

const myShopping=(price,quantity)=>{
    return price*quantity
}
let newTotal=myShopping(100,2)
console.log(total)
let tax=total *0.13     //this is only demo of tax checking 
console.log(tax)    



// ************Project Name: Simple Coffee Bill Generator******************

const calculateBill = (price,quantity) => {
    return price * quantity

}
let total=calculateBill(200,3)
console.log(`Total price : ${total}`)
let calculateTax=total * 0.13
console.log(`  tax : ${calculateTax}`)
let totalAfterTax=total + calculateTax
console.log(`final price after tax : ${totalAfterTax}`)






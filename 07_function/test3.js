// const buyMilk=(size=1)=>{
//     return `Milk size is ${size} litre`

// }
// console.log(buyMilk(2))



// **************validation check***********

// const coffeeOrder=(price,quantity) =>{
//     if(typeof price !=="number" || typeof quantity !=="number"){
//         // console.log("Invalid order")
//         return;

//     }
//     return price * quantity
// }
// const totalPrice=coffeeOrder("100",3)
// console.log(totalPrice)


// ********************Movie Ticket Counter*******************

// function buyTickets(tickets){
//     if (typeof tickets !=="number"){
//         console.log("Invalid number of ticket");
//         return;
//     }
//     return tickets *150
// }
// const total=buyTickets("5")
// console.log(total)



// function calculateLunchCost(count=4 ){
//     if(typeof count !== "number"){
//         return"invalid input"
//     }
//     return count *100

// }
// const result3=calculateLunchCost()
// const result1=calculateLunchCost("1")
// const result2=calculateLunchCost(2)
// console.log(result3)
// console.log(result1)
// console.log(result2)


// function calculateBill(price=100,quantity=3){
//     if(typeof price !== "number" || typeof quantity !=="number"){
//         return "invalid input"
//     }
//     return price * quantity
// }
// const total=calculateBill()
// const tax=total*0.13
// const finalPrice=total + tax
// console.log(`Total:${total}`)
// console.log(`Tax:${tax}`)
// console.log(`finalPrice:${finalPrice}`)



// ************************Mini-Project: Coffee Shop Receipt**************************

const coffeeOrder=(name,type,quantity=1,pricePerCup=100) =>{
    if(typeof quantity !== "number" || typeof pricePerCup !=="number" ||typeof name !=="string" ||typeof type !=="string" ){
        return "invalid input"
    }
    let total=pricePerCup*quantity
    let tax=total*0.13
    let finalPrice=total + tax
    return{
        total,
        tax,
        finalPrice

    }


}
const result=coffeeOrder("sagar","medium",5)
console.log(result)
console.log("Total:",result.total)
console.log("Tax:",result.tax)
console.log("finalPrice:",result.finalPrice)



   





   


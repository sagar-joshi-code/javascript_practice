

const myDetails={
    name:"sagar",
    age:20,
    isLoggedIn:true,
};
// console.log(myDetails.name);
// console.log(myDetails.age);
// console.log(myDetails.isLoggedIn);
myDetails.age=21;
// console.log(myDetails.age);
myDetails.city="kathmandu";
// console.log(myDetails.city);
delete myDetails.city;
delete myDetails.isLoggedIn;
// console.log(myDetails);

// *******************phone Object demo*************************
const myPhone={
    brand:"iphone",
    model:"16 promax",
    price:"200k",
    isWorking:true,
};
// console.log(myPhone.brand);
myPhone.model="17 promax"
// console.log(myPhone.model);
myPhone.isGood=true;
// console.log(myPhone);
delete myPhone.isGood;
// console.log(myPhone);






// *******************bike Object demo*************************

const myBike={
brand:"Pulsar",
    model:"150CC",
    price:"200k",
    isWorking:true,

}
// console.log(myBike);
// console.log(myBike.brand);
myBike.isWorking=false;
// console.log(myBike);
myBike.updatedPrice="500k"
// console.log(myBike);
delete myBike.updatedPrice;
// console.log(myBike);


// **********fan***********
// const fan={
//     brand:"xyz",
//     price:"1k",

//     on(){
//         console.log("is ringing")
//     }
    
    
    
// }
// fan.on()


// const door={
//     isOpen:function(){
//         console.log("open");
        
//     }
// }
// door.isOpen()

const BankDetails={
    name:"sagar",
    deposited_balance:1000,
    function(){
        // console.log(`your current balance is ${this.deposited_balance}`);
    }

}
BankDetails.function()




const light={
    on:function(){
        // console.log("light is on");
        
    }
}
light.on()



const fan={
    isOn:true,
    function(){
        // console.log("fan is on");
        
    }
}
fan.function()



const door={
    isOn:true,
    openDoor:function(){
        // console.log("door is open");
        
    }
}
door.openDoor()



// const phone={
//     battery:50,
//     showBattery:function(){
//         // console.log("phone has 50% battery");
        
//     }
// }
// phone.showBattery()


const user={
    username:"sagar",
    login:function(){
        // console.log(this.username + "logged in");
        
    }
}
user.login()
 
user.username="ram"
user.login()





const bag={
    color:"white",
    pocket:{
        small:2,
        big:1,
        
    }
}
// console.log(bag.pocket.small)



const facebook={
    username:"sagarjoshi",
    profile:{
        bio:"its me sagar joshi",
        followers:100,
    }
}
// console.log(facebook.profile.bio)
// console.log(facebook.profile.followers)



// const instagram={
//     username:"Sagar joshi",
//     profile:{
//         followers:100,
//         bio:"Just a simple boy who is obbessed with learning and exploring new things in tech",
//        showFollower:function(){
//         // console.log(this.followers + "Follower");
        
//        }

//     }
// }
// instagram.profile.showFollower()







const phone={
    brand:"iphone",
    model:"14 pro",
    battery:50,
    showBattery:function(){
        // console.log(this.battery+"%");
        
    }


}
phone.showBattery()




const instagram={
    username:"Sagar Joshi",
    profile:{
        followers:100,
        bio:"Love to talk about tech",
        showFollower:function(){
            // console.log(this.followers +"followers");
            
        }
    }

}
instagram.profile.showFollower()



   














































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
// const myPhone={
//     brand:"iphone",
//     model:"16 promax",
//     price:"200k",
//     isWorking:true,
// };
// // console.log(myPhone.brand);
// myPhone.model="17 promax"
// // console.log(myPhone.model);
// myPhone.isGood=true;
// // console.log(myPhone);
// delete myPhone.isGood;
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




// const light={
//     on:function(){
//         // console.log("light is on");
        
//     }
// }
// light.on()



const fan={
    isOn:true,
    function(){
        // console.log("fan is on");
        
    }
}
fan.function()



// const door={
    // isOn:true,
    // openDoor:function(){
        // console.log("door is open");
        
//     }
// }
// door.openDoor()



// const phone={
//     battery:50,
//     showBattery:function(){
//         // console.log("phone has 50% battery");
        
//     }
// }
// phone.showBattery()


// const user={
//     username:"sagar",
//     login:function(){
//         // console.log(this.username + "logged in");
        
//     }
// }
// user.login()
 
// user.username="ram"
// user.login()





const bag={
    color:"white",
    pocket:{
        small:2,
        big:1,
        
    }
}
// console.log(bag.pocket.small)



// const facebook={
//     username:"sagarjoshi",
//     profile:{
//         bio:"its me sagar joshi",
//         followers:100,
//     }
// }
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







// const phone={
//     brand:"iphone",
//     model:"14 pro",
//     battery:50,
//     showBattery:function(){
//         // console.log(this.battery+"%");
        
//     }


// }
// phone.showBattery()




// const instagram={
//     username:"Sagar Joshi",
//     profile:{
//         followers:100,
//         bio:"Love to talk about tech",
//         showFollower:function(){
//             // console.log(this.followers +"followers");
            
//         }
//     }

// }
// instagram.profile.showFollower()







// const door={
//     isOpen:false,
//     openDoor:function(){
//         this.isOpen=true;
//     }

// }
// door.openDoor()
// // console.log(door.isOpen);




// // const new_user={
//     isLoggedIn:false,
//     login:function(){
//         this.isLoggedIn=true;
//     }
// }
// new_user.login()
// // console.log(new_user.isLoggedIn)

//task_1
const light={
    isOn:false,
    turnOn:function(){
        this.isOn=true;
        
        
    }

}
light.turnOn()
// console.log(light.isOn);


//task_2
const instagram={
    followers:100,
    addFollower:function(){
        this.followers++;

    }
}
instagram.addFollower()
// console.log(instagram.followers);



const facebook={
    username:"Sagar joshi",
    followers:200,
    addFollower:function(){
        this.followers++;
    }
}
facebook.addFollower()
facebook.addFollower()
// console.log(facebook.followers);

// const viber={
//     follower:100,
//     addFollower:function(){
//         this.follower ++;
//     }
// }
// viber.addFollower()
// console.log(viber.follower)

//old way to access any details from object
// const old_user={
//     username:"Sagar Joshi",
//     followers:100,
//     isLoggedIn:true,

// }
// console.log(old_user.username)
// console.log(old_user.followers);
// console.log(old_user.isLoggedIn)



const phone ={
    brand:"iphone",
    model:"17 pro max",
    price:"200k"
}
const{brand,model,price}=phone
// console.log(brand,model,price)



// const user={
//     username:"Sagar Joshi",
//     followers:0,
//     isLoggedIn:false,
//     login:function(){
//         this.isLoggedIn=true
//     },
//     addFollower:function(){
//         this.followers++
//     },
//     logOut:function(){
//         this.isLoggedIn=false;
//     },
//     showProfile:function(){
//         console.log(this.username)
//         console.log(this.followers)
//         console.log(this.isLoggedIn)
//     }
   
 
   
// };
// user.login()
// user.addFollower()
// user.logOut()
// console.log(user.isLoggedIn);
// console.log(user.followers);
// user.showProfile()

//using destructor for aaccessing username,follower,isLoggedIn
// const{username,followers,isLoggedIn}=user
// console.log(username,followers,isLoggedIn)




const user = 
  {
    userName: "Sagar Joshi",
    followers: 0,
    isLoggedIn: false,
    logIn: function () {
      this.isLoggedIn = true;
    },
    logOut: function () {
      this.isLoggedIn = false;
    },
    addFollower: function () {
      this.followers++;
    },
    removeFollower: function () {
      if (this.followers > 0) {
        this.followers--;
      } else {
        console.log(this.userName + "has no follower to remove!");
      }
    },
    showProfile: function () {
      console.log(this.userName);
      console.log(this.followers);
      console.log(this.isLoggedIn);
    },
    }
    user.logIn()
    user.addFollower()
    // console.log(user.followers)
    // console.log(user.isLoggedIn)

     user.showProfile()

    































   











































// Object singleton or constructor

const tinderuser = new Object()    //object declaration  singleton
// const tinderuser ={}            //non singleton

tinderuser.id = 2345;
tinderuser.name = "Adi";
tinderuser.isLoggedIn = false;

// console.log(tinderuser);


const regularuser = {
    email:"adi@gmail.com",
    fullname:{
        userfullname :{
            fistname:"Adi",
            lastname:"Patil"
        }
    }
}
// console.log(regularuser);
// console.log(regularuser.fullname);
// console.log(regularuser.fullname.userfullname);
// console.log(regularuser.fullname.userfullname.fistname);


const obj1 ={1:"a",2:"b"}
const obj2 ={3:"c",4:"d"}

// const obj3 = Object.assign(obj1,obj2)      //method 1 all are merge in obj1 
// const obj3 = Object.assign({},obj1,obj2)      //method 2 all are merge in new {}object 3
const obj3 ={ ...obj1,...obj2}                    //Most used Method for array and objects
// console.log(obj3);


const users = [
    {
    id:1,
    email:"s@gmail.com"
    },
    {
        id:1,
        email:"s@gmail.com"
    },
    {
        id:1,
        email:"s@gmail.com"
    }
]

users[1].email
console.log(tinderuser);

console.log(Object.keys(tinderuser));       //it gives all keys from tinderuser in array.thats y we can perform loops on it
console.log(Object.values(tinderuser)); 
console.log(Object.entries(tinderuser)); 

console.log(tinderuser.hasOwnProperty('isLoggedIn'));


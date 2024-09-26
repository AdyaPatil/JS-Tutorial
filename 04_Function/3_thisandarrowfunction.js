
//+++++  this keyword +++++++ Arrow function ++++++\\

const user = {
    username:"Adinath",
    price:999,

    welcomeMessage : function () {
        // console.log(`${this.username} ,welcome to website`);       //this is used to current content
        // console.log(this);
        
    }
}
// user.welcomeMessage()
// user.username = "Sunny"
// user.welcomeMessage()

// console.log(this);       //empty


//without arrow function
// const chai = function () {
//     let username = "Adi"
//     console.log(this.username); 
// }
// chai()

//With arrow function
// const chai = () => {                       // `() => {}` symobl is used to define arrow function
//     let username = "Adi"
//     console.log(this.username); 
// }

// chai()

//1-> Explicit always use return keyword
// const addTwo = (n1,n2) => {
//     return n1 +n2 ;
// }
// console.log(addTwo(5,7));

//2->Implicit
// const addTwo = (n1,n2) => n1 + n2
// console.log(addTwo(5,7));

//3->Implicit not use return keyword
// const addTwo = (n1,n2) => (n1 + n2)
// console.log(addTwo(5,7));

//4 -> Object return
const addTwo = (n1,n2) => ({username:"Adi"})            //always wrap in ()
console.log(addTwo(5,7));


const myArray = [2,5,7,9,11]

myArray.forEach(() => {})
 
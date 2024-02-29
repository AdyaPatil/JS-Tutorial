/*
Data Types :-
A) Primitive Data Types :-
1) String
2) Number
3) Boolean
4) Null
5) Undefined
6) Symbol
7) BigInt

B) Reference Type (Non-Primitive)
1) Array
2) Objects
3) Functions
*/

const fruits =["Apple","Grapes","Mango","Banana"];

let myObj = {name: "adinath",
             age: 25}

const myfunction = function(){
    console.log("Hello World!");
}

//Stack(used in Primitive), Heap (Non-Primitive)
//if we defined in stack we have get a copy of variable.
//if we declare variable in heap memory it gives us a reference (original value)

let demo = "Adinath";

let anotherDemo = demo;
anotherDemo ="Sunny";
console.log(demo);
console.log(anotherDemo);

let user = {
    email:"abc@gmail.com",
    upi: "123@ybl"
}

let user2 =user ;

user2.email ="xyz@gmail.com"
console.log(user.email);
console.log(user2.email);
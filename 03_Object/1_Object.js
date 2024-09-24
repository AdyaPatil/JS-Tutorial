//Object create

const mySym = Symbol("Key1")

const stud = {
    name: "Adinath",
    age : 26,
    [mySym] : "MCA",         //Symbol always defined in [] braces
    location : "Kolhapur",
    email:"adinath@gmail.com",
    isLoggedIn: false,
    lastLogginDays : ["Monday","Friday"]
}
// console.log(stud); //get all data as it is

// console.log(stud.location);    //cant need qoutes simply add .
// console.log(stud["location"]);  //need require qoutes in square braces[""].
// console.log(stud[mySym]);


// stud.email = "Adi@gmail.com";   //we can change value 
// Object.freeze(stud);    // value are permanent save we cannot change if it is freeze
// stud.email = "Adi@microsoft.com";    //valuenot change beacause of freeze

// console.log(stud);



// Function declare for object

stud.greeting = function(){
    console.log("Hello Stud"); 
}
console.log(stud.greeting());

stud.greeting2 = function(){
    console.log(`Hello Stud,${this.name}`); 
}
console.log(stud.greeting2());





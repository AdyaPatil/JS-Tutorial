

function Myname() {
    console.log("A");
    console.log("D");
    console.log("I");
    console.log("N");
    console.log("A");
    console.log("T");
    console.log("H");
}

// Myname();


// function addTwoNumbers(N1,N2){     //N1,N2 parameter
//     console.log(N1 + N2);
    
// }

function addTwoNumbers(N1,N2){     //N1,N2 parameter
    // let result = N1+N2;
    // return result
    // console.log("Adi");           // not print after return beacause function not work after return 
    return N1+N2                     // ths is another step to return value
}

const result = addTwoNumbers(3,5)    //3 5 Argument

// console.log(result);


function loginUserMessage(username = "root"){
    if (username === undefined) {             //if(!username) this condition is also valid most use in react
        console.log("Please enter username");
        return
        
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Adinath"));
// console.log(loginUserMessage());



//FOr shopping cards for adding prices

function calculateCardPrice(...num1){             //(...)rest operator or rest operator
    return num1
}
// console.log(calculateCardPrice(200,300,450));


const user ={
    username1 :"Adinath",
    price :98
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username1} and Price is ${anyobject.price}`);
    
}

// handleObject(user)
handleObject(                            //we can pass value as like this
    {
        username1 :"Sunny",
        price :97
    }
)


// Array
const array = [200,300,400,500]

function studInfo(getArray){
   
    return getArray[1]
}

// console.log(studInfo(array));

console.log(studInfo([200,300,400,500]));


 


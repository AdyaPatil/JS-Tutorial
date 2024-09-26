
var c = 300;     //Global scope -> This value is available for all code,function,method,object,etc. for var


//Local Scope -> this value cant use anywhere only related scope
if (true) {
    
    var c = 30 ;
}

// console.log(c);

// inspect console wale global scope node se run karne vale scope se alag hai.
// {} -> scope
//closure example ->

function one(){
    const username = "Adi"

    function two() {
        const website = "Youtube"
        console.log(username);
        
    }
    // console.log(website);
    two();
    
}
// one();

if (true) {
    const username = "Adinath"
    if (username === "Adinath") {
        const website = " Youtube"
        // console.log(username + website);
        
    }
    // console.log(website);
    
}
// console.log(username);





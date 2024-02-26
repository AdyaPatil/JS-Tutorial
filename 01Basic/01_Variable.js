//See Example :-

const accountId = 247654 //const = Can't change value
let accountEmail = "shahana@google.com"
var accountPassword = "12345"
accountCity = "Kolhapur"
let accountState;

/*
*Note :-
1) Prefer not to use var because of issue in block scope and functional scope.
2) We can use keyword const or let for declaring variable.
3) We can create memory space without using any keyword.Avoid it.
*/

accountEmail ="hc@hc.com"
accountPassword = "6789"
accountCity = "pune"
//We can change value of any variable(let,var,etc) but we can't change const value.


console.log(accountId);
//We can print using console.log() anything.

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
//We can also print more than one values using console.table.
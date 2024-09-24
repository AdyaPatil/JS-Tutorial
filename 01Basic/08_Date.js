

//january 1,1970 UTC......get date from here to ->


let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);


let myTimestamp = Date.now()
console.log(myTimestamp);       //millisecond
console.log(Math.floor(myTimestamp/1000)); //second


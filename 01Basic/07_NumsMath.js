const price = new Number(205) //Number says that the value is exact number. not other data type
console.log(price);
console.log(price.toString()); //Change data type of number to string

const nike = 10000000000
console.log(nike.toLocaleString('en-IN')); //Get value seperated by comma. 'en-In' -> get indian type value.



//Math
console.log(Math.random());               //it gives random value between 0 to 1
console.log(Math.random()*10);            //it gives random value but shift 1 decimal to left
console.log((Math.random()*10)+1);        //it gives random value with decimal shift + not give value 0.the value always betn 0<.
console.log(Math.floor(Math.random()*10)+1); //gives round value

const min =10
const max =20

console.log(Math.floor (Math.random() * (max - min + 1)) + min);





const name ="adinath";
const repoCount = 15

console.log(name + repoCount +" Value"); //it is old trick

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //(``) => Backticks New Trick and Better Way
const gameName = new String("Adinath");
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));

const newString = gameName.substring(1,4)
console.log(newString);

const anotherString = gameName.slice(-5,4);
console.log(anotherString);

const adi ="    Adi    ";
console.log(adi);
console.log(adi.trim());

//replace
//include
//split
//
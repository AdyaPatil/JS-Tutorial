

const marvel_heros =["thor","Ironman","spiderman"]
const dc =["superman","flash","batman"]

// marvel_heros.push(dc)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const newArr = marvel_heros.concat(dc)      //concat only 2 at a time
console.log(newArr);

const newArr1 = [...marvel_heros,...dc]     //concat many at a time
console.log(newArr1);


//nested array in single array use flat(infinte) method.
//change string to array use from method
//get empty array for objects


let score1 =100
let score2 =200
let score3 =300

console.log(Array.of(score1,score2,score3));


const array = [1,2,3,4,5]   //Number array
const array1 = ["adi","sunny","karan"]   //String array
const array3 =new Array(1,2,3,4,5)   


// console.log(array);
// console.log(array[1]);   //get index value start with 0 also get value using negative index

//Array Methods

// array.push(8)             //add element at last
// console.log(array);

// array.pop()               // delete last element
// console.log(array);

// array.unshift(8)          //add 8 at the 0 index without any change
// console.log(array);

// array.shift(8)                //first element remove
// console.log(array);


// console.log(array.includes(5));        // 5 present or not

// const newArray = array.join()       //change data type into string
// console.log(array);
// console.log(newArray);
// console.log(typeof(newArray));


//slice or splice

console.log("A  ", array);


const myn1 = array.slice(1,3)      //get element without inclde range but not change in array
console.log("B ", array);
console.log(myn1);


const myn2 = array.splice(1,3)      //get element including range but change the array and print remaining element
console.log("C ", array);
console.log(myn2);








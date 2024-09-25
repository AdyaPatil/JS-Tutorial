const course ={
    coursename:"Javascript",
    price:9000,
    teacher:"Adinath"
}

//course.coursename

// const {teacher} = course    //before destructure
// console.log(teacher);

const {teacher : T} = course   //after destructure
console.log(T);


// //For React destructuring example
// const navbar= ({company}) => {

// }
// navbar(company = "Adi")

//API IN JSON OBJECt
// {
//     "name":"Adi",
//     "coursename":"React",
//     "price": 5000
// }


// //API IN JSON ARRAY
// [
//     {},
//     {}
// ]
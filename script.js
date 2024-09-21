// JavaScript Document
var studentName = "Ilia";
var studentAge = 26;
var isEnrolled = true;

console.log(studentName);
console.log(studentAge);
console.log(isEnrolled);



let animalString = "Cat";
console.log("String:", animalString);

let integerNumber = 50;
let floatNumber = 7.77;
console.log("Integer Number:", integerNumber);
console.log("Floating-Point Number:", floatNumber);

let trueOrFalse = true;
console.log("Boolean:", trueOrFalse);

let vegetables = ["carrot", "cabbage", "celery"];
console.log("Array:", vegetables);

let car = {
    make: "lexus",
    model: "GS350",
    year: 2013};
console.log("Object:", car);


let sum = integerNumber + floatNumber; 
console.log("Addition (42 + 3.14):", sum);

let difference = integerNumber - 10; 
console.log("Subtraction :", difference);

let product = integerNumber * 2; 
console.log("Multiplication", product);

let quotient = integerNumber / 7; 
console.log("Division:", quotient);


console.log("50 > 10:", integerNumber > 10);
console.log("7.77 < 10:", floatNumber < 10);
console.log("50 === 50:", integerNumber === 50);
console.log("50 !== 7.77:", integerNumber !== floatNumber);


let isNew = car.year > 2023 && car.year < 2025;
console.log("Car is new ", isNew);

let isOld = car.year < 2022 || car.year> 1980; 
console.log("Car is old ", isOld);

let isNotRetro = !isNew;
console.log("Car is not a retro (!isNew):", isNotRetro);

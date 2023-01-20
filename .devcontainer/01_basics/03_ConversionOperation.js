// Test for string conversion to number
let score = "68"
let X = Number(score)
console.log(typeof X); // frontend bata malai 68 in the form of string aayo but I want to operate it as number then I convert it by using Number()
// Success

// But sometimes frontend bata malai score="68abc" aayo aba let's see what happens
let scores="68abc"
let Y = Number (scores)
console.log(typeof Y);
//But
console.log(Y)
// Y is not a number!!

// Test for conversion of null to number
let scorex = null
let Z = Number(scorex)
console.log(typeof Z); 
//But
console.log (Z);
// 0

// test for conversion of undefined to number
let scorev = undefined
let V = Number(scorev)
console.log(typeof V); 
//But
console.log (V);
// Nan

// Test for conversion of boolean to number
let scorea = true
let A = Number(scorea)
console.log(typeof A); 
//But
console.log (A);
// 1 aayo if false haleko vaye 0 aauthyo

// conversion of datatypes to boolean

let isLoggedIn = 1
let booleanisLoggedIn = Boolean(isLoggedIn)
console.log(booleanisLoggedIn);
// true aayo ans , yedi timle "" garyo vane false , "Nutan" lekhyo vane true , 0 thiyo vane false

let someNumber = 20
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

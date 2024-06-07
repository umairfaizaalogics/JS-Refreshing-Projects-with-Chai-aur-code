// Two parts of datatypes:
// Primitive & non-primitives

// Primitive: They are CallbacK Value => They are 7 Types: 1. String  2. Number 3. Boolean, 4. Null 5. Undefined 6. Symbol 7. BigInt


const score = 100
const scoreValue = 10.3 

const isLoggedIn = false // Boolean
const outsideTemp = null // Empty value but some value is here.
let userEmail; //undefined 
 
//SYMBOLS
const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);


const bigNumber = 3435638264912n


//Reference (Non-Primitive) : Callby Reference Value => 1. Arrays 2. Objects 3. Functions
//Non-primitive datatypes typeof always be object/functions

const heros = ["hitman", "marvel", "spiderman"]; //Array

//Object
let myObj = {
    name: "Umair",
    age:  24,
}


//Functions
const myFuntion = function() {
    console.log("Umair Faiz");

}

console.log(typeof outsideTemp);

/**
 * var: the keyword used to define a variable in js
 * let: the keyword used to define a variable in js -- define only once accepted
 * const: the keyword used to define a variable not accept any changes
 * 
 * age: the name of the variabel
 * 22: the value of the age variable
 * 
 * Naming vars rules:
 *  1 - variable name only contains English alphabit characters and numbers
 *  2 - variable only start with English alphabit characters or _
 * car or _car , 
 *      first name: first_name
 *      last name in the family: lastNameInTheFamily;
 * 
 */


////// Browsers -- ES5 -- javascript vanilla
// var 
var age = 22; // Defination
var age = 122; // Defination
age = 20202;

////////////// AFTER ES6 ECMAScript 6

// let 
let year = 2021; // Defination

year = 2022; // assign new value


// const
const birthDate = 2000; // Defination

console.log(birthDate);

// birthDate = 122; // #### ERROR

console.log(birthDate);



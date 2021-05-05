// Logical Operators

/**
 * And: &&
 * OR: ||
 * Greater Than: >
 * Less Than: <
 * Greater Than Or Equals: >=
 * Less Than Or Equals: <=
 * Is Equals?: ==
 * Is not Equals?: !=
 * Is Equals In values and data types?: ===
 * Is not Equals In values and data types?: !==
 */

// Logic
// AND
var testAndResult = true && true && true && true && true && true;

console.log(testAndResult);



var testAndResult = false && true && true && true && true && true;

console.log(testAndResult);

// OR

var testAndResult = false || false || false || false || false || false;

console.log(testAndResult); // false


// OR

var testAndResult = false || true || false || false || false || false;

console.log(testAndResult); // true
console.log('----------------------------------');


// >
var checkNumber = 100 > 1000; 
console.log(checkNumber); // false


// <
var checkNumber = 100 < 1000; 
console.log(checkNumber); // false

// >=
var checkNumber = 100 >= 100; 
console.log(checkNumber); // true


// <=
var checkNumber = 100 <= 100; 
console.log(checkNumber); // true


console.log('----------------------------------');
// ==
var number = 1000;
console.log(number == 100); // false
console.log(number == 1000); // true

console.log(number != 1000); // false
console.log(number != 100); // true



console.log('----------------------------------');
// ===
var number = "1000";
console.log(number == 1000); // true, == only for value
console.log(number === 1000); // false, === for data type and value
console.log(number !== 1000); // true

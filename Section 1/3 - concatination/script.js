// Concatination 
// 'Hello' + firstName + ' you are welcome'

var message = 'Hello';
console.log(message);

/// a way to concat
message += ' ';

message = message + 'World!' ;



console.log(message);
//message 


var number =  200 + 199;


console.log(number);


var askForName = prompt("what is your name?");

var messageForName = "the name passed is: " + askForName + " you are welcome";

alert(messageForName);


// Moz code
const str1 = 'Hello';
const str2 = 'World';

console.log(str1.concat(' ', str2));
// expected output: "Hello World"

console.log(str2.concat(', ', str1));
// expected output: "World, Hello"

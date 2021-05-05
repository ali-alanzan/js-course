/**
 * Data Types: 
 * Int : number
 * String
 * Boolean: true / false
 * 
 */

// Int: number
var age = 22;
var year = 2021;
var birthDate = 2000;



// String
var message = 'Hello World!';
console.log(message, typeof message);

var message_2 = "Hello Javascript";
console.log(message_2, typeof message_2);


var message_3 =  `Hello From another string template`;
console.log(message_3, typeof message_3);



// Boolean 01010101010101001
var arabicTutrial = true; // 1
console.log(arabicTutrial, typeof arabicTutrial);


var sportRewards = false; // 0
console.log(sportRewards, typeof sportRewards);


// Array
var friends = [
    'Ali', // index 0 
    'Ahmed', // index 1
    'Mahmoud' // index 2
];

console.log(friends, typeof friends);
console.log( friends[1] ) ; // Ahmed

var array = [
    'JS',
    222,
    true,
    true,
    true,
    false,
    function () {

    },
    { name: 'Ali' },
    null // no value
];
console.log(array);


// Object
var car = {
    name: "BMW x6",
    ceil_opened: true,
    doors: 4
};

console.log(car, typeof car);

console.log(car.name, typeof car.name);
console.log(car.doors, typeof car.doors);
console.log(car.ceil_opened, typeof car.ceil_opened);


// Example

var cars = [ // array named cars
    {
       model: 'BMW X1',
       doors: 2,
       ceil_open: true,
       doors: 4
   },
    {
       model: 'BMW X2',
       doors: 2,
       ceil_open: true,
       doors: 4
   },
    { // index 2
       model: 'BMW X3',
       doors: 2,
       ceil_open: true,
       doors: 4
   }
];

console.log(cars[2]);
cars[2].doors = 2;

console.log( 'car in index number 2 contains ' , cars[2].doors , ' doors' );


var sored_cars = cars;
sored_cars[2] = true;
console.log( 'car in index number 2 contains ' , cars[2].doors , ' doors' );
console.log(cars[2]);


// Any Object or array related to the same address in the memory by the object itself
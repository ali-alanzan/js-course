// Assignment Operators
var age = 12;
console.log(age); //12
var age = 22;
console.log(age); //22

age = 39;
console.log(age); //12

const birthDate = 1990;
// birthDate = 19990; ERROR

console.log(age); //990


let name = 'Ali Alanzan';
// Assignment to the name variable
name = ' Ali Alyousef';
console.log(name);

name += ' From Syria Live Working in computer programming since 2017';
console.log(name);


var yearRelased = 2000;
yearRelased += 5;
console.log(yearRelased);


// Object
var car = {
    name: "BMW X6",
    features: {
        ceil_open: true
    }
};
console.log(car, car.features.ceil_open);

car.name = 'TOYOTA';
car.features.ceil_open = false;

console.log(car, car.features.ceil_open);


car = 'New value';
console.log(car);

var friends = ["Ali", "Yousef", "Alaa", "Yassmeen", true ];
console.log(friends);

friends[4] = "Mahmoud";
console.log(friends);

var newVariable = friends;
console.log(friends);
newVariable[0] = 'Alyaa';

console.log(friends);
// Objects
/**
 *
 */
//  Date Object
var date = new Date('December 17, 1995 03:24:00');

console.log( date );
console.log( date.getDay() );



// String 

// var string_1 = new String("A String object"); not recommnded
var string_2 = "A String object";

// console.log(string_1[0], string_2[0]);


// var obj = new Object();  // not recommnded
// obj.name = ' new name ';

var obj_2 = {
    name: 'new name',
    name_2: 'new name',
    name_3: 'new name',
};

console.log( Object.keys(obj_2) );
console.log( Object.values(obj_2) );
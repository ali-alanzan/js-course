// Array methods
/**
 * Add to array
 */

var friends = [];
friends[0] = 'Ali';
// friends[1] is undefined

friends[3] = 'Ahmed';

// push starts count from index 3
friends.push('Adel'); // index 4
friends.push('Ali'); // index 5
friends.push('Ahmed');



// splice
// friends.splice(, );
console.log(friends.length); // 7
console.log( friends[friends.length-1] ); // 7

// Add to array 
friends[friends.length-1] = 'Last Index';

console.log(friends);


// splice
friends.splice(friends.length, 0, '11', [
    'friend 1 from splice',
    'friend 2 from splice',
]);

console.log( friends );



console.log( friends[friends.length-1] );

// Array methods
/**
 * Add to array
 * push: add to the end of the array
 * unshift: add to the end of the array
 */

var friends = [];
friends[0] = 'Ali';


friends.splice(friends.length, 0, 'Splice item');

friends.unshift('Layla'); // to the first item of the array

friends.push('Lobna'); // last index
friends.push('1'); // last index
friends.push('2'); // last index
friends.push('3'); // last index

console.log( friends );



// Remove from array
// splice
friends.splice(1, 1 ); // remove ali
// Remove from the first of the index

console.log( friends );

friends.pop(); // remove last item

console.log( friends );

friends.shift(); // remove first item

console.log( friends );

var friends = friends.slice(0, 2); // get only the items from index 0 and ends with index 2

console.log( friends );

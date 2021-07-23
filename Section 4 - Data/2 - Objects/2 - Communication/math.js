// Objects
/**
 *
 */
//  Math Object

// Math.ceil(number);
console.log( 'ceil 12.4', Math.ceil(12.4) ); // 13
console.log( 'ceil -12.4', Math.ceil(-12.4) ); // -12

// Math.floow(number);
console.log( 'floor 12.8', Math.floor(12.8) ); // 12
console.log( 'floor -12.4', Math.floor(-12.4) ); // -13


// Math.round
console.log( 'round 12.4', Math.round(12.4) ); // 12
console.log( 'round 12.5', Math.round(12.5) ); // 13

// Math.min
var nums = [1,34,64,25,345,345, 0.2]
// console.log( Math.min( ...nums ) );
console.log( Math.min( 1, 34,64,25,345,345, 0.2  ) );

// Math.max
var nums = [1,34,64,25,345,345, 0.2]
console.log( Math.max( ...nums ) );
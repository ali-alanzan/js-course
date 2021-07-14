// Array
/**
 * var friends = [];
 * var friends = ['Ahmed', 'Mahmoud', 'Mohammed'];
 */

// var friends = [1, 2, 3];
// console.log(friends);

// var friends = ['Ahmed', 'Mahmoud', 'Mohammed'];

// console.log(friends);

var friends = [];
console.log(friends);

friends = ['Ahmed', ' And ', 'Mahmoud', 'Mohammed']; // 4 itmes

console.log(friends[0]); // Ahmed
console.log(friends[1]); // AND
console.log(friends[3]); // Mohammed

console.log(friends.length); // 4 

friends[3] = 'Yousef';

console.log(friends);

var friends_names = friends;
friends_names[1] = 'Yasser';

console.log(friends_names, 'friends_names');
console.log(friends, 'friends');


console.log('------------------------------------------------');

//##### FIRST WAY TO COPY ARRAY

var friends_copied = [1, ...friends, 4, 5];
console.log(friends_copied, 'friends_copied');
friends_copied[0] = 'Nabil';
console.log('friends', friends);
console.log('friends_copied', friends_copied);

//##### FIRST WAY TO COPY ARRAY
var friends_copied_2 =  [1,2,3];
friends_copied_2 = friends_copied_2.concat(friends);
console.log('friends_copied_2', friends_copied_2);

// Built-in functions examples
// Async function - setTimeout

// alert(); // built-in function
// console.log(); // built-in function

var checkAge = prompt('What is your age??'),
    age = Number(checkAge);

if( checkAge != null && checkAge != "" && !isNaN(age) && typeof(age) == "number" ) {
    document.write('please wait ...');
    function callBackTimer(age) {
        suggestFood(age);
    }
    setTimeout( callBackTimer , 1000,  age);

}



function suggestFood( age = 12 ) {
    var message = '';

    if( typeof(age) != "number")  {

        message = 'The age is not a number';

    } else if ( age > 20 ) {

        message = 'You can eat 4 meals of meet and 2 of eggs and salat per week'

    } else if ( age > 12 ) {
    
        message = 'You should have milk, eggs, fruit, orange, bannana, meet, chicken';
    
    } else if ( age >= 1 ) {

        message = 'You should ask the doctor about the health food for your kids';

    } else {
    
        message = 'Invalid data';
    
    }
    
    alert(message);
}


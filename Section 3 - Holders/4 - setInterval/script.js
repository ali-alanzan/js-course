// Built-in functions examples
// Async function - setTimeout
// Async function - setInterval

// alert(); // built-in function
// console.log(); // built-in function

var checkAge = prompt('What is your age??'),
    age = Number(checkAge);

if( checkAge != null && checkAge != "" && !isNaN(age) && typeof(age) == "number" ) {
    var secounds = 5,
        miliSecs = secounds * 1000;

    var _timerElement = document.getElementById('timerElement');
    _timerElement.innerHTML = secounds;
    
    var waitTextInterval = setInterval(function () {
        
        _timerElement.innerHTML = _timerElement.innerHTML-1;

    }, 1000 );
    

    function callBackTimer(age) {
        suggestFood(age);

        clearInterval(waitTextInterval);
    }

    setTimeout( callBackTimer , miliSecs ,  age);

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


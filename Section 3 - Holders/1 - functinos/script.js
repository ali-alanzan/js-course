// Functions
var name = 'Ali Alanzan';
var car = {
    name: 'BMW x10'
};

function sayHello() {

    var checkAge = prompt('What is your age?');

    if ( checkAge != "" && checkAge != null && checkAge >= 18 ) {
        // code
        var isCompatible  = true;
        document.write('you are welcome');
    } else {
        document.write('sorry, your data is invalid');
    }
    console.log(checkAge);
}

sayHello(); // call the function OR run the function


//==================== (run or call) the functin by itself without calling it manually
// the function is not defined from out this scope ()

(  function sayHi() { // this function will run automatic
    alert('Hello World');
} () ); 

sayHi(); // is not defined

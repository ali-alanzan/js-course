// Functions Advanced
/**
 * 
 * @param {*} nameFunction 
 */

function sayWelcome( nameFunction, salary ) {
    var salaryFunction = 100;

    if( typeof(salary) == "number" && salary >= 100 ){
    
        salaryFunction = salary;        
    
    }

    if( typeof(nameFunction) == "string" &&  nameFunction != null && nameFunction != "" ) {
        var messageSalary = ' And your salary is ' + salaryFunction;
        alert('Welcome ' + nameFunction + messageSalary );
    }
}

var getName = prompt('What is your name?');

sayWelcome( getName, 1800  );



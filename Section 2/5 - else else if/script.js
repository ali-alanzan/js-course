// if else, else if
var salary = 1800;
var yearsInTheWork = 5;

if ( salary > 2000 ) {
    var amount = salary-2000;

    salary -= amount;
    alert(' the amount will removed from the salary : ' + amount);
    alert('Your salary is: ' + salary);

} else if( salary == 2000 ) {
    
    alert('your salary in the avg of our employees salaries');

} else if ( salary < 2000 && yearsInTheWork <= 1 ) {

    alert('Your salary will increased in the second year of your work');

} else {

    alert('Your salary is not correct, please connect to your manager');

}
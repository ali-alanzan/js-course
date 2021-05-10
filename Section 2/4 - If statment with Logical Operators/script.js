// if statment with Logical Operators

/**
 * Logical Operators
 * && : AND
 * || : OR
 */

var country = 'USA';
var age = 45;


if ( age > 20 && age < 50 && country == 'USA' ) {
    alert('age is in range');
}



if ( 
    country == 'Egypt' 
    || country == 'USA' 
    || country == 'Canda' 
    || country == 'Romania'
    || age < 20
) 

{
    // the code here is on execution
    console.log('first if done');

    if( age > 20 || age == 18 ) {

        alert('okay, all conditions are true');
    
    }

}
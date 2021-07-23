// String
/**
 * var string = '';
 * email.search('value') 
 *     : return -1 if the value not exist or the index of the value
 * email.search(/[^A-z0-9\.\@\-]/) 
 *  /[]/ to use regex
 *  ^ NOT 
 *  \ escape the character
 * 
 * email.split(separator)
 *  convert the string to indexed array separated by the separator 
 */

// not recommnded 
// var email = new String('alialanzan.online@@gmail.com'); 

// var email = 'alialanzan.online@@gmail.com';
// var email = "alialanzan.online@@gmail.com";


var email = `alialanzan.online@gmail.com`;

console.log( email.search(/[^A-z0-9\.\@\-]/) );

var message = '';

if( email.search(/[^A-z0-9\.\@\-]/) > -1 || email.split('@').length != 2  ) {
    
    message = 'please check your email';

} else {
    message = 'email is correct';
}

alert(message);
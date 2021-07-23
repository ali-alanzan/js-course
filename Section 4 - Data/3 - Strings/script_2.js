// String
/**
 * var string = '';
 * string.trim() : remove all spaces
 * string.replace(needle, replace)
 * string.toUpperCase() 
 * string.toLowerCase()
 * 
 */

var fullName = '   !@ Hello I\'m Ali@% @!*@# Alanzan #@#!#@    '; //prompt('What is your name?'),
    username = '';

if ( fullName.length > 0 ) {
    username = fullName.trim();
    username = username.replace(/[^A-z0-9\-\.\ ]/g, '').replace(/\^/, '')
                .trim().replace(/\ /g, '-').replace(/\--/g, '-');
                
    username = username.toLowerCase();
    alert('Your customized username is ' + username);
}

console.log(username.toUpperCase());


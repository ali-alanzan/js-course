// String
/**
 * var string = '';
 * string.charAt(index)
 * 
 */

 function customizeUsername(string) {
    var username = string.trim();
    username = username.replace(/[^A-z0-9\-\.\ ]/g, '').replace(/\^/, '')
                .trim().replace(/\ /g, '-').replace(/\--/g, '-');
                
    username = username.toLowerCase();
    return username;
}
 
 var email = 'alialanzan.online@gmail.com'; //prompt('What is your Email?'),
 username = '',
 error = false,
 password = '123123Abfd',
 password_confirmation = '123123Abfd';
 

if ( email.length < 11  || email.split('@').length != 2  ) {

    error = 'check your email';

} else if ( email.search(/[^A-z0-9\.\@\-]/) > -1  ) {

    error = 'the character (' + email.charAt( email.search(/[^A-z0-9\.\@\-]/) ) + ') not allowed';

} else if(  password.length < 8 ) {

    error = 'password must be greater than or equals 8 characters';

}  else if ( password !== password_confirmation  ) {

    error = 'password does not match password confirmation';

}


if ( error != false ) {

    alert(error);

} else {
    var endCut = email.search('@');
    username = email.substr(0, endCut);
    console.log(email);
    username = customizeUsername(username);
    alert('Your customized username is ' + username);
}
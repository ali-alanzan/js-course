// String
/**
 * var string = '';
 * 
 */
 function customizeUsername(string) {
    var username = string.trim();
    username = username.replace(/[^A-z0-9\-\.\ ]/g, '').replace(/\^/, '')
                .trim().replace(/\ /g, '-').replace(/\--/g, '-');
                
    username = username.toLowerCase();
    return username;
}


// var fullName = prompt('What is your name?'),
//     username = '';

// if ( fullName.length > 0 ) {
//     username = customizeUsername(fullName);
//     console.log('Your customized username is ' + username);
// }



var email = prompt('What is your Email?'),
    username = '';

if(  email.length < 1 || email.search(/[^A-z0-9\.\@\-]/) > -1 || email.split('@').length != 2  ) {

    alert('please check your email');

} else {
        var endCut = email.search('@');
        username = email.substr(0, endCut);
        console.log(email);
        username = customizeUsername(username);
        console.log('Your customized username is ' + username);
}





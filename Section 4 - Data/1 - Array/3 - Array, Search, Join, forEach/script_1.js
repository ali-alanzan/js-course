// Array methods
/**
 * Search in Array
 * var cars = new Array();
 * Array.isArray(cars); 
 *      return true or false
 * cars.indexOf(value); return the first index or -1
 * cars.indexOf(value); return the last Index of the value or -1
 * cars.join( string_parameter ); convert the array inro strings and concatenated by the string_parameter
 *      string_parameter = '  , ' OR string_parameter = ' --- '
 */

var cars = ['Tesla', 'BMW', 'Tesla', 'Merceds', 'TOYOTA', 'GMC', 'Tesla', 'GMC'];

if ( Array.isArray(cars) ) {
    var findTesla = cars.indexOf('Tesla'); // from the start of the array
    var findLastTesla = cars.lastIndexOf('Tesla'); // from the end of the array
    console.log(findTesla); // first index of the value

    if ( findTesla >= 0 ) {
        console.log(cars[findTesla]); // first index of the value

    }

    if ( findLastTesla >= 0 ) {
        document.body.innerHTML = `
            the cars in our system is `+ cars.join(' - ') +` <br/>
            AND the Best friendly cars for the atmoshpher is `+ cars[findLastTesla] +`
        `;
        console.log(findLastTesla, cars[findLastTesla]); // first index of the value

    }


    // console.log(findLastTesla); // last index of the value
}


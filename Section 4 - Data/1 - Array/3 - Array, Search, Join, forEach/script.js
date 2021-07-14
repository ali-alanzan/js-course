// Array methods
/**
 * Array values
 */

 var carsInPark = ['Tesla', 'BMW', 'Tesla', 'Merceds', 'TOYOTA', 'GMC', 'Tesla', 'GMC'];
 var countTesla = 0;
 var teslaInPark= [];
 
  if ( Array.isArray(carsInPark) ) {
     carsInPark.forEach(function (value, index) {
         if( value == 'Tesla' ) {
             countTesla++;
             teslaInPark.push(index);
         }
     });
 
     if( countTesla > 0 ) {
         var numTesla = 1;
         teslaInPark.forEach(function (value) {
             document.body.innerHTML += `
             Tesla cars NUmbers ` + countTesla +`
                 the tesla car `+numTesla+` Is In The Room Number ` + value +` <br/>
             `;
             numTesla++;
         });
     }
  }
  
  
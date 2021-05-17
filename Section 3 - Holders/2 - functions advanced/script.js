// Functions Advanced
/**
 */


function suggestCar( budget ) { 
    var carsData = {
        pro: ['toyota', 'Hunday'],
        vip: ['ferarri', 'lamburgeni', 'BMW x7 ^'],
        normal: ['lada', 'gmt', 'verna', 'kia']
    };

    if( budget > 100000 ) {
        return carsData.vip;
    } else if( budget > 50000 ) {
        return carsData.pro;
    } else {
        return carsData.normal;
    }
    
    return carsData;
}

alert( suggestCar( 100001 ) );

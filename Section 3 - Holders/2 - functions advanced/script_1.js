// Functions Advanced
var car = function() { // block-start 
    
    alert('Hello, welcome to the car market');
   

    return 'BMW x10'; // stop loading everything in the same block
    // after return everything does not work
   
    alert('their is a new car in the market, it is Lamburgeni');

} // block-end

console.log( car() );


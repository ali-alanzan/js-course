// DOM
/**
 * DOM ROOT
 *  document
 *  document.body
 *  document.head
 *  
 * Methods:
 *  getElementById:         document.getElementById('idName')
 *  getElementsByTagName:   document.getElementsByTagName('li')
 *  getElementsByClassName: document.getElementsByClassName('darkColor')
 *  querySelector:          document.querySelector(selector)
 *      ONLY 1 Element Used
 *      selectorQuery: 
 *      class: .class
 *      id:    #idName
 *      .... css selectors
 *  querySelectorAll:       document.querySelector(selector)
 *      All the elements 
 */

// getElementsByTagName
//   console.log(  document.getElementsByTagName('li') );


//  getElementsByClassName
var darkColorElements = document.getElementsByClassName('darkColor');
var colors = [ '#f00', '#333' ];

if ( darkColorElements.length > 0 ) {
    
    for( var element of darkColorElements) {
        var roundNumber = Math.floor(Math.random()*colors.length);
        element.style.color = colors[roundNumber];
        // console.log(element);
    }
}

// getElementById
var currentPageElement = document.getElementById('currentPage');
currentPageElement.style.color = 'blue';



// document.querySelector('.darkColor')
console.log( document.querySelector('.darkColor') ); // log 1 item BUT 2 exist


console.log( document.querySelectorAll('.darkColor') ); // log all items


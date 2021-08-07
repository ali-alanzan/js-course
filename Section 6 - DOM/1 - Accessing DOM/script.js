// DOM
/**
 * innerText:     element.innerText
 *     get only the text
 * textContent:   element.textContent
 *     get the text with all its white space
 *  
 * innerHTML:     element.innerHTML
 *    get all the HTML content
 * 
 * document.body.childElementCount
 * document.body.childNodes
 *    return text and comments and elements in the document
 * document.body.children;
 *    return all the direct children HTML elements from this element
 * 
 * document.querySelector('#main_menu').querySelectorAll('.darkColor');
 * 
 * firstChild:             e.firstChild
 *          chose text and comments and elements
 * 
 * firstElementChild:      element.firstElementChild
 *      ONLY HTML
 * lastElementChild:       element.lastElementChild
 *    ONLY HTML
 * 
 * previousElementSibling: element.previousElementSibling
 *   ONLY HTML
 * nextElementSibling:     element.nextElementSibling
 *   ONLY HTML 
 * parentElement:          element.parentElement
 * closest:                element.closest('selector');
 * 

 */



// var darkColorElements 
// = 
// document.querySelector('#main_menu').querySelectorAll('.darkColor');




var darkColors = [ '#333', '#000' ];


var colors = [ 'red', 'blue', 'gray', 'yellow'];


// color all the children items of the menu
var elementsMenu = document.querySelector('#main_menu').children;

for( var element of elementsMenu) {
    var roundNumber = Math.floor(Math.random()*colors.length);
    element.style.color = colors[roundNumber];
}



// color only those items had selected
var darkColorElements 
= 
document.querySelector('#main_menu').querySelectorAll('.darkColor');

for( var element of darkColorElements) {
    var roundNumber = Math.floor(Math.random()*darkColors.length);
    element.style.color = darkColors[roundNumber];
}





var main_menu = document.querySelector('#main_menu');

// console.log( main_menu.children[main_menu.childElementCount-1] );
console.log( main_menu.firstChild); // #text
console.log( main_menu.firstElementChild); // first HTML Item
console.log( main_menu.lastElementChild); // last HTML Item

main_menu.firstElementChild.style.margin = '20px 0 100px 0';
main_menu.lastElementChild.style.margin = '100px 0 0 0';
main_menu.lastElementChild.style.color = 'purple';
main_menu.firstElementChild.style.color = 'purple';

var aboutElement = main_menu.children[6];

console.log( aboutElement.nextSibling ); // #text 
console.log( 'next', aboutElement.nextElementSibling ); // next HTML element 

console.log( aboutElement.previousSibling ); // #text 
console.log( 'prev', aboutElement.previousElementSibling ); // previous HTML element 


console.log(aboutElement.parentElement);


var level3Item = document.querySelector('#level3Item');

console.log(level3Item.parentElement, level3Item.parentElement.innerText);
console.log('html level3', level3Item.parentElement.innerHTML);


console.log('level3 text content', level3Item.innerText);

// level3Item.innerText is the same result as level3Item.textContent.trim();




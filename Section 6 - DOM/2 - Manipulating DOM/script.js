// Manipulating DOM
/**
 * 
 * var element = document.getElementById(id);
 * 
 * attributes: element.attributes;
 * id:         element.id
 * title:      element.title
 * value:      input.value || formElement.value
 * checkbox:   input.checked
 * option:     option.selected
 * 
 * dataset:
 *    Reach All Attributes Starts With data-
 *   Attribute Name:
 *    one word:         element.dataset.word
 *    multi words:      element.dataset.wordsCapitalizedBetweenDashes
 * 
 *  // Ex: <li data-grade="60" data-final-grade="80">Physics</li>
 *         element.dataset.grade
 *         element.dataset.finalGrade
 * 
 * 
 * style:      
 *  get element style property:
 *     var colorElement = element.style.color;
 * 
 *  set element style property:
 *     element.style.color = '#f00';
 *  
 *  more than one word properties: 
 *   in css : font-size
 * 
 *   in Js: element.style.fontSize
 *          element.style.fontSize = '23px';
 * 
 * classList:
 *     element.classList.add('className');
 *     element.classList.remove('className');
 *     element.classList.toggle('className');
 * 
 * 
 * Attribute METHODS: 
 *  getAttribute:     element.getAttribute('attribute-name');
 *  setAttribute:     element.setAttribute('attribute-name', 'valueOfTheAttribute');
 *  removeAttribute:  element.removeAttribute('attribute-name');
 * 
 * 
 * ADDING METHODS:
 *  append: add element or textNode or node or e.g. to the end of the content of another element
 *  appendChild:     the same as append BUT only adding HTML elements
 *  prepend:         add the element to the beginning of another element
 *  before:  
 *   ele_1.before(ele_2)    
 *   : put ele_2 before ele_1
 *    
 * after:     
 *   ele_1.after(ele_2)
 *   : put ele_2 after ele_1
 *    
 * 
 * 
 *  createElement: 
 *      var newElement = document.createElement('li');
 * 
 * Add text to element:
 *      var text = document.createTextNode(subject.name);
 *      newElement.append(text);
 * 
 * all those are ways to control what inside an HTML element: 
    * newElement.innerHTML = '<div></div>';
    * newElement.innerText = 'text';
    * newElement.textContent = 'text';
    * 
 * 
 * remove element:
 *    element.remove()
 * 
 * remove Element By Parent Node
 *   parentElement.removeChild(elementChild);
 * 
 * 
 */
var subject = {
    name: 'English',
    grade: '70',
    finalGrade: '80',
    classes: [
        'one',
        'two'
    ]
};


var liHTMLElement = document.createElement('li'),
    contentText   = document.createTextNode(subject.name);
    
    console.log(liHTMLElement, contentText);
    liHTMLElement.append(contentText);
    liHTMLElement.append('Test');
    liHTMLElement.id = 'new_li';
    
    // liHTMLElement.appendChild(testliHTMLElement); // only with HTML nodes

    var testNewElement = document.createElement('h3');
    testNewElement.innerHTML = 'HEading 3';
    liHTMLElement.prepend(testNewElement);
    testNewElement.id = 'heading_3';
    liHTMLElement.setAttribute('class', subject.classes.join(' ') );

    var liHTMLElementData = liHTMLElementData = liHTMLElement.dataset;
    liHTMLElementData.grade = subject.grade;
    liHTMLElementData.finalGrade = subject.finalGrade;


    var studentList = document.querySelector('#student_grades');
    studentList.insertBefore(liHTMLElement, studentList.children[2]);
    
   
    // AFTER 1 Sec
    setTimeout(function () {
        var heading_3 = document.getElementById('heading_3'),
        new_li = document.getElementById('new_li'),
        student_grades = document.getElementById('student_grades');
       
        // putting the heading_3 before the student_grades element
        student_grades.before(heading_3);
        student_grades.lastElementChild.after(new_li);

    }, 1000);





    // AFTER 5 Sec
    setTimeout(function () {
        var heading_3 = document.getElementById('heading_3'),
        new_li = document.getElementById('new_li'),
        student_grades = document.getElementById('student_grades');

        heading_3.remove();

        student_grades.removeChild(new_li);

    }, 3000);



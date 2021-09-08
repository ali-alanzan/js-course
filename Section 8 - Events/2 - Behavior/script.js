// Events
// Click, DblClick
/**
 * Target.addEventListener(targetedEvent, function() {
 *  // code to execute when the target object had the targeted event
 * });
 * 
 * Target.onclick =  function () {
 *  // code to execute when the target object had the targeted event
 * }
 * 
 * targetedEvent:  
 *      click
 *      dblclick
 *      keydown
 *      focus
 *      blur
 */

var _addSkill = document.getElementById('add-skill');

_addSkill.addEventListener('click', function() {

    
    var _skills = document.getElementById('skills'),
    _li = document.createElement('li'),
    _input = document.createElement('input'),
    _span = document.createElement('span'),
    inputs = _skills.querySelectorAll('input'),
    errors = _skills.querySelectorAll('.error'),
    error = false;
    if( errors != null ) {
        for( var _error of errors ) {
            _error.remove();
        }
    }

    if( inputs != null ) {
        for( var input of inputs ) {
            if(input.value.trim().length <= 0 ) {

                if ( input.parentElement.querySelector('p.error') != null ) {
                    input.parentElement.querySelector('p.error').innerText = 'please, this field is required';
                } else {
                    var _errorElement = document.createElement('p');
                    _errorElement.classList.add('error');
                    _errorElement.innerText = 'please, this field is required ';
                    input.parentElement.append(_errorElement);
                }
                error = true;
                input.focus();
                input.addEventListener('keydown', function () {
                    input = this;
                    var _error = input.parentElement.querySelector('p.error');
                    if(_error != null) {
                        _error.remove();
                    }
                });
                break;
            }


        }
    }

    if(error === false) {
        _input.setAttribute('type', 'text');
        _input.setAttribute('placeholder', 'share your skills');
    
        _span.classList.add('remove');
        _span.innerText = ' - ';
    
        _li.append(_input);
        _li.append(_span);
    
        _skills.append(_li);


        var _input =  _skills.children[_skills.childElementCount-1].querySelector('input');
        
        _input.focus();
        inputType(_input, 'focus');
        
        
        
        _skills.children[_skills.childElementCount-1]
        .querySelector('.remove').onclick = function () {
            removeSkill(this);
        };

        // _skills.children[_skills.childElementCount-1]
        // .querySelector('.remove').ondblclick = function () {
        //     removeSkill(this);
        // };

        _input.addEventListener('focus', function () {
            inputType(this, 'focus');
        });
        
        _input.addEventListener('blur', function () {
            inputType(this, 'blur');
        });
    
    }


});

function removeSkill(element, removeDirectly = false) {
    console.log(element);
    if( removeDirectly ) {
        element.parentElement.remove();
    } else {
        element.parentElement.querySelector('input').style.backgroundColor = 'red';
        
        setTimeout(function () {
            var confirmRemovingElement = confirm('Are you sure to delete this?');
            if( confirmRemovingElement ) {
                element.parentElement.remove();
            } else {
                element.parentElement.querySelector('input').style.backgroundColor = 'initial';
            }
        }, 500, element);

    }

}

function inputType(_input, event) {
    console.log(_input, event);

    if( event == 'focus' ) {
        var placeholder = _input.getAttribute('placeholder');
        _input.setAttribute('data-placeholder', placeholder);
        _input.setAttribute('placeholder', '');
    } else if( event == 'blur' ) {
        var dataPlaceholder = _input.getAttribute('data-placeholder');
        _input.setAttribute('placeholder', dataPlaceholder);
        _input.setAttribute('data-placeholder', '');
    }


}

var _remove = document.querySelector('.remove');
var _input = document.querySelector('#skills input');

_remove.addEventListener('click', function () {
    removeSkill(this);
});

// _remove.addEventListener('dblclick', function () {
//     removeSkill(this, true);
// });


_input.addEventListener('focus', function () {
    inputType(this, 'focus');
});

_input.addEventListener('blur', function () {
    inputType(this, 'blur');
});
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
                    _error.remove();
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
        _skills.children[_skills.childElementCount-1].querySelector('input').focus();
    }


});

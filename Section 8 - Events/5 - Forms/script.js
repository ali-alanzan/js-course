/**
 * Events:
 *  submit
 */

var _form  = document.getElementById('searchForm');


_form.addEventListener('submit', function (e) {
    e.preventDefault();

    var _form = this,
    _error = _form.querySelector('.error'),
    errorMessage = 'the field cannot be empty',
    _search = _form.querySelector('#search');

    if( _search.value != '' && _search.value != null ) {
        _form.submit();
    } else {
        if ( _error != null ) {
            _error.innerHTML = errorMessage;
        } else {
            var errorElement = document.createElement('p');
            errorElement.classList.add('error');
            errorElement.innerText = errorMessage
            _form.append(errorElement);

        }
        _search.focus();
    }



    return false;
});
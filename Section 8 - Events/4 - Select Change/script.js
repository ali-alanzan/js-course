/**
 * Events:
 *  change
 */

var _countries = document.getElementById('countries');

_countries.addEventListener('change', function () {
    var _countries = this,
    countryValue = _countries.value,
    _states = document.getElementById('states');

    if( countryValue != '' && countryValue != null ) {
        var statesTargeted = _states.getElementsByClassName(countryValue);
        
        for( var _state of _states.children ) {
            _state.style.display = 'none';
        }

        if( statesTargeted.length > 0 ) {
            for( var _state of statesTargeted ) {
                _state.style.display = 'block';
            }
        }

        _states.firstElementChild.style = 'block';
        _states.firstElementChild.selected = true;
        
    } else {
        for( var _state of _states.children ) {
            _state.style.display = 'none';
        }
        _states.firstElementChild.style = 'block';
        _states.firstElementChild.selected = true;
    }

});



// for( var _country of _countries.children ) {

// }
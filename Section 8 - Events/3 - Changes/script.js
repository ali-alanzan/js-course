// Events
/**
 * Events:
 * keydown
 */
 var amountInputs = document.getElementsByClassName('amount');

 for( var _input of amountInputs ) {
    _input.addEventListener('keyup', function () {
        _input = this;
        calcAmountForInputs(_input);
    } );

    _input.addEventListener('blur', function () {
        var _input = this,
        _total = document.getElementById('total')
        inputsTotal = 0;
        for ( var _inp of amountInputs ) {
            inputsTotal += Number(_inp.value);
        }

        _total.value = inputsTotal;

    });

}


 function calcAmountForInputs( _input ) {
    var currentAmount = _input.getAttribute('data-amount'),
    currentValue = _input.value,
    _resultToMulti = Number(currentValue) / Number(currentAmount);


    for ( var _inp of amountInputs ) {

        if ( ! _inp.isSameNode(_input) ) {

            if( Number(_input.value) <= 0  ) {
                _inp.value = 0;
            } else {
                var inpAmount         = _inp.getAttribute('data-amount'),
                result = Number(_resultToMulti) * Number(inpAmount) ,
                checkStringFloat = result.toString().indexOf('.');

                if( checkStringFloat >= 0  ) {
                    result = result.toFixed(3);
                }

                _inp.value = result;
            }

            _inp.blur();
        

        }
    }
}


/**
 *
 */

 var _addService = document.getElementById('add-service');

 _addService.addEventListener('click', function() {
 
     
     var _services = document.getElementById('services'),
     _li = document.createElement('li'),
     _input = document.createElement('input'),
     _span = document.createElement('span'),
     inputs = _services.querySelectorAll('input'),
     errors = _services.querySelectorAll('.error'),
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
         _input.setAttribute('placeholder', 'share your services');
         _input.setAttribute('name', 'services[]'); // new code
     
         _span.classList.add('remove');
         _span.innerText = ' - ';
     
         _li.append(_input);
         _li.append(_span);
     
         _services.append(_li);
 
 
         var _input =  _services.children[_services.childElementCount-1].querySelector('input');
         
         _input.focus();
         inputType(_input, 'focus');
         
         
         
         _services.children[_services.childElementCount-1]
         .querySelector('.remove').onclick = function () {
             removeService(this);
         };

         _input.addEventListener('focus', function () {
             inputType(this, 'focus');
         });
         
         _input.addEventListener('blur', function () {
             inputType(this, 'blur');
         });
     
     }
 
 
 });
 
 function removeService(element, removeDirectly = false) {
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
 var _input = document.querySelector('#services input');
 
 _remove.addEventListener('click', function () {
     removeService(this);
 });
 
 
 
 _input.addEventListener('focus', function () {
     inputType(this, 'focus');
 });
 
 _input.addEventListener('blur', function () {
     inputType(this, 'blur');
 });
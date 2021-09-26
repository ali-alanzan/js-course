var _form  = document.getElementById('add_member');

_form.addEventListener('submit', function (e) {
    _form = this;
    e.preventDefault();

    var xhr = new XMLHttpRequest(); // create a XHR Object
    var url = _form.getAttribute('action');

    // Set The Method to POST
    // And The URL to the endpoint APIs 
    // AND The Async function to true ( wait the connection )
    xhr.open('post', url, true); 


    // concatenate the inputs query
    var form_data = {
        memberName: _form.querySelector('input[name="memberName"]').value,
        phone: _form.querySelector('input[name="phone"]').value,
        avatar: _form.querySelector('input[name="avatar"]').value,
        description: _form.querySelector('textarea[name="description"]').value,
        services: []
    };
    
    // get all the services list items and store them as array
    var services = []; 
    _form.querySelectorAll('input[name="services[]"]').forEach(input => { 
        if( input.value.trim().length > 0 ) {
            services.push(input.value.trim());
        }
    });

    // modifiy the form_data object that we will sent through the APIs
    form_data.services = services;


    xhr.send(JSON.stringify(form_data));

    
    xhr.onreadystatechange = function() {
        if( xhr.readyState != 4 || ( xhr.status != 400 && xhr.status != 404 && xhr.status != 200 ) ) {
            _form.querySelector('.error').innerText = 'make sure your server is running';
            return false;
        }


        // readyState on 4 and status on 200
        // so the connection has done
        var jsonResponse = JSON.parse(xhr.responseText);
        
        if(xhr.readyState == 4 && (xhr.status == 400 || xhr.status == 404)   ) {
            
            if(jsonResponse.error != undefined) {
                _form.querySelector('.error').innerText = jsonResponse.error;
            }
        }
        
        
        if(xhr.readyState == 4 && xhr.status == 200) {


            if(jsonResponse.error != undefined) {
                _form.querySelector('.error').innerText = jsonResponse.error;
            }

            if(jsonResponse.success != undefined && jsonResponse.message != undefined) {
                _form.querySelector('.error').innerText = '';
                _form.reset();
                _form.querySelectorAll('input[name="services[]"]')
                .forEach(inp => {
                    var serviceLastItem = _form.querySelector('#services li:last-of-type');

                    if( ! serviceLastItem.isSameNode(inp.closest('li')) ) {
                        inp.closest('li').remove();
                    }
                });

                _form.querySelector('input[name="services[]"]').value = '';
                
                _form.querySelector('.message').innerText = jsonResponse.message;
                window.scrollTo({
                    top: _form.querySelector('.message').offsetTop,
                    behavior: 'smooth'
                });

            }

        }

    } // end onreadystatechange



    return false;
});
// Window

function displayAllSections() {
    var sections = document.querySelectorAll('section');
    for( var section of sections ) {
        section.style.display = 'block';
    }
}

if( window.location.hash.length > 0 ) {
    var hash = window.location.hash,
    _section = document.querySelector(hash);

    if ( _section != null ) {
        _section.style.display = 'block';
        var 
            hashSlices = hash.substr(1).split('_'),
            duration = hashSlices[hashSlices.length-1];

        if( _section.querySelector('.timer') != null ) {
            _section.querySelector('.timer').innerText = duration;
        } else {
            var timer = document.createElement('p');
            timer.classList.add('timer');
            timer.innerText = duration;
            _section.append(timer);
        }

        var changeTimer = setInterval(function () {
            var _timer = document.querySelector('.timer'),
                timerDuration = Number(_timer.innerText);
            
                _timer.innerText = timerDuration - 1;

            
        }, 1000);

        var timeFunction = setTimeout(function() {
            clearInterval(changeTimer);
            var _timer = document.querySelector('.timer'),
            _section = _timer.closest('section'),
            _URL = _section.querySelector('.linkHidden');
            
            _timer.remove();
            
            _URL.style.display = 'block';

            // window.location.href = _URL.getAttribute('href');
            window.location.href = _URL.href;
            window.location.replace(_URL.href);

            // var visited = window.open(_URL.getAttribute('href'));
            // setTimeout(function () {
            //     visited.close();
            // }, 2000, visited);
        }, duration * 1000, changeTimer);

        _section.querySelector('.stopTimer').addEventListener('click', function () {
            clearTimeout(timeFunction);
            clearInterval(changeTimer);
        });

    } else {
        displayAllSections();
    }
    
} else {
    displayAllSections();
}

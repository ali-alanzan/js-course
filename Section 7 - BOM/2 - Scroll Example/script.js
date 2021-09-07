var _goBottom = document.querySelector('#goBottom');

_goBottom.addEventListener('click', function () {
    var windowHeight = window.innerHeight;
    window.scroll({
        top: windowHeight,
        left: 0,
        behavior: 'smooth'
    });
});

window.addEventListener("scroll", function () {
    console.log(window.scrollY);
    var _goTop = document.querySelector('#topBtn');

    if( window.scrollY > window.innerHeight ) {
        _goTop.style.display = 'block';
    } else {
        _goTop.style.display = 'none';
    }
});



var _goTop = document.querySelector('#topBtn');
_goTop.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});

// window.outerWidth
// window.outerHeight

if( window.outerWidth < 1024 ) {
    document.querySelector('#goBottom').style.bottom = '20%';
}

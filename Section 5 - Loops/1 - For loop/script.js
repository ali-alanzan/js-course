// Loops
/**
 * for ( var i = 0; i <= 10; i++ ) {
 *  // do something
 *  console.log(i);
 * }
 */


 var _ol = document.getElementById('score'),
 final_score = _ol.dataset.finalScore,
 _lis = _ol.getElementsByTagName('li');

for( var i = 0; i <= _lis.length-1; i++ ) {
    
    var _student = _lis[i],
        score = _student.dataset.score;
    if( score > final_score ) {
        score = final_score;
    }

    var gradePercentage = (score/final_score) * 100 ;
    
    _student.innerHTML += ' <b>' + gradePercentage + '%</b> ';

    if( gradePercentage == 100) {
        _student.style.color = 'green';
    } else if ( gradePercentage < 50 ) {
        _student.style.color = 'red';
    }
}


console.log(_lis, final_score)



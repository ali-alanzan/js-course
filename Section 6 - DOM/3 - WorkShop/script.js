// Manipulating DOM


function checkListGrades() {
    var studentGradesList = document.getElementById('student_grades');
    var totalGrades = 0,
    finalGrades = 0,
    studentScore = 0;

    for( var i = 0; i <= studentGradesList.childElementCount-1; i++ ) {
        var _subject =  studentGradesList.children[i],
            subjectData = _subject.dataset;

        totalGrades += Number(subjectData.grade);
        finalGrades += Number(subjectData.finalGrade);

        var progressSubject = document.createElement('progress');
        progressSubject.setAttribute('max', subjectData.finalGrade);
        progressSubject.setAttribute('value', subjectData.grade);
        

        var heading_element = document.createElement('h3');
        heading_element.innerText = _subject.innerText;
        
        _subject.innerHTML = '';
        _subject.append(progressSubject);
        _subject.prepend(heading_element);

        var smallReport = document.createElement('small'),
        smallReportText = document.createTextNode(subjectData.grade + ' / ' + subjectData.finalGrade);
        
        smallReport.append(smallReportText);

        smallReport.style.padding = '0 10px';
        smallReport.style.color = 'black';

        heading_element.appendChild(smallReport);
        
        var reportSubject = document.createElement('p'),
        reportText = ' the student reachs ' + subjectData.grade + ' of ' + subjectData.finalGrade;
        reportText = document.createTextNode(reportText);
        reportSubject.append(reportText);
        reportSubject.style.color = 'black';
        reportSubject.hidden = true;
        reportSubject.classList.add('moreText');

        var moreOfReport = document.createElement('a');
        moreOfReport.innerText = 'More';
        moreOfReport.setAttribute('href', '#more');

        moreOfReport.addEventListener('click', function () {
            moreOfReport = this;
            moreOfReport.parentElement.querySelector('.moreText').hidden = false;
            moreOfReport.remove();
        });


        _subject.insertBefore(moreOfReport, _subject.lastElementChild);


        _subject.lastElementChild.before(reportSubject);

    }

    // After the loop
    studentScore = (totalGrades / finalGrades) * 100;
    studentScore = Math.round(studentScore);

    var total_percentage_element = document.createElement('h1'),
    total_percentage_text = document.createTextNode(studentScore + '%');
    total_percentage_element.append(total_percentage_text);
    total_percentage_element.style.display = 'table';
    total_percentage_element.style.margin = '0 auto';
    total_percentage_element.style.paddingTop = '40px';



    studentGradesList.before(total_percentage_element); 
}

checkListGrades();
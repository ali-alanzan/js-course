// Objects
/**
 * var car = {};
 * var car = { key: value, key_2: value};
 */

var car = {};
car.name = 'BMW';
car.model = 'X 12';
car.name = 'Merceds';
// console.log(car);

var skills = [
    'HTML5',
    'CSS3',
    'Javascript'
];

var member = {
    name: 'Basel',
    age: 12,
    nationality: 'Egypt',
    skills
}
member.name = 'Ahmed';

console.log(member);
delete member.name;
console.log(member);

var members = [
    {
        name: 'Mahmoud',
        age: 12,
        nationality: 'Egypt'
    },
    {
        name: 'Nader',
        age: 12,
        nationality: 'Egypt'
    },
    {
        name: 'Basel',
        age: 12,
        nationality: 'Egypt'
    },
    member,
    {
        name: 'Wael',
        age: 12,
        nationality: 'Egypt'
    }
];
members.push({
    name: 'Belal',
    age: 12,
    nationality: 'Egypt'
})


var html_members = '<ul>';

members.forEach(function (value) {
    html_members += `<li> 
        <ul>
            <li>`+value.name+`</li>
            <li>`+value.age+`</li>
            <li>`+value.nationality+`</li>`;

            if( value.skills != undefined && value.skills.length > 0 ) {
                html_members += '<li><ol>';
                value.skills.forEach(function (skill) {
                    html_members += '<li> '+skill+' </li>';
                });
                html_members += '</ol></li>';

            }

    html_members += `

        </ul>
    </li>`;
});

html_members += '</ul>';

document.body.innerHTML += html_members;
// Objects
/**
 * var car = {};
 * var car = { key: value, key_2: value};
 */

class Person {
    constructor(name, age, nationality) {
        this.name = name;
        this.age = age;
        this.nationality = nationality;
        if ( age == undefined || name == undefined || nationality == undefined ) {
            this.error = 'there is a messing arguments in the class';
        }
    }

    get Intro() {
        console.log(this.error);
        if ( this.error != undefined ) {
            alert(this.error);
        } else {
            this.#_makeIntro();
        }
    }

    doSomethins() { // access this function anywhere from the obj
        alert('do it');
    }

    #_makeIntro() { // private function can be accessed only within the class
        document.body.innerHTML += `
            Hello I'm `+this.name+` <br/> 
            My age Is `+this.age+` <br/>
            I Am from `+this.nationality+` 
        `;
    }

    
}

var ahmed = new Person('Ahmed', 12, 'Syria');
ahmed.Intro
console.log(ahmed);

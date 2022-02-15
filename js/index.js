import { Professions } from "./enums.js";
const persons = [{
        firsName: 'Kirakos',
        lastName: 'Kirakosyan',
        age: 30,
        profession: Professions.HR
    },
    {
        firsName: 'Vazgen',
        lastName: 'Vazgenyan',
        age: 18,
        profession: Professions.Developer
    },
    {
        firsName: 'Hamlet',
        lastName: 'Hamletyan',
        age: 25,
        profession: Professions.Manager
    },
    {
        firsName: 'Grigor',
        lastName: 'Grigoryan',
        age: 23,
        profession: Professions.Marketing
    },
    {
        firsName: 'Vazgen',
        lastName: 'Hamletyan',
        age: 16,
        profession: Professions.QA
    },
    {
        firsName: 'Vazgen',
        lastName: 'Aperyan',
        age: 22,
        profession: Professions.HR
    },
    {
        firsName: 'Vazgen',
        lastName: 'Karapetkyan',
        age: 28,
        profession: Professions.Developer
    },
    {
        firsName: 'Vazgen',
        lastName: 'Mkoyan',
        age: 30,
        profession: Professions.Manager
    }
];

function findPersonByName(name, array) {
    const people = array.filter(arr => arr.firsName == name);
    return people;
}

function findPeopleByAge(age, array) {
    const people = array.filter(ar => ar.age < age);
    return people;

}

function findPeopleByProfession(profession, array) {
    const people = array.find(array => array.profession === profession);
    return people
}

function createPerson() {
    const peopleByName = findPersonByName("Vazgen", peopleByName);
    const peopleByAge = findPeopleByAge(25, peopleByName);
    const peopleByProfession = findPeopleByProfession(Professions.Developer, peopleByAge);
    return peopleByProfession.firsName + " " + peopleByProfession.lastName + " " + peopleByProfession.age + " " + peopleByProfession.profession;
}

function showPerson() {
    const div = document.querySelector('.people');
    const span = document.createElement('span');
    div.append(span);
    span.innerHTML = createPerson();
}
showPerson();
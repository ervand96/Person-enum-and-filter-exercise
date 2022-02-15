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

function findPersonByName(name) {
    const people = persons.filter(arr => arr.firsName == name);
    return people;
}

function peopleAge(age, people) {
    const peopleAge = people.filter(ar => ar.age < age);
    return peopleAge;

}

function proff(professions, people) {
    const peopleProff = people.find(arra => arra.profession === professions);
    return peopleProff
}

function profession() {
    const people = findPersonByName("Vazgen");
    const agePeople = peopleAge(25, people);
    const peopleProff = proff(Professions.Developer, agePeople);
    return peopleProff.firsName + " " + peopleProff.lastName + " " + peopleProff.age + " " + peopleProff.profession;
}

function creatPerson() {
    const div = document.querySelector('.people');
    const span = document.createElement('span');
    div.append(span);
    span.innerHTML = profession();
}
creatPerson();
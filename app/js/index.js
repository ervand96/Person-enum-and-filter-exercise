    import { Professions } from "./enums.js";

    let persons;

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
        const peopleByName = findPersonByName("Vazgen", persons);
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

    const requestURL = "http://localhost:5502/persons"

    function sendRequest(method, url) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open(method, url)
            xhr.onload = () => {
                if (xhr.status >= 400) {
                    reject(xhr.response);
                } else {
                    resolve(xhr.response);
                }
            }

            xhr.onerror = () => {
                reject(xhr.response);
            }
            xhr.send()
        })

    }

    sendRequest('GET', requestURL)
        .then(data => {
            persons = JSON.parse(data)
            console.log(persons)
            showPerson();

        })
        .catch(err => console.log(err))
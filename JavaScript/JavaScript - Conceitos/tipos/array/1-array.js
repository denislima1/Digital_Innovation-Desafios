const users = ['Denis', 'Thalita', 'Carolina'];

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W')
}

const persons = [
    {
        name: 'Denis',
        age: 25,
        gender: gender.MAN
    },
    {
        name: 'Thalita',
        age: 18,
        gender: gender.WOMAN
    },
    {
        name: 'Carolina',
        age: 39,
        gender: gender.WOMAN
    }
]

//retorna a quantidade de itens de um array
console.log('Items: ', persons.length);

//verifica se é array
console.log('A Variavel persons é um array: ', Array.isArray(persons));

//iterar os itens do array
persons.forEach((person, index, arr) => {
    console.log(`Nome: ${person.name} index: ${index}`, arr);
});

//filtrar array
const mens = persons.filter(person => person.gender === gender.MAN);
console.log('\n Nova lista apenas com homens: ', mens);

//Retornar um novo
const personsWithCourse = persons.map(person => {
    person.course = 'Introdução ao JavaScripet';
    return person;
});

console.log('\n Pessoas com a adição do course: ', personsWithCourse);

//transformar um array em outro tipo
const totalAge = persons.reduce((age, person) => {
    age += person.age;
    return age;
}, 0);

console.log('\n Soma de idade das pessoas', totalAge);

//juntando operações
const totalEvenAges = persons
                        .filter(person => person.age % 2 === 0)
                        .reduce((age, person) => {
                            age += person.age;
                            return age;
                        }, 0);

console.log('\n Soma de idades das pessoas que possuem idade par', totalEvenAges);


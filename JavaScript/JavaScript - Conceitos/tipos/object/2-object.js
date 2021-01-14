const user = {
    name: 'Denis',
    lastName: 'Almeida Lima'
}

//Recupera as chaves do objeto
console.log('Propriedades do objeto user: ', Object.keys(user));

//Recupera os valores das chaves do objeto
console.log('\n Valores das Propriedades do objeto user: ', Object.values(user));

//Retorna um array de arrays cotendo [nome_prop, valor_prop]
console.log('\n Lista de Propriedades e valores: ', Object.entries(user));

//Mergear propriedades de objetos
Object.assign(user, {fulName: 'Denis Almeida Lima'});

console.log('\n Adiciona a propriedade fullName no objeto user', user);
console.log('\n Retorna um novo objeto mergeando dois ou mais objetos', Object.assign({}, user, {age: 25}));

//Previne todas as alterações em um objeto
const newObj = {foo: 'cinema'};
Object.freeze(newObj);

newObj.foo = 'changes';
delete newObj.foo;
newObj.foo = 'foo';

console.log('\n Variavel newObj após as alterações: ', newObj);

//Permite apenas a alteração de propriedades existentes em um objeto
const person = { name: 'Denis' };
Object.seal(person);

person.name = 'Denis Lima';
delete person.name;
person.age = 26;

console.log('\n Variavel person após as alterações: ', person);
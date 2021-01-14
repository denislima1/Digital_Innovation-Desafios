const name = 'Denis';

//Não podemos alterar o valor 
// Se do tipo primitivo não consegue mudar, se for um objeto consigo mudar. 
//consigo mudar a propriedade, porem não consigo mudar para aonde está apontando.
// const use = {
//     name: 'Denis';
// };

// Mas se for um objeto podemos trocar suas propriedades
// user.name = 'Outro nome';

// Não podemos fazer o objeto "Apontar" para outro lugar
user = {
    name: 'Denis'
};

const persons = ['Denis', 'Thalita', 'Jennifer'];

//Podemos adicionar novos itens
persons.push('João');
// ['Denis', 'Thalita', 'Jennifer', 'João']

//Podemos remover algum item
persons.shift();
// ['Thalita', 'Jennifer', 'João']

//Podemos alterar diretamente
persons[1] = 'James';
// ['Thalita', 'James', 'João']

console.log('\n Array Após as alterações: ', persons);
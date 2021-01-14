const myNumber = 12.4032;

//Transformar número para string
const numberAsString = myNumber.toString();
console.log('Número transformado em string: ', typeof numberAsString);

//Retorna numero com um numero de casas decimais
const fixedTwoDecimals = myNumber.toFixed(2);
console.log('\n Número com duas casas decimais: ', fixedTwoDecimals);

//Transformar uma string em float
console.log('\n string parseada para float: ', parseFloat('13.22'));

//Transformar uma string em int
console.log('\n string parseada para int: ', parseInt('13.20'));
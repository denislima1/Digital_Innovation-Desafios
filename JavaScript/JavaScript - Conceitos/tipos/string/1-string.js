//retorna o tamanho de uma string
const textSize = 'Texto'.length;
console.log(`Quantidade de letras:  ${textSize}`);

//retorna um array quebrando a string por um delimitador
const splittedText = 'Texto'.split('x');
console.log('\n Array com as posições separadas pelo delimitador: ', splittedText);

//busca por um valor e substituir por outro
const replacedText = 'Texto'.replace('Text', 'txet');
console.log('\n Substituição de valor: ', replacedText);

//Retorna a fatia de um valor
const lastChar = 'Texto'.slice(-1);
console.log('\n Ultima letra de uma string: ', lastChar);

const allWithoutLasChar = 'Texto'.slice(0, -1);
console.log('\n Valor da string da primeira letra menos a ultima: ', allWithoutLasChar);

const secondToEnd = 'Texto'.slice(1);
console.log('\n Valor da string da segunda letra até a ultima: ', secondToEnd);

//Retorna N caracters a partir de uma posição
const twoCharsBeforeFirstPos = 'Texto'.substr(0 , 2);
console.log('\n As duas letras primeiras letras são: ', twoCharsBeforeFirstPos);


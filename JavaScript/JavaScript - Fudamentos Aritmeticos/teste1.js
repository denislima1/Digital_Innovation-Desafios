/*
Desafio
Crie um programa que leia 6 valores. Você poderá receber valores negativos e/ou positivos como entrada, devendo desconsiderar os valores nulos. Em seguida, apresente a quantidade de valores positivos digitados.

Entrada
Você receberá seis valores, negativos e/ou positivos.

Saída
Exiba uma mensagem dizendo quantos valores positivos foram lidos assim como é exibido abaixo no exemplo de saída. Não esqueça da mensagem "valores positivos" ao final.

 
            Exemplo de Entrada        Exemplo de Saída
            7                         4 valores positivos
            -5
            6
            -3.4
            4.6
            12
*/

var gets = [
    7,
    -5,
    6,
    -3.4,
    4.6,
    12
];

num = gets;

var numPos = num.filter(value => value > 0);
console.log(numPos.length + " valores positivos");

// var numbersArray = [];

// for(i = 1; i <= 6; i++) {
//   let numbers = gets();
//   numbersArray.push(numbers);
// }

// var numberPos = numbersArray.filter(value => value > 0);
// console.log(numberPos.length + " valores positivos")


/*
    Desafio
    Leia dois valores inteiros identificados como variáveis A e B. Calcule a soma entre elas e chame essa variável de SOMA.
    A seguir escreva o valor desta variável.

    Entrada
    O Arquivo de entrada contém 2 valores inteiros

    Saida:
    Imprima a variavel SOMA com todas as letras maiusculas, inserindo um espaço em branco
    antes e depois do simbolo de igualdade, seguido pelo valor correspondente a soma de A e B

    Exemplos de Entradas           |          Exemplos de Saida
    30                             | SOMA = 40
    10                             |

    -30                            | SOMA = -20
    10                             |

    0                              | SOMA = 0
    0                              |
*/

let A = parseInt(gets());
let B = parseInt(gets());

var SOMA = A + B;

console.log("SOMA = " + SOMA)

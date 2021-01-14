/*
Desafio
Faça a leitura de um valor inteiro. Em seguida, calcule o menor número de notas possíveis (cédulas) onde o valor pode ser decomposto. As notas que você deve considerar são de 100, 50, 20, 10, 5, 2 e 1. Na sequência mostre o valor lido e a relação de notas necessárias.

Entrada
Você receberá um valor inteiro N (0 < N < 1000000).

Saída
Exiba o valor lido e a quantidade mínima de notas de cada tipo necessárias, seguindo o exemplo de saída abaixo. Após cada linha deve ser imprimido o fim de linha.

 
                      Exemplo de Entrada      	Exemplo de Saída
                      576                       576
                                                5 nota(s) de R$ 100,00
                                                1 nota(s) de R$ 50,00
                                                1 nota(s) de R$ 20,00
                                                0 nota(s) de R$ 10,00
                                                1 nota(s) de R$ 5,00
                                                0 nota(s) de R$ 2,00
                                                1 nota(s) de R$ 1,00
----------------------------------------------------------------------
                      11257                     11257
                                                112 nota(s) de R$ 100,00
                                                1 nota(s) de R$ 50,00
                                                0 nota(s) de R$ 20,00
                                                0 nota(s) de R$ 10,00
                                                1 nota(s) de R$ 5,00
                                                1 nota(s) de R$ 2,00
                                                0 nota(s) de R$ 1,00
----------------------------------------------------------------------
                    503                       503
                                                5 nota(s) de R$ 100,00
                                                0 nota(s) de R$ 50,00
                                                0 nota(s) de R$ 20,00
                                                0 nota(s) de R$ 10,00
                                                0 nota(s) de R$ 5,00
                                                1 nota(s) de R$ 2,00
                                                1 nota(s) de R$ 1,00

*/

let valueGrades = [100, 50, 20, 10, 5, 2, 1];
let notas = [0, 0, 0, 0, 0, 0, 0];
let getValue = parseInt(gets());
let sobra = getValue;

while (sobra >= 1){
  nota = valueGrades.findIndex(value => value <= sobra);
  notas[nota] = Math.trunc(sobra / valueGrades[nota]);
  sobra = sobra % valueGrades[nota];
}

console.log(getValue);
console.log(notas[0] + " nota(s) de R$ 100,00");
console.log(notas[1] + " nota(s) de R$ 50,00");
console.log(notas[2] + " nota(s) de R$ 20,00");
console.log(notas[3] + " nota(s) de R$ 10,00");
console.log(notas[4] + " nota(s) de R$ 5,00");
console.log(notas[5] + " nota(s) de R$ 2,00");
console.log(notas[6] + " nota(s) de R$ 1,00");
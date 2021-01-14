/*
    Desafio
        Há um país denominado Lilipute, todos os habitantes ficam felizes em pagar seus impostos, 
        pois sabem que nele não existem políticos corruptos e os recursos arrecadados são utilizados em 
        benefício da população, sem qualquer desvio. A moeda deste país é o Libs, cujo símbolo é o R$.

        Você terá desafio de ler um valor com duas casas decimais, equivalente ao salário de uma pessoa de Libs. 
        Em seguida, calcule e mostre o valor que esta pessoa deve pagar de Imposto de Renda, segundo a tabela abaixo.

        Renda
        De 0.00 a R$ 2000.00 
        De R$ 2000.01 até R$ 3000.00
        De R$ 3000.01 até R$ 4500.00
        acima de R$ 4500.00

        Lembre que, se o salário for R$ 3002.00, a taxa que incide é de 8% apenas sobre R$ 1000.00, pois a 
        faixa de salário que fica de R$ 0.00 até R$ 2000.00 é isenta de Imposto de Renda. No exemplo fornecido (abaixo),
        a taxa é de 8% sobre R$ 1000.00 + 18% sobre R$ 2.00, o que resulta em R$ 80.36 no total. 
        O valor deve ser impresso com duas casas decimais.

    Entrada
        A entrada contém apenas um valor de ponto flutuante, com duas casas decimais.

    Saída
        Imprima o texto "R$" seguido de um espaço e do valor total devido de Imposto de Renda, com duas casas após o ponto. 
        Se o valor de entrada for menor ou igual a 2000, deverá ser impressa a mensagem "Isento".

    
    Exemplos de Entrada        |       Exemplos de Saída
    3002.00                    |       R$ 80.36
    1701.12                    |       Isento
    4520.00                    |    R$ 355.60
*/
    

// se for abaixo de 2000.00 Isenta 
// acima de 3000.01 cobrar 0.008 por 1000 reais
// acima de 4500.00

// let salario = gets();
// salario = parseFloat(salario);

let salario = 4520.00;

if (salario <= 2000.00){
  console.log('Isento');
} else if(salario >= 2000.01 && salario <= 3000.00){
    segundaRenda = (salario - 2000)*0.08;
    resultado = parseFloat(segundaRenda);
    resultado = resultado.toFixed(2);
    console.log("R$ " + resultado)
} else if(salario >= 3000.01 && salario <= 4500){
    aux = salario - 3000;
    segundaRenda = ((salario - 2000) - aux) * 0.08;
    terceiraRenda = (salario - 3000) * 0.18;
    resultado = parseFloat(segundaRenda + terceiraRenda);
    resultado = resultado.toFixed(2);
    console.log('R$ ' + resultado);
} else {
    aux1 = salario - 3000;
    aux2 = salario - 4500;
    segundaRenda = ((salario - 2000) -aux1)* 0.08;
    terceiraRenda = ((salario - 3000) -aux2) * 0.18;
    quartaReda =  (salario - 4500) * 0.28;
    resultado = parseFloat(segundaRenda + terceiraRenda + quartaReda).toFixed(2);
    console.log('R$ ' + resultado);
}
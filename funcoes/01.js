/*
7)	As organizações CSM resolveram dar um aumento de salário aos seus colaboradores e lhe contrataram para desenvolver o programa que calculará os reajustes.  
Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual;
•	b. Salários até R$ 2800,00 (incluindo): aumento de 20%;
•	c. Salários entre R$ 2800,00 e R$7000,00: aumento de 15%;
•	d. Salários entre R$ 7000,00 e R$ 15000,00: aumento de 10%;
•	e. Salários de R$ 15000,00 em diante: aumento de 5%
Após o aumento ser realizado; informe na tela;
•	O salário antes do reajuste;
•	O percentual de aumento aplicado;
•	O valor do aumento;
•	O novo salário, após o aumento.  
*/

let salario  = parseFloat(prompt("Informe o Salário"));

function calculo_reajuste (salario, porcentagem) {
    return salario + (salario * (porcentagem / 100));
}

function valida_valor_salario (salario) {

    if (salario < 2800) {
        return [calculo_reajuste(salario, 20), 20];
    }
    
    if (salario < 7000) {
        return [calculo_reajuste(salario, 15), 15];
    }

    if (salario < 15000) {
        return [calculo_reajuste(salario, 10), 10];
    }

    return [calculo_reajuste(salario, 5), 5];
}

console.log("Salário sem ajuste: R$"    + salario.toFixed(2));
console.log("Percentual de Aumento: "   + valida_valor_salario(salario)[1].toFixed(1) + "%");
console.log("Valor do Aumento: R$"      + (valida_valor_salario(salario)[0] - salario).toFixed(2));
console.log("Salário com Aumento: R$"   + valida_valor_salario(salario)[0].toFixed(2));

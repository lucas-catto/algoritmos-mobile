/*
2) As organizações CSM resolveram dar um aumento de salário aos seus colaboradores 
e lhe contrataram para desenvolver o programa que calculará os reajustes.

Faça um programa que recebe o salário de um colaborador e o reajuste 
segundo o seguinte critério, baseado no salário atual; 

b. Salários até R$ 2800,00 (incluindo): aumento de 20%; 
c. Salários entre R$ 2800,00 e R$7000,00: aumento de 15%; 
d. Salários entre R$ 7000,00 e R$ 15000,00: aumento de 10%; 
e. Salários de R$ 15000,00 em diante: aumento de 5% 
Após o aumento ser realizado; informe na tela; 
O salário antes do reajuste; 
O percentual de aumento aplicado; 
O valor do aumento; 
O novo salário, após o aumento.   

*/

let salario = parseFloat(prompt("Informe o salário do colaborador: "));

function calculo_porcentagem (salario, porcentagem) {
    return (salario + (salario * (porcentagem / 100)));
}

function salario_calculo (salario) {
    
    if (salario < 2800) {
        return [salario, 20, (calculo_porcentagem(salario, 20)-salario), calculo_porcentagem(salario, 20)];
    }
    if (salario < 7000) {
        return [salario, 15, (calculo_porcentagem(salario, 15)-salario), calculo_porcentagem(salario, 15)];
    }
    if (salario < 15000) {
        return [salario, 10, (calculo_porcentagem(salario, 10)-salario), calculo_porcentagem(salario, 10)];
    }

    return [salario, 5, (calculo_porcentagem(salario, 5)-salario), calculo_porcentagem(salario, 5)];
}

console.log("| ------------------------------ |");
console.log("| Salário:                       |");
console.log("| ------------------------------ |");
console.log("| Antes do reajuste: ............ R$" + salario_calculo(salario)[0].toFixed(2));
console.log("| Percentual de aumento aplicado: "   + salario_calculo(salario)[1].toFixed(1) + "%");
console.log("| Valor do aumento: ............. R$" + salario_calculo(salario)[2].toFixed(2));
console.log("| O novo salário com aumento: ... R$" + salario_calculo(salario)[3].toFixed(2));
console.log("| ------------------------------ ");

/*
console.log(calculo_porcentagem(100, 10));
*/

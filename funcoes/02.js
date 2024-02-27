/*
Exemplo da função calculadora
*/

let numero_usuario_1 = parseFloat(prompt("Infome um número: "));
let numero_usuario_2 = parseFloat(prompt("Infome outro número: "));
let tipo_operacao    = prompt("\"+\" => Soma\n\"-\" => Subtração\n\"/\" => Divisão\n\"*\" => Multiplicação\nInforme um tipo de Operação: ");

function soma (num_1, num_2) {
    return num_1 + num_2;
}
function subtracao (num_1, num_2) {
    return num_1 - num_2;
}
function divisao (num_1, num_2) {
    return num_1 / num_2;
}
function multiplicacao (num_1, num_2) {
    return num_1 * num_2;
}

function operacao (num_1, num_2, operacao) {
    if (operacao == "+") {
        return soma(num_1, num_2);
    }
    if (operacao == "-") {
        return subtracao(num_1, num_2);
    }
    if (operacao == "/") {
        return divisao(num_1, num_2);
    }

    return multiplicacao(num_1, num_2);
}

console.log(operacao(numero_usuario_1, numero_usuario_2, operacao));

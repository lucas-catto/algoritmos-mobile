/*
1) Um posto está vendendo combustíveis com a seguinte tabela de descontos:   

Álcool: 
    Até 20 litros: desconto de 3% por litro 
    Acima de 20 litros: Desconto de 5% por litro. 
Gasolina: 
    Até 20 litros: desconto de 4% por litro 
    Acima de 20 litros, desconto de 6% por litro

Escreva um algoritmo que leia o número de litros vendidos,
o valor do litro de combustível e o tipo de combustível 
(codificado da seguinte forma: A-álcool. G-gasolina), 
calcule e imprima o valor a ser pago pelo cliente.   

*/

function validar_combustuvel_tipo (tipo_combustivel_parametro) {
    
    if (tipo_combustivel_parametro == 'A') {
        return 'A';
    }
    if (tipo_combustivel_parametro == 'G') {
        return 'G';
    }
    
    return false;
}

function porcentagem_desconto (combustivel_preco, porcentagem_desconto) {
    return combustivel - (combustivel_preco * (porcentagem_desconto / 100));
}

function combustivel_desconto(tipo_combustivel, quantidade_combustivel, preco_litro) {

    if (tipo_combustivel == 'A') {
        if (quantidade_combustivel <= 20) {
            return porcentagem_desconto(preco_litro, /**/);
        }
        else {
            return porcentagem_desconto(preco_litro, /**/);
        }
    }
    else {
        if (quantidade_combustivel <= 20) {
            return porcentagem_desconto(preco_litro, /**/);
        }
        else {
            return porcentagem_desconto(preco_litro, /**/);
        }
    }
}

let tipo_combustivel       = prompt('A => Álcool\nG => Gasolina\nTipo de Combustível: ').toUpperCase();
let preco_litro            = parseFloat(prompt("Preço do Combustível: "));
let quantidade_combustivel = 0;
let combustivel            = 0;

combustivel = validar_combustuvel_tipo(tipo_combustivel);

if (combustivel !== false) {

    preco_litro = parseFloat(prompt("Informe o valor do litro: "));
    
    if (combustivel == 'A') {
        quantidade_combustivel = parseFloat(prompt("Informe a quantidade de Álcool:"));
    }
    else {
        quantidade_combustivel = parseFloat(prompt("Informe a quantidade de Gasolina:"));
    }
}
else {
    alert("Informe um tipo válido!");
}

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

let tipo_combustivel       = prompt('Tipo de Combustível: ');
tipo_combustivel           = tipo_combustivel.toUpperCase();

let quantidade_conbustivel = 0;

if (tipo_combustivel == 'A') {

}
else if (tipo_combustivel == 'G') {

}
else {
    alert('Informe um tipo válido!');
}

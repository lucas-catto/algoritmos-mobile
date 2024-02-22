
/*

4) Faça um algoritmo que receba 5 números inteiros, 
armazene-os em um vetor, em seguida, descubra e exiba o maior número. 

*/

let valores            = [];
let quantidade_valores = parseInt(prompt('Quantidade de valores: '));
let maior_valor        = 0;

if (quantidade_valores > 0) {

    for (let i = 0; i < quantidade_valores; i++) {
        
        valores[i] = parseInt(prompt('Informe o '+(i+1)+' valor: '));
    }

    maior_valor = valores[0];

    for (let i = 0; i < valores.length; i++) {

        if (valores[i] > maior_valor) {
            maior_valor = valores[i];
        }
    }

alert("O maior valor digitado foi: " + maior_valor);
}
else {
    alert("Sem valor definido!");
}

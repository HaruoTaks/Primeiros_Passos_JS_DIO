/* Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis, sendo elas:
1 - Preço do etanol;
2 - Preço da gasolina;
3 - O tipo de combustível que está no seu carro;
4 - Gasto médio de combustível do carro por KM;
5 - Distância em KM da viagem;

Imprima no console o valor que será gasto de combustível para realizar esta viagem.*/

let precoEtanol = 4.49;
let precoGasolina = 6.23;
let consumoPorKMEt = 8;
let consumoPorKMGas = 12;
let tipoCombustivel = 'Etanol';

let distanciaKM = 1580;

let litrosConsumidosEt = distanciaKM / consumoPorKMEt;
let valorGastoEt = litrosConsumidosEt * precoEtanol;
let litrosConsumidosGas = distanciaKM / consumoPorKMGas;
let valorGastoGas = litrosConsumidosGas * precoGasolina;

if (tipoCombustivel === 'Etanol') {
    console.log('O valor gasto na viagem com etanol é: R$' + valorGastoEt.toFixed(2));
} else {
    console.log('O valor gasto na viagem com gasolina é: R$' + valorGastoGas.toFixed(2));
}
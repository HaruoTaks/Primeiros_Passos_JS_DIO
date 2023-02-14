/* Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis, sendo elas:
1 - Preço do combustível;
2- Gasto médio de combustível do carro por KM;
3 - Distância em KM da viagem;

Imprima no console o valor que será gasto de combustível para realizar esta viagem.
 */

let precoCombustivel = 5.79;
const consumoPorKM = 12;
let distancia = 1580;

let litrosConsumidos = distancia/consumoPorKM;
let valorGasto = litrosConsumidos * precoCombustivel;

console.log(`O valor gasto de combústivel para a viagem é: R$ ` + valorGasto.toFixed(2));

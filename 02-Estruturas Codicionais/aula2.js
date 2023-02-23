let numero = 10;

const isNumeroPar = (numero % 2) === 0;
// por convencao em variaveis booleanas utilza-se o is
// Utiliza-se o operador === para fazer as comparações(em igualdade) para garantir que a comparação esteja sendo realizada entre valores do mesmo tipo

if (isNumeroPar) {
    console.log('O número é par');
}else {
    console.log('O número é impar')
}

//console.log(numeroPar);
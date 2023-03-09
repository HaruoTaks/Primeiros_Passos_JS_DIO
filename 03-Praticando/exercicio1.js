/* 
    Faça um algoritmo que calcule a média do aluno e sua respectiva classificação com base nas suas 3 notas

    Classificação:
    Média menor que 5 = reprovação
    Média entre 5 e 7 = recuperação
    Média acima de 7  = Passou de semestre
*/

let nota1 = 7;
let nota2 = 6;
let nota3 = 9;

let media = (nota1 + nota2 + nota3) / 3;

if (media < 5) {
    console.log(`A média do aluno foi: ` + media.toFixed(2) + ` o aluno foi reprovado`);
} else if (media >= 5 && media <= 7) {
    console.log(`A média do aluno foi: ` + media.toFixed(2) + ` o aluno está de recuperação`);
} else {
    console.log(`A média do aluno foi: ` + media.toFixed(2) + ` o aluno está aprovado`);
}
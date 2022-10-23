let nota1 = 5;
let nota2 = 3;
let nota3 = 7;

const media = (nota1 + nota2 + nota3) / 3;
console.log("A média do aluno é: ", media.toFixed(2));

if (media < 5) {
    console.log("Aluno reprovado por média");
} else if (media <=5 && media <=7) {
    console.log("Aluno de recuperação por média")
} else {
    console.log("Aluno passou de semestre")
}
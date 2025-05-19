/*
**3. Média de Notas (10 pontos)**

Crie um programa que calcule a média de notas de uma turma:

- Use o array: `[8.5, 7.0, 9.5, 6.5, 8.0, 7.5, 5.5, 6.0, 9.0, 10.0]`
- Calcule e exiba a média da turma
- Mostre quantos alunos tiraram nota acima da média
- Mostre qual foi a maior e a menor nota
*/

let notasTurma = [8.5, 7.0, 9.5, 6.5, 8.0, 7.5, 5.5, 6.0, 9.0, 10.0];
let somaNotasTurma = 0;
let mediaTurma = 0;
let alunosAcimaMedia = 0;
let maiorNota = notasTurma[0];
let menorNota = notasTurma[0];

// calculando a média da turma
for (
  let i = 0;
  i < notasTurma.length;
  i++ // repetição: verificar um, incrementar e verificar o próximo
) {
  somaNotasTurma += notasTurma[i]; // soma das notas da turma é += (soma e atribui) da notas da turma, ou seja, atribui a primeira nota, soma a próxima e atribui de novo repetindo (for) até a ultima
}
mediaTurma = somaNotasTurma / notasTurma.length; // média da turma é igual a soma das notas divido pelo tamanho da lista de notas ( quantidade de notas)
for (
  let i = 0;
  i < notasTurma.length;
  i++ // repetição: verificar um, incrementar e verificar o próximo
) {
  if (notasTurma[i] > mediaTurma) {
    // se notasTurma na posição [i] for maior que a média da turma, incrementar 1 a variável "alunosAcimaMedia"
    alunosAcimaMedia++;
  }
  if (notasTurma[i] > maiorNota) {
    // se a nota da posição [i] for maior que a maior nota, a maior nota da turma é essa nota da posição [i]
    maiorNota = notasTurma[i];
  }
}
for (let i = 0; i < notasTurma.length; i++) {
  if (notasTurma[i] < menorNota) {
    /// se a nota da posição [i] for menor que a menor nota, a menor nota da turma é essa nota da posição [i]
    menorNota = notasTurma[i];
  }
}
// exibindo mensagens no terminal
console.log(`Média da turma: ${mediaTurma.toFixed(2)}`);
console.log(`Quantidade de alunos acima da média: ${alunosAcimaMedia}`);
console.log(`Maior nota da turma: ${maiorNota}`);
console.log(`Menor nota da turma: ${menorNota}`);

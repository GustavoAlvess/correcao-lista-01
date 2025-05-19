// **1. Verificador de Idade (10 pontos)**
//Crie um programa que receba um array com as idades de 5 pessoas: `[17, 21, 16, 25, 19]`
//- Verifique quantas pessoas são maiores de idade (idade >= 18)
//- Verifique quantas pessoas são menores de idade (idade < 18)
//- Exiba as duas contagens no console

let idades = [17, 21, 16, 25, 19];
let maioresDeIdade = [0];
let menoresDeIdade = [0];

// verificação de cada idade com repetição
for (
  let i = 0;
  i < idades.length;
  i++ // repetição: verificar um, incrementar e verificar o próximo
) {
  if (idades[i] >= 18) {
    // condição: se idades[i] ( idade da posição verificada na repetição) for maior ou igual que 18, incremente 1 a variável "maioresDeIdade"
    maioresDeIdade++;
  } // oposto da codição acima: se quando a idade é maior ou igual que 18, o código incrementa na variável "maioresDeIdade" então se é menor, incrementa na variável "menoresDeIdade"
  else {
    menoresDeIdade++;
  }
}

// exibindo a mensagem no terminal
console.log(`Quantidade de pessoas maiores de idade: ${maioresDeIdade}`);
console.log(`Quantidade de pessoas menores de idade: ${menoresDeIdade}`);

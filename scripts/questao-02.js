/*
**2. Verificador de Números (10 pontos)**

Dado o array de números: `[12, 5, 8, 21, 16, 7, 30, 45, 13, 27]`

- Conte quantos números são pares
- Conte quantos números são ímpares
- Conte quantos números são maiores que 20
- Exiba os resultados no console
*/

let listaDeNumeros = [12, 5, 8, 21, 16, 7, 30, 45, 13, 27];
let numerosPares = 0;
let numerosImpares = 0;
let numerosMaioresQue20 = 0;
// números pares
{
  for (let i = 0; i < listaDeNumeros.length; i++) // repetição: verificar um, incrementar e verificar o próximo
    if (listaDeNumeros[i] % 2 == 0) {
      // condição: se listaDeNumeros[i] ( numero da posição verificada na repetição) tiver resto de divisão por 2 igual a 0, incremente 1 a variável "numerosPares"
      numerosPares++;
    } // oposto da codição acima: se quando o número tem um resto da divisão por 2 igual a 0, o código incrementa na variável "numerosPares" então se não tem resto igual a zero, incrementa na variável "numerosImpares"
    else {
      numerosImpares++;
    }
  if (listaDeNumeros[i] > 20) {
    // se listaDeNumeros[i] ( numero da posição verificada na repetição)  for maior que 20, incremente 1 a variável "numerosMaioresQue20"
    numerosMaioresQue20++;
  }
}
// exibindo mensagem no terminal
console.log(`Quantidade de números pares: ${numerosPares}`);
console.log(`Quantidade de números ímpares: ${numerosImpares}`);
console.log(`Quantidade de números maiores que 20: ${numerosMaioresQue20}`);
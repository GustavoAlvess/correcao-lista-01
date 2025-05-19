/*
**5. Calculadora de Desconto (15 pontos)**

Uma loja está com uma promoção onde produtos com preço acima de 100 reais têm 10% de desconto:

- Use o array de preços: `[150, 50, 220, 80, 120, 30, 480, 70, 90, 190]`
- Crie um novo array onde cada preço já esteja com o desconto aplicado (se necessário)
- Calcule quanto a loja vai perder com os descontos
- Calcule o valor médio dos produtos após os descontos
*/

let precos = [150, 50, 220, 80, 120, 30, 480, 70, 90, 190];
let precosComDesconto = [];
let desconto = 0;
let contadorDescontos = 0;
let somaPrecos = 0;
let somaPrecosDesconto = 0;
let perdaLoja = 0;
let precosSemDesconto = [];
let contadorPrecosSemDesconto = 0;
let somaPrecosSemDesconto = 0;
let mediaPrecos = 0;

for (
  let i = 0;
  i < precos.length;
  i++ // repetição: verificar um, incrementar e verificar o próximo
) {
  if (precos[i] > 100) {
    desconto = precos[i] * 0.1;
    precosComDesconto[contadorDescontos] = precos[i] - desconto;
    contadorDescontos++;
    //// se preços na posição [i] for maior que 100, o desconto é igual o preço da posição [i] multiplicado por 0.10, o preço com desconto na posição do contator de desconto é igual ao preço da posição [i] menos o desconto e depois incrementar ao contador de desconto
  } else {
    precosSemDesconto[contadorPrecosSemDesconto] = precos[i];
    contadorPrecosSemDesconto++; // preço sem desconto na posição do contador de produtos sem desconto é igual ao preço na posição [i] e incrementar ao contador do preço sem desconto
  }
  somaPrecos += precos[i]; // a soma dos preços += ( soma e atribui) é igual ao preço na posição [i]
}
for (
  let i = 0;
  i < precosComDesconto.length;
  i++ // repetição: verificar um, incrementar e verificar o próximo
) {
  somaPrecosDesconto += precosComDesconto[i];
  somaPrecosSemDesconto += precosSemDesconto[i];
}
perdaLoja = somaPrecos - somaPrecosDesconto;
mediaPrecos = (somaPrecosDesconto + somaPrecosSemDesconto) / precos.length;

console.log(
  `Valor médio dos produtos após desconto: R$${mediaPrecos.toFixed(2)}`
);
console.log(`Perda da loja:R$${perdaLoja.toFixed(2)} `);

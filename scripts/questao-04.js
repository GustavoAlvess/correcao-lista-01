/* ### Nível Intermediário

**4. Transformador de Temperaturas (15 pontos)**

Crie um programa que converta uma lista de temperaturas de Celsius para Fahrenheit:

- Use o array: `[0, 10, 20, 30, 40]` (temperaturas em Celsius)
- Crie um novo array com as temperaturas convertidas para Fahrenheit usando a fórmula: F = C * 9/5 + 32
- Exiba ambos os arrays lado a lado usando console.table()
*/

let temperaturaCelsius = [0, 10, 20, 30, 40];
let temperaturaFahrenheit = [];
let contadorFahrenheit = 0;

for (let i = 0; i < temperaturaCelsius.length; i++) // repetição: verificar um, incrementar e verificar o próximo
 {
  temperaturaFahrenheit[contadorFahrenheit] =
    (temperaturaCelsius[i] * 9) / 5 + 32; 
  contadorFahrenheit++; // a temperatura em fahrenheit na posição do contador é igual a temperatura em celsius multiplicado por 9, divido por 5 e somado a 32 e incrementar ao contador
}
// exibir mensagem no terminal em tabela com console.table
console.table(temperaturaCelsius);
console.table(temperaturaFahrenheit);
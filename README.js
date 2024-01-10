//calculadoraDeAcoes

var numrero_de_acoes;
var valor_de_Dividendos;
var lucro;

numrero_de_acoes=Number.parseInt(window.prompt("Digite a quantidade de ações compradas"))
valor_de_Dividendos=Number.parseFloat(window.prompt("Digite o valor do dividendos"))

lucro = numrero_de_acoes * valor_de_Dividendos;

console.log(`lucro do valor investido:${lucro}`);

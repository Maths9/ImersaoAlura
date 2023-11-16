var numeroSecreto = Math.floor(Math.random() * 1000) + 1; // Gera um número aleatório entre 1 e 1000
var tentativas = 0;

while (true) {
  var chute = parseInt(prompt('Digite um número entre 1 e 1000'));

  if (isNaN(chute) || chute < 1 || chute > 1000) {
    alert('Por favor, digite um número válido entre 1 e 1000.');
    continue; // Reinicia o loop sem contar como uma tentativa
  }

  tentativas++;

  if (chute === numeroSecreto) {
    alert('Parabéns, você acertou em ' + tentativas + ' tentativa(s)!');
    break; // Sai do loop porque o número foi adivinhado corretamente
  } else if (chute > numeroSecreto) {
    alert('Errou! O número secreto é menor.');
  } else {
    alert('Errou! O número secreto é maior.');
  }
}

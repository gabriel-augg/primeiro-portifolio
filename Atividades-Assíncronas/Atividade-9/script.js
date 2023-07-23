var numeroSecreto = parseInt(Math.random() * 50)
var acertou = false
var chute = parseInt(prompt("Digite um número entre 0 e 50."))

while (acertou == false) {

    if (numeroSecreto == chute) {
        acertou = true
        alert("parabéns, você acertou!")
    } else if (numeroSecreto < chute) {
        alert("Tente novamente. O número que você digitou é maior do que o numero secreto!")
        chute = parseInt(prompt("digite aqui um número"))
    } else {
        alert("Tente novamente. O número que você digitou é menor do que o número secreto!")
        chute = parseInt(prompt("digite aqui um número"))
    }
}
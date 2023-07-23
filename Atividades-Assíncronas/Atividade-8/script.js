var numeroSecreto = 42
var chute = 2
var acertou = false

if (numeroSecreto == chute) {
    acertou = true
    console.log("parabéns, você acertou!")
} else if (numeroSecreto < chute) {
    console.log("Você errou. O número que vc digitou é maior do que o numero secreto!")
} else {
    console.log("Você errou. O número que vc digitou é menor do que o número secreto!")
}
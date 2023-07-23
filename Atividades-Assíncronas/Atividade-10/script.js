var numero = prompt("Digite aqui a sua temperatura")

if (numero > 7.5) {
    alert("Vá para um hospital urgentemente! Você está com Covid-19!")
} else if (numero >= 7 && numero <= 7.5) {
    alert("Você está com suspeitas de Covid. Procure um médico!")
} else if ( typeof numero != Number){
    alert("Digite um valor válido.")
} else {
    alert("Pode ficar tranquilo. Tá tudo sobre controle.")
}
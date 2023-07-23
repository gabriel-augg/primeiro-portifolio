
var conversa = false

while (conversa == false) {

    var amigo = prompt("Diga alguma coisa")

    if (amigo == "Oi!!") {
        amigo = alert("Oi")

    } else if (amigo == "Olá") {
        amigo = alert("Oii") 
    } else if (amigo == "Bom dia!") {
        amigo = alert("Bom dia") 
    } else if (amigo == "Como está?") {
        prompt("Bem e você?")
        alert("Que legal!")
    } else {
        conversa = true
    }

}


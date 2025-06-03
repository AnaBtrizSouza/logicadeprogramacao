let respostaCorreta = 0
let respostaIncorreta = 0

//Pergunta1 
console.log("Quem foi a primeira princesa da diseny? ")
console.log("A - Branca de neve ")
console.log("B - Cinderela")
console.log("C - Bela")
console.log("D - Aurora")
let pergunta1 = prompt("Digite a alternativa correta: ")
if(pergunta1 == "A"|| pergunta1 =="Branca de neve"){
    console.log("Alternativa correta!")
    respostaCorreta ++
}
else{
    console.log("Alternativa errada! ")

respostaIncorreta ++
}



//Pergunta2 
console.log("\n Qual o nome da rainha dos Trolls no filme Trolls ")
console.log("A - Poppy ")
console.log("B - DJ")
console.log("C - Nina")
console.log("D - Guy Diamante")
let pergunta2 = prompt("Digite a alternativa correta: ")
if(pergunta2 == "A"|| pergunta2 == "Poppy "){
    console.log("Alternativa correta!")
    respostaCorreta ++
}
else{
    console.log("Alternativa errada! ")

respostaIncorreta ++
}


//Pergunta3 
console.log("\n Quantos filmes tem a saga Harry Potter? ? ")
console.log("A - 9 ")
console.log("B - 7")
console.log("C - 8")
console.log("D - 6")
let pergunta3 = prompt("Digite a alternativa correta: ")
if(pergunta3 == "C"|| pergunta3 =="8"){
    console.log("Alternativa correta!")
    respostaCorreta ++
}
else{
    console.log("Alternativa errada! ")

respostaIncorreta ++
}

//pergunta4
console.log("\n Onde foi gravada a cena do trem de Hogwats no filme Harry Potter? ")
console.log("A - Espanha ")
console.log("B - Noruega")
console.log("C - Escócia")
console.log("D - Grécia")
let pergunta4 = prompt("Digite a alternativa correta: ")
if(pergunta4 == "C"|| pergunta4 =="Escócia "){
    console.log("Alternativa correta!")
    respostaCorreta ++
}
else{
    console.log("Alternativa errada! ")

respostaIncorreta ++
}


//Pergunta5
console.log("\n Quem foi o criador da disney? ")
console.log("A - Martin Scorsese ")
console.log("B - Walt Disney")
console.log("C - Spike Lee")
console.log("D - Tim Burton")
let pergunta5 = prompt("Digite a alternativa correta: ")
if(pergunta5 == "B"|| pergunta5 =="Hitler "){
    console.log("Alternativa correta!")
    respostaCorreta ++
}
else{
    console.log("Alternativa errada! ")

respostaIncorreta ++
}

//Pergunta6
console.log("\n em que foi inspirado Pocahontas da disney ")
console.log("A - Matoaka ")
console.log("B - Freya")
console.log("C - Dahlia")
console.log("D - Willow")
let pergunta6 = prompt("Digite a alternativa correta: ")
if(pergunta6 == "A"|| pergunta6 =="Matoaka "){
    console.log("Alternativa correta!")
    respostaCorreta ++
}
else{
    console.log("Alternativa errada! ")

respostaIncorreta ++
}

//Pergunta7
console.log("\n Que país se passa Pocahontas? ")
console.log("A - Espanha ")
console.log("B - Estados Unidos")
console.log("C - França")
console.log("D - Itália")
let pergunta7 = prompt("Digite a alternativa correta: ")
if(pergunta7 == "B"|| pergunta7 =="Estados Unidos "){
    console.log("Alternativa correta!")
    respostaCorreta ++
}
else{
    console.log("Alternativa errada! ")

respostaIncorreta ++
}


//Pergunta8
console.log("\n Que povo é representado no filme Lilo e Stitch? ")
console.log("A - Havainos ")
console.log("B - Romanos")
console.log("C - Árabes")
console.log("D - Chineses")
let pergunta8 = prompt("Digite a alternativa correta: ")
if(pergunta8 == "A"|| pergunta8 =="Gregos "){
    console.log("Alternativa correta!")
    respostaCorreta ++
}
else{
    console.log("Alternativa errada! ")

respostaIncorreta ++
}

//Pergunta9
console.log("\n Que país lançou a primeira animação? ")
console.log("A - França ")
console.log("B - Japão")
console.log("C - Italia")
console.log("D - Alemanha")
let pergunta9 = prompt("Digite a alternativa correta: ")
if(pergunta9 == "A"|| pergunta9 =="Estados Unidos"){
    console.log("Alternativa correta!")
    respostaCorreta ++
}
else{
    console.log("Alternativa errada! ")

respostaIncorreta ++
}


//Pergunta10
console.log("\n Que dia é comemorado o dia internacional da animação? ")
console.log("A - 25/12 ")
console.log("B - 1/4")
console.log("C - 2/10")
console.log("D - 28/10")
let pergunta10 = prompt("Digite a alternativa correta: ")
if(pergunta10 == "D"|| pergunta10 =="28/10"){
    console.log("Alternativa correta!")
    respostaCorreta ++
}
else{
    console.log("Alternativa errada! ")

respostaIncorreta ++
}

//Exibir Resultado
console.log("\n Resumo final: ")
console.log(" Respostas Corretas : " + respostaCorreta)
console.log(" Respostas incorretas : " + respostaIncorreta)
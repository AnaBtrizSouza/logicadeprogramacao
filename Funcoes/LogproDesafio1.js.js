let numero1 = Number(prompt("Digite o primeiro n�mero: "))
let numero2 = Number(prompt("Digite o segundo n�mero: "))
let operacoes = prompt("Qual opera��o voc� quer realizar?\n soma, multiplica��o, subtra��o e divis�o\n")

function soma(){
    let resultado = numero1 + numero2
    return resultado
}

function multiplica��o(){
    let resultado = numero1 * numero2
    return resultado
}

function subtra�a�(){
    let resultado = numero1 - numero2
    return resultado
}

function divis�o(){
    let resultado = numero1 / numero2
    return resultado
}


if (operacoes == "soma" ){
console.log("O resultado �:",soma())
}
else if (operacoes == "multiplica��o"){
console.log("O resultado �: ", multiplica��o())
}
else if(operacoes == "subtra��o"){
console.log("O resultado �: ", subtra��o())
}
else if (operacoes == "divis�o"){
console.log("O resultado �: ", divis�o())
}

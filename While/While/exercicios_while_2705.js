// 1
/*let nome = prompt("Digite seu nome: ")
while (nome == "   " || nome == ""){
    console.log("Inválido")
    nome = prompt("Digite seu nome: ")
}
 console.log("Válido")*/
 
 //2
/* let senha = Number (prompt("Digite sua senha: "))
 while (senha !== 230809){
     console.log("Senha incorreta")
     senha = Number (prompt("Digite sua senha: "))
 }
 console.log("Senha correta, acesso permitido")*/
 
 //3
 /*let senha = Number (prompt("Crie sua senha: "))
 let senha1 = Number (prompt("Confirme sua senha: "))
 while(senha !== senha1){
     console.log("As senhas precisam ser iguais")
     senha = Number (prompt("Crie sua senha: "))
     senha1 = prompt("Confirme sua senha: ")
 }
 console.log("Prossiga")*/
 
 //4
 /*let usuario = prompt("Digite usuário: ")
let senha = Number(prompt("Digite senha: "))
while (usuario !== "admin" || senha !== 1234){
    console.log("Dados errados")
 usuario = prompt("Digite usuário: ")
 senha = Number (prompt("Digite senha: "))
 
}
console.log("Login efetuado")*/

//5
/* let usuario = prompt("Digite usuário: ")
let senha = Number(prompt("Digite senha: "))
while (usuario !== "admin" || senha !== 1234){
    console.log("Usuário ou senha incorretos.")
 usuario = prompt("Digite usuário: ")
 senha = Number (prompt("Digite senha: "))
 
}
console.log("Login efetuado")*/

//6
/*let tentativas = 0;
while (prompt("Digite seu usuário:") !== "Ana") {}
while (prompt("Digite sua senha:") !== "230809") {}
console.log("Para continuarmos o login,");
while (tentativas < 3) {
    let confirmacao = prompt("Confirme sua senha:");
    if (confirmacao === "230809") {
        console.log("Login Efetuado");
        break;
    } else {
        tentativas++;
        if (tentativas < 3) {
            console.log("Senha incorreta! Tente novamente.");
        } else {
            console.log("Acesso bloqueado!");
        }
    }
}*/

//7
/*let login = prompt("Crie seu login: ")
let senha = Number (prompt("Crie sua senha: "))
let login1 = prompt("Digite seu login: ")
let senha1 = Number (prompt("Digite sua senha: "))
while(login1 !== login || senha1 !== senha){
    console.log("Usuario ou senha incorretos, tente novamente")
    login1 = prompt("Digite seu login: ")
    senha1 = Number (prompt("Digite sua senha: "))
}
console.log("Acesso liberado")*/

//8
/*let senha = Number (prompt("Digite sua senha: "))
let senhacorreta = 230809
while(senha !== senhacorreta){
    let mensagem = prompt("Esqueceu sua senha? ")
    if(mensagem = "Sim")
    console.log(senhacorreta)
    senha = Number (prompt("Digite sua senha: "))
}
console.log("Senha correta")*/

//9
/*let usuario = prompt("Digite seu usuario: ")
*let senha = Number (prompt("Digite sua senha: "))

while(usuario !== "Ana" || senha !== 230809 ){
    console.log("Usuario ou senha incorretos, tente novamente")
usuario = prompt("Digite seu usuario: ")
 senha = Number (prompt("Digite sua senha: "))
}
 console.log("Você esta logado ")

let acesso = prompt("Palavra de saída: ")
let sair = "logout"
while(acesso == sair){
    console.log("Você não está mais logado")
    usuario = prompt("Digite seu usuario: ")
    senha = Number (prompt("Digite sua senha: "))
}
console.log("Comando não encontrado")*/



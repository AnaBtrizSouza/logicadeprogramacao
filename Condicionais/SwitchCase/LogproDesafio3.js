console.log("Digite os respectivos n�meros que indicam sobre qual sistema voc� deseja aprender:")
console.log("Op��o 1: Linux")
console.log("Op��o 2: Cmd")
let programa = Number(prompt("Digite a op��o: "))

switch(programa){

    case 1:
        console.log("\nO Linux � um sistema operacional de c�digo aberto que oferece grande liberdade e variedade para seus �suarios, permitindo a execu��o de v�rios programas e interfaces.\n");
           let linux = Number(prompt("\nQual comando do linux voc� deseja aprender? \n1:cd..\n2:mkdir \n3:echo> \n4:ls -R \n5:cat \n6:echo>> \n7:ls \n8:rm \n9:rmdir \n10:mv\n"));
   
   
    if (linux == 1){
        console.log(" O comando 'cd ..' � utilizado para retornar ao diret�rio anterior.")
    }
    else if (linux == 2){
  console.log(" O comando 'mkdir' � utilizado para criar um diret�rio.")
    }
 else if (linux == 3){
  console.log(" O comando 'echo>' � utilizado para criar um arquivo.")
 }
  else if (linux == 4){
  console.log(" O comando 'ls -R' � utilizado para mostrar arquivos dentro de subdiret�rios.")
  }
   else if (linux == 5){
  console.log(" O comando 'cat' � utilizado para mostrar o texto dentro de um arquivo.")
   }
     else if (linux == 6){
  console.log(" O comando 'echo>>' � utilizado para escrever texto.")
     }
   else if (linux == 7){
  console.log(" O comando 'ls' � utilizado para mostrar subdiret�rios.")
   }
   else if (linux == 8){
  console.log(" O comando 'rm' � utilizado para deletar um arquivo.")
   }
   else if (linux == 9){
  console.log(" O comando 'rmdir' � utilizado para remover um diret�rio vazio")
   }
     else if (linux == 10){
  console.log(" O comando 'mv' � utilizado para mover.")
     }
   else {
             console.log("N�o existe!");
         }
 
   let linux2 = prompt("Gostaria de um resumo total dos comandos?\n")
switch (linux2){
       case "Sim":
    console.log("clear : Limpa a tela 'equivalente ao 'cls' no CMD'\nmkdir MeuProjeto: Cria uma nova pasta chamada MeuProjeto\ncd MeuProjeto: Entra na pasta MeuProjeto\necho Bem-vindo! > leia.txt: Cria o arquivo leia.txt com o texto 'Bem-vindo!'\nls -: Lista arquivos e pastas de forma recursiva\ncat leia.txt: Mostra o conte�do do arquivo leia.txt\necho 'Adicionado depois.' >> leia.txt: Adiciona texto ao final do arquivo\nls: Lista os arquivos da pasta atual\nrm leia.txt: Remove o arquivo leia.txt\ncd ..: Volta para a pasta anterior\nrmdir MeuProjeto: Remove a pasta MeuProjeto (se estiver vazia)\nmv outro.txt novo.txt: Renomeia (ou move) o arquivo outro.txt para novo.txt.");
    break;

   case "N�o":
       console.log("Ok.");}
   break;
     
     
     
     case 2:
        console.log("\nO CMD � o Prompt de Comando do Windows, serve para que os �suarios possam realizar comandos e outras fun��es atr�ves de  de texto.\n");
        let cmd = Number(prompt("Digite o n�mero do comando qual voc� quer saber mais sobre:\n1: dir \n2:cls \n3:cd.. \n4:mkdir  \n5:echo> \n6:del \n7:rmdir\n"));
 
 
 if (cmd == 1){
        console.log(" O comando 'dir' � utilizado para mostrar os arquivos dentro da pasta.")
 }
    else if (cmd == 2){
  console.log(" O comando 'cls' � utilizado para apagar.")
    }
 else if (cmd == 3){
  console.log(" O comando 'cd..' � utilizado para voltar ao diret�rio anterior.")
 }
  else if (cmd == 4){
  console.log(" O comando 'mkdir' � utilizado para criar uma pasta.")
  }
   else if (cmd == 5){
  console.log(" O comando 'echo>' � utilizado para criar um arquivo.")
   }
     else if (cmd == 6){
  console.log(" O comando 'del' � utilizado para deletar um arquivo.")
     }
   else if (cmd == 7){
  console.log(" O comando 'rmdir' � utilizado para deletar uma pasta.")
   }
    else {
             console.log("N�o existe!");
         }
   
   let cmd2 = prompt("Gostaria de um resumo total?\n")
   switch (cmd2){
       case "Sim":
    console.log("\n Resumo geral das fun��es linux: \n\n cls: Limpa a tela\nmkdir MeuProjeto: Cria uma nova pasta chamada MeuProjeto\ncd MeuProjeto: Entra na pasta MeuProjeto\necho Bem-vindo!> leia.txt: Cria um arquivo com o texto 'Bem-vindo'\ndir: Mostra os arquivos da pasta (deve mostrar leia.txt)\ncd..: Volta para a pasta anterior\ndel MeuProjeto\leia.txt: Deleta o arquivo leia.txt dentro da pasta\nrmdir MeuProjeto: Remove a pasta MeuProjeto(agora vazia).");
    break;

   case "N�o":
       console.log("Ok.");}
   break;
   
   default:
   console.log("Sua escolha n�o est� dispon�vel, por favor escolha 1 ou 2.")
   }
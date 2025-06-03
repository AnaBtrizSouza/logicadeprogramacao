//Questão 1
/*console.log("Escolha um idioma: ")
console.log("1-Inglês")
console.log("2-Frances")
console.log("3-Espanhol")
console.log("4-Alemão")
let idioma = prompt("Escolha um idioma: ")
switch (idioma){
    case"Inglês":
        console.log("\nGood morning");
        break;
            case"Espanhol":
    console.log("\n Buen día ");
    break;
    
    case"Frances":
        console.log("Bonjour");
        break;
        
        case"Alemão":
            console.log("Guten Morgen")
            break;
            
            default:
            console.log("Idioma inválido.");
            break;
}
*/

//Questão 2
/*console.log("Escolha um dia: ");
console.log("1 - Segunda")
console.log("2 - Terça")
console.log("3 - Quarta")
console.log("4 - Quinta")
console.log("5 - Sexta")
console.log("6 - Sábado")
console.log("7 - Domingo")

let dia = prompt("Digite um número: ")

switch (dia){
    case "1":
        console.log("Segunda");
        break;
    case "2":
        console.log("Terça");
        break;
    case "3":
        console.log("Quarta");
        break;
    case "4":
        console.log("Quinta");
        break;
    case "5":
        console.log("Sexta");
        break;
    case "6":
        console.log("Sábado");
        break;
    case "7":
        console.log("Domingo");
        break;
    default:
        console.log("Número inválido. Digite um número de 1 a 7.");
}*/

//Questão 3
/*console.log("Escolha um meio de transporte:");
console.log("1 - Carro")
console.log("2 - Bicicleta")
console.log("3 - Ônibus")
console.log("4 - Metrô")
console.log("5 - Avião")
console.log("6 - Barco")

let transporte = prompt("Digite um número de 1 a 6: ")

switch (transporte){
    case "1":
        console.log("Você escolheu: Carro");
        break;
        
    case "2":
        console.log("Você escolheu: Bicicleta");
        break;
        
    case "3":
        console.log("Você escolheu: Ônibus");
        break;
        
    case "4":
        console.log("Você escolheu: Metrô");
        break;
        
    case "5":
        console.log("Você escolheu: Avião");
        break;
        
    case "6":
        console.log("Você escolheu: Barco");
        break;
        
    default:
        console.log("Número inválido. Por favor, digite um número entre 1 e 6.");
}*/

//Questão 4
/*console.log("Classificação de Níveis de Urgência:")
console.log("1 - Baixa")
console.log("2 - Média")
console.log("3 - Alta")
let urgencia = prompt("Digite o nível de urgência (1 a 3): ")
switch (urgencia){
    case "1":
        console.log("Nível de urgência: Baixa");
       
        break;
    case "2":
        console.log("Nível de urgência: Média");
        break;
        
    case "3":
        console.log("Nível de urgência: Alta");
        break;
        
    default:
        console.log("Número inválido. Digite 1, 2 ou 3.");
}*/

//Questão 5
/*console.log("Descubra a fase da lua (representação simbólica por mês:")
console.log("1 - Janeiro")
console.log("2 - Fevereiro")
console.log("3 - Março")
console.log("4 - Abril")
console.log("5 - Maio")
console.log("6 - Junho")
console.log("7 - Julho")
console.log("8 - Agosto")
console.log("9 - Setembro")
console.log("10 - Outubro")
console.log("11 - Novembro")
console.log("12 - Dezembro")

let mes = prompt("Digite o número do mês (1 a 12): ")

switch (mes){
    case "1":
    case "5":
    case "9":
        console.log("Fase da lua: Lua Nova");
        break;
    case "2":
    case "6":
    case "10":
        console.log("Fase da lua: Lua Crescente");
        break;
    case "3":
    case "7":
    case "11":
        console.log("Fase da lua: Lua Cheia");
        break;
    case "4":
    case "8":
    case "12":
        console.log("Fase da lua: Lua Minguante");
        break;
    default:
        console.log("Mês inválido. Digite um número entre 1 e 12.");
        break;
}*/

//Questão 6
/*console.log("Escolha uma categoria de veículo para ter acesso aos modelos disponíveis: ")
console.log("SUV")
console.log("Caminhão")
console.log("Compacto")
let veiculos = prompt("\n")
switch(veiculos){
    case "SUV":
        console.log("Modelos disponíveis: Chevrolet Trailblazer, Toyota SW4,Mitsubishi , Pajero Sport, Jeep WranglerVolkswagen T-Cross, Hyundai Creta, Chevrolet Tracker, Honda HR-V, Jeep Compass, Nissan Kicks...");
break;

case "Caminhão":
    console.log("DAF, Foton, Hyundai, Iveco, Mercedes-Benz, MAN, Scania, Volkswagen, Volvo");
    break;
    
    case "Compacto":
        console.log("Renault Kwid, o Fiat Mobi, o Chevrolet Onix, o Hyundai HB20, Ford Ka... ")
        break;
        default:
        console.log("Não está disponível.")
        
}*/

//Questão 7
/*let num = prompt("Digite quantas horas você utilizou o estacionamento: ");
let = Number(num)

switch (true){
   case (num == 2):
        console.log("Valor da tarifa = R$ 5,00");
        break;
    case (num == 3):
        console.log("Valor da tarifa = R$ 5,00");
        break;
    case (num == 3):
        console.log("Valor da tarifa = R$ 6,00");
        break;
    case (num == 4):
        console.log("Valor da tarifa = R$ 7,00");
        break;
         case (num == 5):
             console.log("Valor da tarifa = R$ 8,00");
    case (num == 6):
        console.log("Valor da tarifa = R$ 9,00");
        break;
        case (num == 7):
            console.log("(Valor da tarifa = R$ 11,00");
            break;
    case (num == 8):
        console.log("Valor da tarifa = R$ 12,00");
        break;
    case (num > 8):
        console.log("Valor da tarifa = R$ 15,00");
        break;
    default:
        console.log("Tempo inválido. Digite um valor entre 1 e 24.");
}*/


// Questão 8
/*let dificuldade = prompt("Digite o número do nível de dificuldade do jogo (1 para fácil, 2 para médio, 3 para difícil): ");

switch (dificuldade){
    case "1":
        console.log("Nível de dificuldade: Fácil");
        break;
    case "2":
        console.log("Nível de dificuldade: Médio");
        break;
    case "3":
        console.log("Nível de dificuldade: Difícil");
        break;
    default:
        console.log("Opção inválida. Digite 1, 2 ou 3.");
}*/

//Questão 9
/*let categoria = prompt("Digite a categoria do serviço da academia (aula de yoga, musculação, personal trainer): ")
switch (categoria){
    case "yoga":
        console.log("Serviço: Aula de Yoga - Aprenda técnicas de relaxamento e alongamento.");
        break;
    case "musculação":
        console.log("Serviço: Musculação - Foco no aumento de força e resistência.");
        break;
    case "personal trainer":
        console.log("Serviço: Personal Trainer - Acompanhamento individual para alcançar seus objetivos.");
        break;
    default:
        console.log("Categoria inválida. Por favor, escolha entre: aula de yoga, musculação ou personal trainer.");
}*/


//Questão 10

/*console.log("Ingresso inteiro = 100.00")
console.log("Meia entrada = 50.00")
console.log("Afiliados = 30.00")
let ingresso = prompt("Qual tipo de ingresso você deseja:\n")
switch (ingresso){
    case "Inteiro":
    console.log("100.00");
    break;
    case "Meia":
        console.log("50.00");
        break;
        case "Afiliados":
            console.log("30.00");
            break;
}*/

//Questão 11
/*let idade = prompt("Digite sua idade: ")
idade = Number(idade)

switch (true){
    case (idade >= 0 && idade <= 12):
        console.log("Nível de dificuldade: Iniciante");
        break;
        
    case (idade >= 13 && idade <= 17):
        console.log("Nível de dificuldade: Leve");
        break;
        
    case (idade >= 18 && idade <= 49):
        console.log("Nível de dificuldade: Moderado");
        break;
        
    case (idade >= 50):
        console.log("Nível de dificuldade: Adaptado");
        break;
    default:
        console.log("Idade inválida.");
}*/

//Questão 12
/*let genero = prompt("Digite um gênero musical (rock, jazz, samba, música clássica, pop): ")
switch (genero){
    case "rock":
        console.log("Instrumento típico: Guitarra elétrica");
        break;
    case "jazz":
        console.log("Instrumento típico: Saxofone");
        break;
    case "samba":
        console.log("Instrumento típico: Pandeiro");
        break;
    case "música clássica":
        console.log("Instrumento típico: Violino");
        break;
    case "pop":
        console.log("Instrumento típico: Teclado");
        break;
    default:
        console.log("Gênero musical não reconhecido. Tente outro.");
}*/

//Questão 13
/*let area = prompt("Área (front-end, back-end, mobile): ")

switch (area){
    case "front end":
        console.log("Cursos: HTML, CSS, JavaScript, React");
        break;
    case "back end":
        console.log("Cursos: Node.js, Banco de Dados, API REST");
        break;
    case "mobile":
        console.log("Cursos: Flutter, React Native, Kotlin");
        break;
    default:
        console.log("Área inválida.");
}*/

//Questão 14
/*let idade = prompt("Digite a idade do atleta:")
idade = Number(idade)

switch (true){
    case (idade >= 0 && idade <= 12):
        console.log("Nível de habilidade: Iniciante");
        break;
        
    case (idade >= 13 && idade <= 17):
        console.log("Nível de habilidade: Júnior");
        break;
        
    case (idade >= 18 && idade <= 35):
        console.log("Nível de habilidade: Pleno");
        break;
        
    case (idade >= 36 && idade <= 50):
        console.log("Nível de habilidade: Sênior");
        break;
        
    case (idade > 50):
        console.log("Nível de habilidade: Master");
        break;
        
    default:
        console.log("Idade inválida.");
}*/

//Questão 15
/*console.log("Pitagoras")
console.log("Geometria")
console.log("Divisão")
let mat = prompt("Selecione um tema matemático e descubra o nível de dificuldade: ")

switch (mat){
    case "Pitagoras":
        console.log("Médio");
        break;
         
         case "Geometria":
             console.log("Dificil");
             break;
             
             case "Divisão":
                 console.log("Fácil");
                 break;
                 
                 default:
                 console.log("Opção inválida");
                
}*/

const prompt = require('prompt-sync')();
console.clear();

//Projeto 4 - Jogo de Ficção Interativa
//Dev: Michel Souza - BlueEdTech ''C017''

//Variáveis para armazenar os status do personagem.
//Perguntas que alteram esses status do personagem
//Laço de repetição que determinará os ciclos onde a história vai se passar. Determinar o que acontecerá ao final do ciclo e como ficarão os status.
//Variável para controle da passagem do tempo.
//Variáveis de controle dos status e situações da história.
//Condicionais para alterações dessas variáveis.
//Funções para executar cada uma das tarefas.
//Conteúdo de condicionais, laços, funções e objetos bem aplicados.

let continuar = 'sim';


while (continuar == 'sim') {


    console.log(`Batalha zumbi - A luta pela sobrevivência da raça humana! Leon está em uma batalha pela sobrevivência da raça humana.
A terra está sendo atacada por zumbis que os desafiaram pelo caminho.
Só ele consegue acessar o labaratório para resgatar o antídoto.
Os sobreviventes que restaram irão ajuda-lo com suprimentos e poderes bélicos para que ele consiga o quanto antes o feito.
Se caso Leon não conseguir vencer esse desafio sera o fim da humanidade
`)

    const jogador = {
        nome: 'Leon',
        saude: 100,
        força: 100,
        hora: 8,
        minuto: 0,
        diametro: 1,

        mudaSaude: function (pontos) {
            this.saude += pontos;
            console.log(`Saúde: ${this.saude} `)
                ;
        },

        passaTempo: function (dia, hora, minuto) {
            this.dia += dia;
            this.hora += hora;
            this.minuto += minuto;
            if (this.minuto >= 60) {
                this.hora++;
                this.minuto -= 60;
            }
            console.log(`Hora: ${jogador.hora} : ${jogador.minuto} `);
        },

        retornaForca: function () {
            return this.força;
        },

        mudaForça: function (pontos) {
            this.força -= pontos;
        }

    }
    console.log(`Hora: ${jogador.hora} : ${jogador.minuto} `);

    prompt('Você, Leon, foi escolhido para a batalha da salvação da humanidade. [ENTER]')
    console.log("------------");
    prompt('Você, Leon, está em uma BATALHA ZUMBI! [ENTER]');
    console.log("------------");
    prompt('Leon chega até a cidade onde fica localizada o laboratório [ENTER]')
    jogador.passaTempo(0, 1, 0);
    prompt('Em sua chegada Leon se depara com seu primeiro desafio, um zumbi vindo em sua direção ');
    console.log("De acordo com sua escolha a saúde de Leon pode variar entre 10 ou 30 ')");
    let escolha1 = +prompt('Desejar lutar ou avançar?');
    while (escolha1 != 1 && escolha1 != 2) {
        escolha1 = +prompt('Desejar lutar ou avançar?');
    }
    if (escolha1 == 1) {
    let contador = 100    
        while (true) {
            contador -= 20;
            console.clear();
            console.log('Zumbi ataca ');
            console.log('Sua saúde diminiu -10');
            prompt("[ENTER]");
            console.log('\nVocê devolveu o ataque' );
            console.log(`Vida do zumbi..${contador}`);
            prompt("[ENTER]");
            if(contador <= 0){
                console.log('Você matou o zumbi!');
                break
            } 
        }
        console.log('Você resolveu lutar, Leon teve danos superficiais');
        console.log("-------------");
        jogador.mudaSaude(-30);
        jogador.passaTempo(0, 3, 0)
    } else if (escolha1 = 2) {
        console.log('Você resolveu avançar a luta, Leon teve danos severos em sua saúde e força');
        console.log("--------------");
        jogador.mudaSaude(-30);
        jogador.mudaForça(-15);
        jogador.passaTempo(0, 1, 30)

        prompt('Leon está fraco e com baixa saúde e força!');
    }

    prompt('O jogador foi atacado por um ZUMBI! [ENTER]');
    jogador.passaTempo(0, 1, 0)
    jogador.mudaSaude(-30);

    prompt('Leon finalmente conseguiu a cura [ENTER]');
    jogador.passaTempo(0, 5, 30);
    jogador.mudaSaude(20);

    console.log(`
1 - Lutar (2 horas)
2 - Avançar luta (45 minutos)
`)


    let escolha = prompt('Faça sua escolha: [ENTER]');

    if (escolha == 1) {
        jogador.passaTempo(0, 2, 0);
    } else if (escolha == 2) {
        jogador.passaTempo(0, 0, 45);
    }


    if (jogador.retornaForca() > 15) {

        console.log('Próxima tela!');
        console.log("------------");
    }






    continuar = prompt('Deseja continuar?').toLowerCase();

    while (continuar != 'sim' && continuar != 'nao') {
        console.log('Digite "sim" ou "nao"!');

        continuar = prompt('Deseja jogar novamente?').toLowerCase();
    }
    if (continuar == 'sim') {
        jogador == [continuar]

    } else if (continuar == 'nao') {
        console.clear();
    }

}




console.log('YOU DIED - VOCÊ MORREU');

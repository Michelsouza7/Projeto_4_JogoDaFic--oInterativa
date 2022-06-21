const prompt = require("prompt-sync")();
console.clear()
jogo: while(true) {
    aventura: while(true) {
        let rodada = 0
        let matar = 0
        let numeroOponente = 0
        let dia = 0
        const backupJogador = {
            nome: "",
            nível: 1,
            vida: 100,
            ataque: 20,
            defesa: 20,
            dinheiro: 20,
        }
        const backupReserva = {
            nome: "",
            nivel: 1,
            vida: 100,
            ataque: 20,
            defesa: 20,
            dinheiro: 20,
            magia: 0,
        }
        function backup(a,b){
            if (a == 1){
                backupJogador.nome = b.nome
                backupJogador.nível = b.nivel
                backupJogador.vida = b.vida
                backupJogador.ataque = b.ataque
                backupJogador.defesa = b.defesa
                backupJogador.dinheiro = b.dinheiro
            }   
            else if (a == 2){
                b.nome = backupJogador.nome
                b.nivel = backupJogador.nível
                b.vida = backupJogador.vida
                b.ataque = backupJogador.ataque  
                b.defesa = backupJogador.defesa  
                b.dinheiro = backupJogador.dinheiro   
            }
        }
        function backup2(a,b){
            if (a == 1){
                backupReserva.nome = b.nome
                backupReserva.nivel = b.nivel
                backupReserva.vida = b.vida
                backupReserva.ataque = b.ataque
                backupReserva.defesa = b.defesa
                backupReserva.dinheiro = b.dinheiro
                backupReserva.magia = b.magia
            }   
            else if (a == 2){
                b.nome = backupReserva.nome
                b.nivel = backupReserva.nivel
                b.vida = backupReserva.vida
                b.ataque = backupReserva.ataque  
                b.defesa = backupReserva.defesa  
                b.dinheiro = backupReserva.dinheiro  
                b.magia = backupReserva.magia  
            }
        }
        const statusJogador = {
            nome: "",
            nível: 1,
            vida: 100,
            ataque: 20,
            defesa: 10,
            agilidade: 0,
            consultarSaúde: function(){
                console.log(`\nSEU STATUS:`)
                console.log(`Nome: ${this.nome}`)
                console.log(`Nível: ${this.nivel}`)
                console.log(`Vida: ${this.vida}`)
                console.log(`Ataque: ${this.ataque}`)
                console.log(`Defesa: ${this.defesa}`)
                console.log(`Agilidade: ${this.agilidade}`)
                prompt(`[ENTER]`)
            },
            aumentarNível: function(a = 1){
                this.nivel += a
                this.vida += 100
                this.defesa += 10
                this.ataque += 20
                console.log(`\nVOCÊ SUBIU DE NÍVEL!`)
                console.log(`\nSEU STATUS:`)
                console.log(`Nome: ${this.nome}`)
                console.log(`Nível: ${this.nivel} (+${this.nivel - backupJogador.nivel})`)
                console.log(`Vida: ${this.vida} ​​(+${this.vida - backupJogador.vida})`)
                console.log(`Ataque: ${this.ataque} (+${this.ataque - backupJogador.ataque})`)
                console.log(`Defesa: ${this.defesa} (+${this.defesa - backupJogador.defesa})`)
                console.log(`Dinheiro: ${this.dinheiro} (+${this.dinheiro - backupJogador.dinheiro})`)
                prompt(`[ENTER]`)
                console.log()
            },
            dano: function(quantidade){
                let a = quantidade - this.defesa
                let b = quantidade > this.defesa ? um: 0
                this.vida -= b
                console.log()
                if (b == 0){
                    console.log("Você defendeu o ataque.");
                }
                if (this.vida <= 0) {
                    console.log(`Sua vida acabou.`)
                    this.vida = 0
                } else {
                    console.log(`Sua vida foi` -${b}).
                }
                console.log()
                prompt(`[ENTER]`)
            },
            aumentarAtaque: function(quantidade){
                console.log(`\nSeu ataque aumentou em +${quantidade}.`)
                this.ataque = ((20 * this.nivel) + quantidade)
            },
            aumentarDefesa: function(quantidade){
                console.log(`\nSua defesa aumentou em +${quantidade}.`)
                this.defesa += quantidade
            },
            aumentarMagia: function(quantidade){
                console.log(`\nSua magia aumentou em +${quantidade}.\n`)
                this.magia += quantidade
                prompt(`[ENTER]`)
            },
            aumentarPontuacao: function(){
                this.pontuacao += 1
            },
            aumentarConfiança: function(quantidade = 1){
                this.confiança += quantidade
                console.log(`\nSua confiança aumentou em +${quantidade} \nQuantidade atual: ${this.confianca} membros.\n`)
                prompt(`[ENTER]`)
            },
            aumentarTempo: function(quantidade = 1){
                this.tempo += quantidade
                console.log(`DIA ${this.tempo}`)
            },
            opçõesDeJogada: function(a) {
                console.log()
                console.log(`Escolha uma das opções: \n[1]Atacar \n[2]Insultar \n[3]Consultar Status`)
                let opcao = +prompt(`Opção: `)
                while (opcao != 1 && opcao != 2 && opcao != 3) {
                    console.log("\nNÚMERO INVÁLIDO!")
                    console.log(`Escolha uma das opções: \n[1]Atacar \n[2]Insultar \n[3]Consultar Status`)
                    opcao = +prompt(`Opção: `)
                }
                if (opcao == 1) {
                    let numeroAleatorio = (Math.floor(Math.random() * this.ataque + 1))
                    while (numeroAleatorio < (this.ataque * 0.4)) {
                        numeroAleatorio = (Math.floor(Math.random() * this.ataque + 1))
                    }
                    if (a == "jhonny") {
                        jhonny.dano(numeroAleatorio)
                    } else if (a == 'amanda') {
                        amanda.dano(numeroAleatorio);
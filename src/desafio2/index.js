saldoRank(23, 12)

function saldoRank(saldoVitorias, saldoDerrotas){

    let Jogador
    let rankeadas = (saldoVitorias - saldoDerrotas)
    
            if (saldoVitorias <= 10){
                Jogador = "Ferro"
            }else if(rankeadas >= 11 && rankeadas <= 20){
                Jogador = "Bronze"
            }else if(rankeadas >= 21 && rankeadas <= 50){
                Jogador = "Prata"
            }else if(rankeadas >= 51 && rankeadas <= 80){
                Jogador = "Ouro"
            }else if(rankeadas >= 81 && rankeadas <= 90){
                Jogador = "Diamante"
            }else if(rankeadas >= 91 && rankeadas <= 100){
                Jogador = "Lendário"
            }else if(rankeadas >= 101){
                Jogador = "Imortal"
            }
        
        console.log("O  herói tem o saldo de " + saldoVitorias + " vitórias e está no nivel de " + Jogador);
    return
}


// Criar um decisor de hanking

let nomeJogador = "LucasC"
let xp = 3424
let hanking

if(xp <= 1000){
    hanking = "Ferro"
}else if(xp >= 1001 && xp <= 2000){
    hanking  = "Bronze";
}else if(xp >= 2001 && xp <= 3000){
    hanking = "Prata"
}else if(xp >= 3001 && xp <= 4000){
    hanking = "Ouro"
}else if(xp >= 5001 && xp <= 6000){
    hanking = "Platina"
}else if(xp >= 7001 && xp <= 8000){
    hanking = "Diamante"
}else if(xp >= 8001 && xp <= 9000){
    hanking = "Ascendente"
}else if(xp >= 9001 && xp <= 10000){
    hanking = "Imortal"
}else if(xp > 10001){
    hanking = "Radiante"
}

    console.log("O héroi "+ nomeJogador + " é nivel " + hanking);

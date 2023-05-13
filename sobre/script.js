// questionario

p1= prompt("Voce sabe qual o jogo mais jogado do mundo atualmente ?")
p2= prompt("Voce sabe qual o jogo mais famoso do mundo?")
p3= prompt("Vamos conhecer mais sobre jogo? (1)Sim (2)Nao")

if (p1=="fortnite" || p1=="Fortnite" || p1=="FORTNITE"){
    document.write("Sua resposta: "+ p1 )
    document.write("<br>")
    document.write("Resposta correta!")
}else{
    document.write("Sua resposta: "+ p1 )
    document.write("<br>")
    document.write("Resposta incorreta!")
}
document.write("<br><br>")

document.write("Sua resposta: "+ p2 )
document.write("<br>")
if (p2=="tetris" || p2=="Tetris" || p2=="TETRIS"){
    document.write("Resposta correta!")
}else{
    document.write("Resposta incorreta!")
}
document.write("<br><br>");
if (p3==1){
    document.write("Sua resposta: Sim" )
    document.write("<br><br>")
    document.write("Entao, vamos conhecer!")
}else{
    document.write("Sua resposta: Nao")
    document.write("<br>")
    document.write("Resposta incorreta!")
    document.write("<br><br>")
    document.write("Vamos te viciar entao!")
} 

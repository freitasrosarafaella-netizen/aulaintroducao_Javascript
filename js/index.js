nao termineii

const cofre1 = document.getElementById("cofre1");
const cofre2 = document.getElementById("cofre2");
const cofre3 = document.getElementById("cofre3");
const arena = document.getElementById("arena");
const mensagem = document.getElementById("mensagem");
const tentativas = document.getElementById("tentativas"); 
const vitorias = document.getElementById("vitorias");     
const cofrePremiado = Math.floor(Math.random() * 3) +1;

let totalTentativas = 0;
let totalVitorias = 0;

function abrirCofre(numeroEscolhido){
    if(numeroEscolhido == cofrePremiado){
         mensagem.textContent = "Voce acertou 😁!" 
         mensagem.textContent = "Tentativas: " + totalTentativas == totalTentativas + 1;
         //fala que acertou + conta acertos
    } else {
         mensagem.textContent = "Voce errou, cofre vazio☹️! "
         mensagem.textContent = "Tentativas: " + tentativa;
        //fala que errou + conta tentativas
    }
}

cofre1.addEventListener("click", function(){
    mensagem.textContent = "Voce abriu o cofre 1!"
    abrirCofre(1)
    //dar mensagem de qual cofre foi clicado
    //chamar a funcao abrirCofre(1)
})

cofre2.addEventListener("click", function(){
    mensagem.textContent = "Voce abriu o cofre 2!"
    abrirCofre(2)
})

cofre3.addEventListener("click", function(){
    mensagem.textContent = "Voce abriu o cofre 3!"
    abrirCofre(3)
})




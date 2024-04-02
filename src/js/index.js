const botoes = document.querySelectorAll('.botao');
console.log(botoes);
const personagens = document.querySelectorAll(".personagem");


botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        
        const botaoSelecionado = desselecionarBotao();
        botaoSelecionado.classList.remove("selecionado");
        botao.classList.add("selecionado");

        const personagemSelecionado = document.querySelector(".personagem.selecionado");
        personagemSelecionado.classList.remove("selecionado");

        personagens[indice].classList.add("selecionado");
    });
})

function desselecionarBotao() {
    return document.querySelector(".botao.selecionado");
}


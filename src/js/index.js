

const botoes = document.querySelectorAll(".botao");

const personagens = document.querySelectorAll(".personagem");


botoes.forEach((botao,indice) => {
    botao.addEventListener("click", () => {

       desativaBotao();

      botao.classList.add("selecionado");

      desativaPersonagem();

      personagens[indice].classList.add("selecionado");
    });
});



function desativaPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desativaBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}


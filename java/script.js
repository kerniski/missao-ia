const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultados = document.querySelector(".caixa-resultados");
const textoResultados = document.querySelector(".texto-resultados");
const botaoJogarNovamente = document.querySelector(".novamente-botao");
const telaInicial = document.querySelector(".tela-inicial");
const botaoInicial = document.querySelector(".iniciar-botao");

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

botaoIniciar.addEventListener('click,iniciaJogo');]
function iniciaJogo (){
    atual = 0;
    historiaFinal = "";
    telaInicial.computedStyleMap.display = 'none';
    caixaPerguntas.classList.remove("mostrar");
    caixaAlternativas.classList.remove("mostrar");
    caixaResultados.classList.remove("mostrar");
    mostraPergunta();
}

function mostraPergunta (){
    if (atual >= perguntas.length)
}






















botaoAlternativas.addEventListener("click")
caixaAlternativas.appendChild(botaoAlternativas);
}
function mostrarAfirmacoes(){
    for(const afirmacoes of perguntaAtual.afirmacoes){

       }
    }
}
function respostaSelecionada(opcaoSelecionada){
cont afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
historiaFinal += afirmacoes + "";
if (opcaoSelecionada.proxima !== undefined){
    atual = opcaoSelecionada.proxima;
}else{
    mostraResultado();
    return;
}
mostraPergunta()
}
function mostraResultado(){
    caixaPerguntas.textContent = 'Em 2050, ${nome}';
    textoResultados.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
    caixaResultados.classList.add("mostrar");
    botaoJogarNovamente.addEventListener("click", jogaNovamente);
}
function jogaNovamente(){
    atual = 0;
    historiaFinal = "";
    caixaResultados.classList.remove("mostrar");
    mostraPergunta();
}
function substituiNome(){
    for (const pergunta of perguntas){
        pergunta.enunciado = pergunta.enunciado.replace(/você/g,nome);
    }
}
substituiNome();
// MODAL
const praticasInfo = [
    { titulo: "Rotação de Culturas", texto: "A rotação de culturas consiste em alternar diferentes espécies de plantas em uma mesma área ao longo das estações ou anos. Isso melhora a fertilidade do solo naturalmente, reduz pragas e doenças, e diminui a necessidade de fertilizantes químicos." },
    { titulo: "Irrigação Inteligente", texto: "Sistemas de irrigação por gotejamento e sensores de umidade permitem usar exatamente a quantidade de água que a planta precisa. Isso pode reduzir o consumo de água em até 50% e evita desperdício." },
    { titulo: "Integração Lavoura-Pecuária", texto: "Essa prática combina o cultivo de plantas com a criação de animais na mesma área de forma planejada. Os animais ajudam a fertilizar o solo naturalmente, enquanto as plantas fornecem alimentação para o gado." },
    { titulo: "Agrofloresta", texto: "A agrofloresta integra árvores, arbustos e culturas agrícolas no mesmo espaço. Ela imita o funcionamento de uma floresta, protegendo o solo, criando microclimas favoráveis e aumentando a biodiversidade." },
    { titulo: "Compostagem e Adubação Verde", texto: "Transformar restos de plantas, esterco e resíduos orgânicos em adubo natural é uma das práticas mais eficientes. Além de enriquecer o solo, reduz a dependência de fertilizantes industrializados." },
    { titulo: "Controle Biológico", texto: "Em vez de usar agrotóxicos, o controle biológico utiliza insetos benéficos, fungos e bactérias que atacam as pragas naturalmente. É mais seguro para o meio ambiente e para quem consome os alimentos." }
];

function abrirModal(indice) {
    const modal = document.getElementById('modal');
    const body = document.getElementById('modal-body');
    body.innerHTML = `<h2>${praticasInfo[indice].titulo}</h2><p>${praticasInfo[indice].texto}</p>`;
    modal.style.display = 'block';
}

function fecharModal() {
    document.getElementById('modal').style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == document.getElementById('modal')) {
        document.getElementById('modal').style.display = 'none';
    }
}

// ALTO CONTRASTE
function toggleAltoContraste() {
    document.body.classList.toggle('alto-contraste');
}

// CALCULADORA
function calcularImpacto() {
    const hectares = parseFloat(document.getElementById('hectares').value) || 50;
    const agua = Math.round(hectares * 1200);
    const quimicos = Math.round(hectares * 85);

    document.getElementById('resultado-calculadora').innerHTML = `
        <h3>Seu Impacto Estimado por Ano:</h3>
        <p>🌊 Economia de água: <strong>${agua.toLocaleString()} litros</strong></p>
        <p>🧪 Redução de químicos: <strong>${quimicos} kg</strong></p>
        <p>🌱 Solo mais saudável e produtivo!</p>
    `;
}

// QUIZ COM 10 PERGUNTAS
const perguntas = [ /* (as 10 perguntas que eu te passei antes) */ ];

let perguntaAtual = 0;
let acertos = 0;

function mostrarPergunta() {
    // código do quiz (mesmo da versão anterior)
}

function verificarResposta(indice, botao) {
    // código de verificação
}

function proximaPergunta() {
    perguntaAtual++;
    mostrarPergunta();
}

window.onload = function() {
    mostrarPergunta();
};

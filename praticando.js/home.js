
const nomeEntrada = document.getElementById("nome-entrada");
const nomeSaida = document.getElementById("nome-saida");
const btnTroca = document.getElementById("btn-troca");

btnTroca.addEventListener('mouseenter', () => {
     nomeSaida.textContent = nomeEntrada.value;
}); 

btnTroca.addEventListener('mouseenter', () => {
    nomeSaida.style.color = "#B71009"
})

// Trocando a cor da caixa

const btnVermelho = document.getElementById("btn_verde");
const btnRosa = document.getElementById("btn_rosa");
const btnVerde = document.getElementById("btn_verde");
const caixa = document.getElementById("caixa");

btnVermelho.addEventListener('click', () => {
    caixa.style.backgroundColor = "#B71009"
});

btnRosa.addEventListener('click', () => {
    caixa.style.backgroundColor = "#F09CF9"
});

btnVerde.addEventListener('click', () => {
    caixa.style.backgroundColor = "#ADEEC5"
});

caixa.addEventListener('click', function(){
    caixa.style.background = "#B71009"
})

const nomeEntrada = document.getElementById("nome-entrada");
const nomeSaida = document.getElementById("nome-saida");
const btnTroca = document.getElementById("btn-troca");

btnTroca.addEventListener('mouseenter', () => {
     nomeSaida.textContent = nomeEntrada.value;
}); 

btnTroca.addEventListener('mouseenter', () => {
    nomeSaida.style.color = "#B71009"
})

btnTroca.addEventListener( 'mouseout', () => {
    nomeSaida.style.color = "#B71009";
});

// Trocando a cor da caixa

const btnVioleta = document.getElementById("btn_Violeta"); 
const btnRosa = document.getElementById("btn_rosa"); 
const btnTurquesa = document.getElementById("btn_turquesa"); 
const caixa = document.getElementById("caixa");

btnVioleta.addEventListener('click', () => {
    caixa.style.backgroundColor = "violet";
});

btnRosa.addEventListener('click', () => {
    caixa.style.backgroundColor = "pink";
});

btnTurquesa.addEventListener('click', () => {
    caixa.style.backgroundColor = "turquoise";
});

// Simulando adição e subtração de valor
const valorReal = document.getElementById("valor_real");
let contador = 0;

document.getElementById("btn_menos").addEventListener( 'click', () => {
    if(contador == 0){
    contador--;
    valorReal.textContent = contador;
    }
});

document.getElementById("btn_mais").addEventListener( 'click', () => {
    contador++;
    valorReal.textContent = contador;
});

// adicionando Livros

const nomeLivro = document.getElementById("nome_livro");
const listaLivros = document.getElementById("lista_livros");

document.getElementById("adiciona_livro").addEventListener('click', ()=>{

    const novoLivro = document.createElement("li");
    novoLivro.textContent = nomeLivro.value;
    listaLivros.appendChild(novoLivro);

    nomeLivro.value = "";
})

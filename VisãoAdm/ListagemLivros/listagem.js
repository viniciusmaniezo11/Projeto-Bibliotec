const livros = document.querySelectorAll(".livro") //* Armazena todos os <article class="livro"> e cria um array

//? Botões de página
const botaoAnterior = document.getElementById("pagina-anterior");
const botaoProxima = document.getElementById("proxima-pagina");
const numeroPagina = document.querySelector(".pagina-atual");
const quantidadeLivros = document.querySelector(".quantidade-livros");

//? Configurações da paginação
const livrosPorPagina = 4; //* Define quanto lvros serão mostrado em cada página

let paginaAtual = 1; //* Qual página esta sendo exibida (inicia na pag1)

//? Calculando o total de páginas

//* Pega o valor de quantos livros eu possuo e divide pelo maximo de livros por pagina, arredondando para cima caso necessario (Math.ceil)
const totalPagina = Math.ceil(livros.length / livrosPorPagina);

//? Função responsavel por mostrar a página (Atualizar os elementos)

function mostrarPagina() {
   
    //* Descobre o indice do primeiro livro que deve aparcer

    // Página 1
    // (1 - 1) x 4 = 0

    //Página 2
    // (2 - 1) * 4 = 4

    // livros = [1, 2, 3, 4, 5, 6, 7, 8]
    // Pagina 1 = 1, 2, 3, 4
    // Pagina 2 = 5, 6, 7, 8 
    const inicio = (paginaAtual - 1) * livrosPorPagina;

    const fim = inicio + livrosPorPagina; //* Descobre até onde os livros devem ser exibidos

    //* Percorre toda a lista de livros encontrado no html
    //* Livro representa o livro atual e a posiçao represente a posição do livro
    livros.forEach((livro, posicao) => { 

        //* Inicio na pagina 1 = 0
        //* Fim =4
        if (posicao >= inicio && posicao < fim) { //* Verifica se o indice do livo está dentro do intervalo da página atual
            //* Se estiver dentro do intervalo, mostra o livro na tela
            livro.style.display = "grid";
        }
        else {
            //* Se não estiver, esconde o livro
            livro.style.display = "none";
        }
    })

    //* Atualiza no HTML o número da página atual
    numeroPagina.textContent = paginaAtual;

    //* Inicialmente, consideramos "fim" como a posição do ultimo livro mostrado
    let ultimoLivro = fim;

    //* Caso o valor ("ultimoLivro)" ultrapasse o tamanho do array, ele recebe o tamanho do array, logo se o valor ultrapassar a quantidade real recebemos a total
    if (ultimoLivro > livros.length) {
        ultimoLivro = livros.length;
    }

    quantidadeLivros.textContent = `Mostrando ${ultimoLivro} de ${livros.length} livros.`;
}

//? Evento de click de botão de proxima pagina

botaoProxima.addEventListener("click", () => {

    //* Só permite avançar se ainda existir uma proxim pagina
    if (paginaAtual < totalPagina) {
        //* Passa a página
        paginaAtual++;

        //* Atualiza os livros exibidos na tela
        mostrarPagina();
    }
})

//? Evento de click de botão de página anterior

botaoAnterior.addEventListener("click", () => {

    //* Só permite voltar se não estiver na primeira página
    if (paginaAtual > 1) {
        //* Volta uma pagina
        paginaAtual--;

        //* Atualiza os livros exibidos na tela
        mostrarPagina();
    }
})

//! --------- Chamando Funções --------- !//

//* Quando a pagina carregar precisamos executar a função de mostrarPagina() uma vez para esconder os livros que não pertencem a primeira página.
mostrarPagina()
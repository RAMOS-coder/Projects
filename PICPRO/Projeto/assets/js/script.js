const listaOpcoes = document.querySelector(".secaoDetalheConta_opcoesTransacoes");
listaOpcoes.addEventListener("click", identificarOpcoes);

function identificarOpcoes(event) {
    // Identificando a onde o usuário clicou
    const element = event.target;

    if (element.tagName == "LI") {
        // Armazenando o ID da <li>
        const id = element.id;

        // Selecionando uma <div> utilizando o ID (escolha do usuário)
        const escolhaSecao = document.querySelector(`div[data-ident="${id}"]`);
        
        // Removendo a Class "Mostrar"
        removerClassMostrar();

        // Adicionando a Class "Mostrar"
        escolhaSecao.classList.add("mostrar");
    }
}

function removerClassMostrar() {
    const divs = document.querySelectorAll(".secaoTransacao .container div");

    for (let i=0; i < divs.length; i++) {

        divs[i].classList.remove("mostrar");
    }
}
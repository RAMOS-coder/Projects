let minhaXicara = {
    cor: "Marrom",
    pese: 38,
};

let meuPrimeiroItemDoPedido = {
    id: 0,
    nome: "X_Burger",
    preco: 30,
    disponivel: true,
    ingredientes: ["pão", "tomate", "alface", "hamburger", "queijo"],
};

console.log(meuPrimeiroItemDoPedido.preco);

// reatribuindo um valor do objeto
meuPrimeiroItemDoPedido.preco = 25;
console.log(meuPrimeiroItemDoPedido.preco);

// atribuir um novo item no objeto
meuPrimeiroItemDoPedido.peso = "500g";
console.log(meuPrimeiroItemDoPedido);

// concatenar as informações
console.log("O lanche " + meuPrimeiroItemDoPedido.nome + " é muito bom.")
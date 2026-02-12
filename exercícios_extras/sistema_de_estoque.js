// 🛒 O Cenário
// Você foi contratado para criar o motor de um sistema que gerencia os produtos
// de uma loja de tecnologia. O sistema precisa buscar os produtos em um servidor,
// aplicar descontos, remover itens indisponíveis e calcular o valor total do patrimônio da loja.

class Produto{    //classe para criação/cadastro dos itens
    constructor(nome, preco, quantidade){
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    detalhes(){  //Método para detalhar algum item específico
        console.log(`O nome do produto é ${this.nome}, custa R$${this.preco} e existem ${this.quantidade} disponivéis!`);
    }
}

    const listaProdutos = [  //Array de objetos(lista de produtos)
         new Produto('Mouse', 2500, 12),
         new Produto('Teclado', 500, 15),
         new Produto('Cadeira Gamer', 1500, 0),
         new Produto('Suporte microfone', 90, 67 ),
         new Produto('Luminária Astronauta', 800, 15),
         new Produto('Monitor', 750, 0),
    ]

    function rand(min, max){ //Função para simular o delay de um servidor ou semelhantes
        min = min * 1000;
        max = max * 1000;
        return Math.floor(Math.random()* (max-min) + min)
    }

    function buscar(lista, tempo){  //Função para exibir a lista de produtos só depois do tempo
       return new Promise( (resolve) => {
            setTimeout(() =>  {
                resolve(lista);
            }, tempo)
       })
    }


    function aplicarDescontos(lista, desconto){ //Função para colocar descontos, pode receber listas diferentes
         return lista.map(valor =>  {
            return{
                ...valor,
                preco: valor.preco - desconto
            }
        });
    }


    function removerItens(lista){   //Função para remover itens usando filter
        const listaAtualizada = lista.filter(valor => valor.quantidade > 0);
        return listaAtualizada;
    }

    function somarPatrimonio(lista){
        const totalBruto = lista.reduce(function(acumulador, valor){
            acumulador += valor.preco*valor.quantidade;
            return acumulador
        }, 0)
        return totalBruto
    }

     console.log('Buscando itens...');
     buscar(listaProdutos, rand(1,3)).then(resultado => console.log(resultado));
    // console.log(aplicarDescontos(listaProdutos, 30));
    // console.log(removerItens(listaProdutos));
    //   console.log('R$' + somarPatrimonio(listaProdutos))
    

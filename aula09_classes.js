//AULA 09  Classes
//ANOTAÇÕES ESTÃO NA AULA BÔNUS_CONSTRUTORES

class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar(){     //Essas funções dentro de uma classe são chamadas de métodos, lembra?
        console.log(`${this.nome} está falando!`);
    }

    codar(){
        console.log(`${this.nome} está codando!`);
    }
}

const p1 = new Pessoa('Daniel', 'Lindão');
p1.falar()
p1.codar()

// A título de comparação, abaixo está como esse processo acima era feito 
// antes dessa atualização das classes, usando função construtora.

function Pessoa2(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function(){   //Esse seria o método desse formato mais 'antigo'
    console.log(`${this.nome} está falando 2!`)
}

const p2 = new Pessoa2('Juscelino', 'Kubitschek')
p2.falar();   


// ---------------------------------------------------------
// POR QUE MÉTODOS COM NOMES IGUAIS NÃO CONFLITAM?
// ---------------------------------------------------------
// 1. ISOLAMENTO (ENCAPSULAMENTO): Cada Classe ou Função Construtora 
// funciona como uma "ilha". Os métodos definidos em 'Pessoas' 
// pertencem apenas aos objetos criados por ela (instâncias).

// 2. A CADEIA DE PROTÓTIPOS (PROTOTYPE CHAIN):
// Quando você chama p1.falar(), o motor do JavaScript faz uma busca:
//   A) O objeto 'p1' tem o método 'falar' nele mesmo? (Propriedade local)
//   B) Se não, o Protótipo da Classe que criou o 'p1' tem? (Herança)
//   C) Se não, continua subindo até o 'Object.prototype'.

// Como p1 e p2 têm "pais" diferentes, eles nunca se misturam, 
// mesmo que o nome do método seja idêntico.

// ---------------------------------------------------------
// BOAS PRÁTICAS E MEMÓRIA
// ---------------------------------------------------------
// - CONVENÇÃO: Use camelCase (ex: falar() ao invés de Falar()). 
//   Nomes com a primeira letra maiúscula são reservados para a 
//   Classe ou Função Construtora em si.
// - PERFORMANCE: Métodos em protótipos (ou dentro da classe) 
//   economizam memória. Se você criar 1000 pessoas, o método 'falar'
//   existirá apenas uma vez no protótipo, sendo compartilhado por todos.
//AULA 3 - Funções
// As funções são tratadas como objetos de primeira classe, ou seja, são tratadas como dados.
// Funções declaradas podem sofrer Hoisting (içar), que é serem chamadas em outras linhas acima
// da sua declaração.

// Por enquanto as funções podem ser:
/*
 declaradas - Aquelas com nome na frente: function Saudar(){return 'olá'}
 expressão - Aquelas atribuidas a uma expressão, geralmente em consts e anonimas:
 const saudar = function(){return 'olá'}
 arrowFunction - Aquelas mais modernas e numa unica linha: 
 const saudar = () => {return 'olá'} - Precisa do return explicito quando tem chaves, ao contrário não
*/ 



const atacar = function(){
    console.log('Você recebe um ataque, -5 vida!');
}

const defender = () => {
    console.log('Você defendeu!')
}

const executarAcao = function(acao){
    acao()
} 

const Monstro = {
    nome: 'Goblin Ardiloso',
    turno: () => executarAcao(atacar)
}

console.log(`O monstro ${Monstro.nome} realizou sua ação!`)
Monstro.turno()
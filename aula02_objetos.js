//AULA 2 - Objetos

// Objetos: eles tem caracterísitcas semelhantes aos arrays
// a diferença é que eles têm propriedades no lugar de apenas elementos
// cada propriedade pode ser definida de uma forma, podendo ser número, string ou até mesmo  uma função.
// Se o uma propriedade do objeto chamar/executar uma função, chamamos isso de MÉTODO,
// como se fosse uma ação de fato.

const Personagem  = {
    nome: 'Carlos',
    sobrenome: 'Oliveira',
    origem: {
        endereco: 'Jd.Amanda 5',
        familia: 'Oliveira',
        tema: 'Esperança'
    }
};



// Ao criar um objeto, podemos manipular suas propriedades diretamente ou realizar o processode EXTRAÇÃO
// também chamado de DESESTRUTURAÇÃO, que é separar essas propriedades em consts ou vars idependentes.
// Logo abaixo, fazemos isso; pegando os valores do objeto 'Personagem' e colocando-os na constante.

// Uma boa prática é ao chamar essas propriedades, colocar-se um valor 'secundário' para elas, para caso dê
// algum erro, aparecer de acordo com o que você preparou.

// Outra coisa é que temos o uso da funcionalidade rest/spread que é os '...'.
// Ele pode espalhar o restante do objeto que voce não usou, ou resgatá-los todos de uma vez

const {nome = 'você esqueceu o nome', sobrenome = '', ...resto} = Personagem;
const {origem: {endereco, familia} } = Personagem;

console.log(nome, sobrenome);
console.log(resto);


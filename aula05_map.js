// AULA 05 Map

//EXEMPLO BÁSICO
// const numeros = [2, 3, 4, 5, 6, 7, 8]
// const numerosDobrados = numeros.map(valor => valor*2)
// console.log(numerosDobrados)

//EXEMPLO QUE CRIEI
//Exibir e calular nota aumentada manipulando arrays, objetos e map.


const notas = [600, 550, 700];
const calcularPeso = notas.map( valor => valor * 3);

//Aqui uso map para fazer um novo array e indico quais são as notas pelo indice dos elementos desse array.
const Alunos = [
    {nome: 'Ana' , notaMat: calcularPeso[0] },
    {nome: 'Lucio', notaMat: calcularPeso[1] },
    {nome: 'Sid', notaMat: calcularPeso[2] }
];

console.log(Alunos);


//EXEMPLO MELHORADO
// const notas = [600, 550, 700]

// const notasComPeso = notas.map((valor, indice) => {
//     return{
//         id: indice + 1,
//         nome: `Aluno ${indice + 1}`,
//         nota: valor*3
//     }
// })
// console.log(notasComPeso)


//Atenção: posso usar map para adicionar novos itens num objeto, porém, ele irá modificar o objeto original
//diretamente. Se eu não quiser esse comportamento, eu crio um novo objeto rapidamente usando {...objetoOriginal}

const pessoas = [
    {nome: 'Raimundo' , idade:77 },
    {nome:'José' , idade:67},
    {nome:'Lindona' , idade:23},
    {nome: 'Maravilhosa' , idade:21},
    {nome: 'Flavia' , idade: 12}
];

//O 'valor' nesse caso é um objeto! (ai encima)
const apenasNomes = pessoas.map( valor => valor.nome);
const apenasIdades = pessoas.map(valor => ({idades: valor.idade}) );
console.log(apenasNomes, '\n', apenasIdades);

//Essa função abaixo é a mesma da de cima, porém sem usar Arrow. É boa para saber como funciona
const apenasNomes2 = pessoas.map(function(valor){
    return valor.nome;
});
console.log('Nomes retornados de maneira diferente: \n' + apenasNomes2);


/** * [⚠️ ATENÇÃO: RETORNO DE OBJETOS EM ARROW FUNCTIONS]
 * * PROBLEMA: O JavaScript confunde as chaves { } do objeto com as chaves de um 
 * bloco de código/função. Se você não usar o 'return' explícito, ele 
 * entenderá como um bloco vazio e retornará 'undefined'.
 * * SOLUÇÃO: Envolver o objeto entre parênteses ( ) para forçar o JS a 
 * interpretar o conteúdo como uma expressão (objeto literal).
 * * ❌ ERRADO: const func = () => { id: 1 }; // Retorna undefined
 * ✅ CERTO:  const func = () => ({ id: 1 }); // Retorna { id: 1 }
 */
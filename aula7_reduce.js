// //AULA 7 - Reduce

// //1 - Some todos os valores do array
// //2 - Selecione somente os pares (substituindo filter)  -> Apenas teste, não indicado
// //3 - Dobre e retorne os valores do array (substituindo map) -> Apenas teste, não indicado

//1
const numeros = [5, 55, 80, 27, 7, 8, 6, 18, 29, 40];
const soma = numeros.reduce(function(acumulador, valor){
    acumulador += valor;
    console.log(acumulador);
    return acumulador;
}, 0);
console.log(soma);

//2
const numeros2 = [5, 55, 80, 27, 7, 8, 6, 18, 29, 40];
const pares = numeros2.reduce(function(acumulador, valor){
    if(valor % 2 === 0) acumulador.push(valor); //num if de uma linha, não preciso de chaves
    return acumulador;   
}, []);
console.log(pares)

//3
const numeros3 = [5, 55, 80, 27, 7, 8, 6, 18, 29, 40];
const dobros = numeros2.reduce(function(acumulador, valor){
    acumulador.push(valor * 2); //Push serve para adicionar algo ao final da fila de um array
    return acumulador;   
}, []);
console.log(dobros)

//retornar o mais velho
const pessoas = [
    {nome:'Luiz', idade: 23},
    {nome:'Cida', idade: 63 },
    {nome:'João', idade: 55 },
    {nome:'Juninho', idade: 57 },
    {nome:'Higor', idade: 19 },
    {nome:'Chiquin Capixaba', idade: 72 }
]

const maisVelho = pessoas.reduce(function(acumulador, valor){
    if (acumulador.idade > valor.idade) return acumulador;
    return objeto
})

console.log(maisVelho)

//A lógica acima é a seguinte: como não dei valor incial para o meu acumulador
//ele vai receber o primeiro elemento do meu array de objetos, e é isso que preciso.
//Ja que meu acumulador está com o primeiro objeto do array, o parâmetro 'valor' vai receber
//o segundo objeto do array. Assim, posso compará-los e retornar sempre o maior com base no If
// AULA 08 ForEach
// O ForEach é um laço que vai iteirar sobre cada elemento de um array.
// Ele tem como parametros o valor do elemento, o indice e o array original.
// O forEach é um método que o JavaScript implementa em objetos que são considerados "coleções"
// ForEach não retorna nada, então a melhor opção para retornar dados manipulados é usando map.

const numeros = [5, 55, 80, 27, 7, 8, 6, 18, 29, 40]

numeros.forEach(function(valor, indice, array){
    console.log(valor, indice + '\n')
})

// Dizer que ele não retorna nada, significa que operações como const x = a1.foreach... 
// não irão funcionar. Mas ele possui efeitos colaterais, ou seja o ForEach
// é capaz de mexer em estruturas externas, como no EXEMPLO ABAIXO:

let total = 0;

numeros.forEach(valor => { total += valor})
console.log('soma de todos os numeros: \n' + total)
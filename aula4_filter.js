// AULA 04 Filter

// Filter sempre retorna um array do mesmo tamanho ou menor. Posso usá-los para filtrar
// nomes, valores ou numéros específicos.
// Geralmente são usados em grande quantidade de dados, como bancos e objetos longos.
// Filter possui três parametros explicitos: valor do elemento a ser processado, indice e o array original.

//EXEMPLO 1 

 const numeros = [15, 25, 10, 9, 5, 7, 8, 45, 99];
 const numerosFiltrados = numeros.filter( (valor, indice) => (indice>2))
 console.log(numerosFiltrados)

//EXEMPLO 2

const pessoas = [
    {nome: 'Raimundo' , idade:77 },
    {nome:'José' , idade:67},
    {nome:'Maria' , idade:23},
    {nome: 'Antonieta' , idade:21},
    {nome: 'Flavia' , idade: 12}
]

// Abaixo utilizo o parâmetro de valor implicito, chamando ele de 'objeto' e pegando os dados do objeto 'pessoas'
// O conteúdo do 'objeto' passará a ser os nomes localizados no objeto original que tem tamanho menor que 7.
// Isso foi feito usando ArrowFunction.

const nomesCurtos = pessoas.filter(objeto => objeto.nome.length < 7)
const pessoasNovas = pessoas.filter(objeto => objeto.idade < 30)
const nomesTerminadosEmA = pessoas.filter(objeto => {
   return objeto.nome.toLowerCase().endsWith('a')
})
console.log(nomesCurtos)
console.log(pessoasNovas)
console.log(nomesTerminadosEmA)


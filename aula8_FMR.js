//AULA 8 filter + map + reduce
//Retorne a soma do dobro de todos os pares

const numeros = [5, 55, 80, 27, 7, 8, 6, 18, 29, 40]

const resultado =
numeros.filter( (valor => valor % 2 === 0)) //uso filter para pegar os pares
.map( dobro => dobro * 2)     //em seguida uso map para dobrar
.reduce((acumulador, valor) => acumulador += valor, 0) //por fim, uso reduce para somar

//Pares: 80, 8, 6, 18, 40
//Dobro dos pares: 160, 16, 12, 36, 80
//Soma dos pares dobrados: 304

console.log(resultado)

//Como visto acima, é possivel encadear uma função na outra, encaixando um map no filter etc.

//Há outras formas de fazer esse exercício, uma delas é usando function() nos parametros
//no lugar da arrow.
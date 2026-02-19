//AULA 1 - Arrays
// valor = o que ele tem dentro, ou o que ele representa
// indice = a indicação/posição de cada elemento dentro de um array
// tamanho = justamente o tamanho do array em si


   const nomes = ['Ana', 'Flavia', 'Ricardo'];
   const notas = [10, 7, 6];
   const resultados = [ nomes[1] + notas[1], nomes[0] + notas[0], nomes[2] + notas[2] ]
   const [resultadoUm, resultadoDois, resultadoTres] = resultados
   console.log(`As notas são: ${nomes[1]} ${notas[1]}, ${nomes[0]} ${notas[0]}`)
   // Ou posso usar assim: (fica desformatado)
   console.log(resultadoUm, resultadoDois, resultadoTres)
 





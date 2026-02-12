// AULA 12  Promises (Promesas)

//Criando uma função para gerar números aleatórios, assim
//simulando o tempo de processsamento de algo
function rand(min, max){
    min = min*1000; //multiplica por 1000 pois está em milisegundos
    max = max*1000;
    return Math.floor(Math.random() * (max-min) + min);
}

//Criando uma função que irá receber uma mensagem e um tempo
//o tempo será definido pela função de números aleatorios, e a mensagem só será exibida depois
function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject('BAD VALUE')  //ERRO SE A MSG NÃO FOR UMA STRING

        setTimeout(() => {
            resolve(msg);
        }, tempo);
    })
}

esperaAi('etapa 1 - baixando perfil...', rand(1, 3))
.then(resposta => {
    console.log(resposta);
    return esperaAi('etapa 2 - analisando keys...', rand(1, 3));
})
.then(resposta => {
    console.log(resposta);
    return esperaAi('etapa 3 - copiando...', rand(1,3));
})
.then(resposta => {
    console.log(resposta);
})
.then( () => console.log('Download bem sucedido!'))
.catch(e => {
    console.log('ERRO:', e)   //PARA SIMULAR UM ERRO, BASTA COLOCAR ALGUM NUMERO NO LUGAR DA FRASE
});

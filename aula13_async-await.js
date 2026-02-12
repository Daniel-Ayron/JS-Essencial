// AULA 13 Async e Await
// O termo 'async' é usado numa função para torná-la assíncrona. Isso quer dizer que a função
// irá ocorrer paralelamente ao resto do código, não possuindo uma sincronia.
// Ao fazer isso, temos acesso ao termo 'await', que será responsável por fazer 
// o sistema esperar para então acontecer algo depois.

function rand(min, max){
    min = min*1000;
    max = max*1000;
    return Math.floor(Math.random()*(max-min) + min);
};

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => { 
        setTimeout(() =>{
            if(typeof msg !== 'string'){
                 reject('ERRO na resenha');
                 
            }
            resolve(msg);
        }, tempo );
    });
};

//NO LUGAR DESSE SISTEMA:
/*

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

*/ 

//NÓS USAMOS ASYNC E AWAIT

async function executa() {
    try{
    const frase1 = await esperaAi('frase 1', rand(1, 5));
    console.log(frase1);

    const frase2 = await esperaAi('frase 2', rand(1, 5));
    console.log(frase2); 

    const frase3 = await esperaAi('frase 3', rand(1, 5));
    console.log(frase3);
    console.log('Acabou!');
    }
    catch(e){
        console.log(e);
    };
};

executa();



// AULA 13 Métodos de Promises

function rand(min, max){
    min = min*1000;
    max = max*1000;
    return Math.floor(Math.random()*(max-min) + min);
};

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => { 
        setTimeout(() =>{
            if(typeof msg !== 'string'){
                 reject('ERRO na resenha') ;
            }
            resolve(msg)
        }, tempo );
    });
};


const promises1 = [
    esperaAi('Promise 1', rand(1,3)),
    esperaAi('Promise 2', rand(1,3)),
    esperaAi('Promise 3', rand(1,3)),
    // esperaAi(1000, rand(1,3)),
];

const promises2 = [
    esperaAi('Promise 4', rand(1,3)),
    esperaAi('Promise 5', rand(1,3)),
    esperaAi('Promise 6', rand(1,3)),
    // esperaAi(1000, rand(1,3)),
];

//Promise.all - Executa todas as promises de um array de promises

Promise.all(promises1).then(
    resposta => console.log(resposta)
).catch(e => console.log(e));

//Promise.race - Executa a promise mais rápida num array de promises

Promise.race(promises2).then(
    resposta => console.log(resposta)
).catch(e => console.log(e));

//Promise.resolve - resolve uma promise instantaneamente, perfeita para situações
//em que você ja sabe o resultado de uma promise, por exemplo ao usar cachês

function baixaPagina1(){
    const emCache = true;

    if(emCache){
        return Promise.resolve('Página em cachê');
    }else{
        return esperaAi('Baixando página', rand(1, 5));
    };
};

baixaPagina1()
.then(dadosDaPagina => console.log(dadosDaPagina))
.catch(e => console.log(e));

// Promise.reject - aplicação semelhante ao cenário do promise.resolve
// a difereça é que ele vai negar a promise ao invés de resolver.

function baixaPagina2(){
    const emCache = true;

    if(emCache){
        return Promise.reject('Página em cachê');
    }else{
        return esperaAi('Baixando página', rand(1, 5));
    }
};

baixaPagina2()
.then(dadosDaPagina => console.log(dadosDaPagina))
.catch(e => console.log(e));
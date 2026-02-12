function botaoClicado(){
    fetch('produtos.json')
.then(resposta => resposta.json())
.then(json => carregaElementosNaPagina(json));

function carregaElementosNaPagina(json){
    const table = document.createElement('table');

    for(let produto of json){
        const tr = document.createElement('tr');

        let td = document.createElement('td');
        td.innerHTML = produto.id;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = produto.nome;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = produto.marca;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = produto.preco;
        tr.appendChild(td);

        table.appendChild(tr);
    }

    const resultado = document.querySelector('.conteudo-resultado');
    resultado.appendChild(table);
}
}
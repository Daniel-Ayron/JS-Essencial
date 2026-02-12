// 1. Escutamos qualquer clique no documento
document.addEventListener('click', e => {
    const el = e.target; // O elemento que foi clicado
    const tag = el.tagName.toLowerCase(); // Transformamos em minúsculo (ex: 'a')

    // 2. Se o clique foi em um link (tag 'a')
    if (tag === 'a') {
        e.preventDefault(); // Impede o navegador de mudar de página
        carregaPagina(el); // Chama nossa função enviando o elemento
    }
});

async function carregaPagina(el) {
    const href = el.getAttribute('href'); // Pega o endereço (ex: home.html)

    try {
        const response = await fetch(href); // Faz a "ligação" para o arquivo

         //status é um numero enviado pelo http para verificar se foi bem sucedido
        if (response.status !== 200) throw new Error('Erro ao carregar!');
        //200-299 = OK, 300-399 = redirecionado, 400-499 = erro do cliente, 500-599 = erro servidor
        //404 = pagina nao encontrada, 403 = site proibido etc.

        const html = await response.text(); // Converte a resposta em texto/html
        exibeResultado(html); // Chama a função que joga o texto na tela
    } catch (e) {
        console.error(e);
    }
}

function exibeResultado(html) {
    const resultado = document.querySelector('.conteudo-resultado');
    resultado.innerHTML = html; // Substitui o conteúdo da div pelo novo HTML
}









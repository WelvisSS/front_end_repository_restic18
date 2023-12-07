
// Função para capturar informações do pacote turístico e criar um objeto JSON
function capturarInfo(event) {
    // Captura do elemento pai do botão clicado
    const roteiroViagem = event.target.closest('.roteiros-viagens');

    // Captura das informações utilizando querySelector
    const destino = roteiroViagem.querySelector('.destino').innerText;
    const roteiroItems = Array.from(roteiroViagem.querySelectorAll('.roteiro li'))
        .map(item => item.innerText);
    const preco = roteiroViagem.querySelector('.preco').innerText;
    const informacoes = roteiroViagem.querySelector('.informacoes').innerText;
    const parcelamento = roteiroViagem.querySelector('.parcelamento').innerText;

    // Criação do objeto JSON com as informações capturadas
    const pacoteTuristico = {
        Destino: destino,
        Roteiro: roteiroItems,
        Preco: preco,
        Informacoes: informacoes,
        Parcelamento: parcelamento
    };

    // Imprime o objeto JSON no console
    console.log(JSON.stringify(pacoteTuristico, null, 2));
}

// Associa o evento 'click' a todos os botões 'Comprar'
const botoesComprar = document.querySelectorAll('button');
botoesComprar.forEach(botao => {
    botao.addEventListener('click', capturarInfo);
});

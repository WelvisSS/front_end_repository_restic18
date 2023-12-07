
function capturarInfo(event) {
    const roteiroViagem = event.target.closest('.roteiros-viagens');

    const destino = roteiroViagem.querySelector('.destino').innerText;
    const roteiroItems = Array.from(roteiroViagem.querySelectorAll('.roteiro li'))
        .map(item => item.innerText);
    const preco = roteiroViagem.querySelector('.preco').innerText;
    const informacoes = roteiroViagem.querySelector('.informacoes').innerText;
    const parcelamento = roteiroViagem.querySelector('.parcelamento').innerText;

    const pacoteTuristico = {
        Destino: destino,
        Roteiro: roteiroItems,
        Preco: preco,
        Informacoes: informacoes,
        Parcelamento: parcelamento
    };

    console.log(JSON.stringify(pacoteTuristico, null, 2));
}

const botoesComprar = document.querySelectorAll('button');
botoesComprar.forEach(botao => {
    botao.addEventListener('click', capturarInfo);
});

document.getElementById('btnInserir').addEventListener('click', function (event) {
    event.preventDefault();

    const destino = document.getElementById('destino').value;
    const imgUrl = document.getElementById('imgUrl').value;
    const diarias = document.getElementById('diarias').value;
    const preco = document.getElementById('preco').value;
    const informacoes = document.getElementById('informacoes').value;
    const parcelamento = document.getElementById('parcelamento').value;

    const novoPacote = document.createElement('div');
    novoPacote.classList.add('roteiros-viagens');
    novoPacote.innerHTML = `
      <img src="${imgUrl}" class="postal">
      <div class="destino">${destino}</div>
      <ul class="roteiro">
        <li>Áereo ida e volta</li>
        <li>${diarias} diárias</li>
        <li>Café da Manhã</li>
      </ul>
      <div class="preco">${preco}</div>
      <div class="informacoes">${informacoes}</div>
      <div class="parcelamento">${parcelamento}</div>
      <button>Comprar</button>
    `;

    const containerDestinos = document.getElementById('containerDestinos');
    containerDestinos.appendChild(novoPacote);
});

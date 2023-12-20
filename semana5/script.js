// URL da API para obter informações sobre estados brasileiros
const url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';
const dadosApiElement = document.getElementById('dados-api');

// Função para obter os dados dos estados e exibir na página
async function exibirEstados() {
    try {
        const response = await fetch(url);

        if (response.ok) {
            const estados = await response.json();
            const listaEstados = estados.map(estado => `<li>Nome: ${estado.nome}, Sigla: ${estado.sigla}</li>`).join('');
            dadosApiElement.innerHTML = listaEstados;
        } else {
            dadosApiElement.innerHTML = '<li>Falha ao obter os estados.</li>';
        }
    } catch (error) {
        dadosApiElement.innerHTML = `<li>Erro ao obter os estados: ${error}</li>`;
    }
}

// Chamada da função para exibir os estados na página
exibirEstados();

const containerImagens = document.getElementById('container-imagens');

// Função para carregar três imagens de cachorro da API
async function carregarTresImagensCachorro() {
    try {
        for (let i = 0; i < 3; i++) {
            const response = await fetch('https://dog.ceo/api/breeds/image/random');
            if (response.ok) {
                const data = await response.json();
                const imgUrl = data.message;

                const imgElement = document.createElement('img');
                imgElement.src = imgUrl;
                imgElement.alt = 'Imagem de um cachorro';
                imgElement.classList.add('img');

                containerImagens.appendChild(imgElement);
            } else {
                console.log('Falha ao carregar imagem de cachorro.');
            }
        }
    } catch (error) {
        console.log('Erro ao carregar imagem de cachorro:', error);
    }
}

// Carregar três imagens de cachorro ao carregar a página
carregarTresImagensCachorro();


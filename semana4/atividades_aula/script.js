// Classe Tarefa
class Tarefa {
    constructor(nome) {
        this.nome = nome;
    }
}

// Função para remover a tarefa do localStorage
function removeTarefaDoStorage(tarefaTexto) {
    let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    tarefas = tarefas.filter(tarefa => tarefa.nome !== tarefaTexto);
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

// Adicionando evento de remoção ao clicar no botão "Excluir"
function adicionarEventoExcluir(botaoExcluir, tarefaTexto) {
    botaoExcluir.addEventListener('click', function () {
        const listaTarefas = document.getElementById('listaTarefas');
        const liParaRemover = botaoExcluir.parentElement;

        listaTarefas.removeChild(liParaRemover);
        removeTarefaDoStorage(tarefaTexto);
    });
}

// Modificando a função adicionaTarefaDOM para adicionar botão "Excluir"
function adicionaTarefaDOM(tarefa) {
    const listaTarefas = document.getElementById('listaTarefas');
    const novaTarefa = document.createElement('li');
    novaTarefa.textContent = tarefa.nome;

    const botaoExcluir = document.createElement('button');
    botaoExcluir.textContent = 'Excluir';

    adicionarEventoExcluir(botaoExcluir, tarefa.nome);

    novaTarefa.appendChild(botaoExcluir);
    listaTarefas.appendChild(novaTarefa);
}


// Função para adicionar a tarefa no localStorage
function adicionaTarefaNoStorage(tarefa) {
    let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    tarefas.push(tarefa);
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

// Adicionando evento ao botão de adicionar
const btnAdicionar = document.getElementById('btnAdicionar');
btnAdicionar.addEventListener('click', function () {
    const inputTarefa = document.getElementById('inputTarefa');
    const nomeTarefa = inputTarefa.value.trim();

    if (nomeTarefa !== '') {
        const novaTarefa = new Tarefa(nomeTarefa);

        adicionaTarefaDOM(novaTarefa);
        adicionaTarefaNoStorage(novaTarefa);

        inputTarefa.value = ''; // Limpar o campo após adicionar a tarefa
    } else {
        alert('Por favor, digite uma tarefa válida.');
    }
});

// Carregar tarefas do localStorage ao carregar a página
window.addEventListener('load', function () {
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    tarefas.forEach(tarefa => {
        adicionaTarefaDOM(tarefa);
    });
});



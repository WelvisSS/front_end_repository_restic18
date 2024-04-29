import { createReducer, on } from "@ngrx/store";
import { Tarefa } from "../tarefa.model";
import { adicionarTarefa, editarTarefa, removerTarefa } from "./tarefa.actions";

export interface TarefaState {
    tarefas: Tarefa[];
}

export const estadoInicial: TarefaState = {
    tarefas: [
        { id: '1', descricao: 'Aprender Express.js com a residencia TIC18 do CEPEDI' },
        { id: '2', descricao: 'Aprender MongoDB com a residencia TIC18 do CEPEDI' },
        { id: '3', descricao: 'Aprender Mongoose com a residencia TIC18 do CEPEDI' },
        { id: '4', descricao: 'Aprender TypeScript com a residencia TIC18 do CEPEDI' },
        { id: '5', descricao: 'Aprender JavaScript com a residencia TIC18 do CEPEDI' }

    ]
};

export const tarefasReducer = createReducer(
    estadoInicial,
    on(adicionarTarefa, (estado, action) => ({ ...estado, tarefas: [...estado.tarefas, action.tarefa] })),
    on(removerTarefa, (estado, action) => ({ ...estado, tarefas: estado.tarefas.filter(t => t.id !== action.id) })),
    on(editarTarefa, (estado, action) => ({
        ...estado,
        tarefas: estado.tarefas.map(tarefa =>
            tarefa.id === action.id ? { ...tarefa, descricao: action.descricao } : tarefa
        )
    }))
);

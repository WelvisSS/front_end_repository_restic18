import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { Tarefa } from '../models/tarefa.model';

type TarefasState = {
    tarefas: Tarefa[];
};

const initialState: TarefasState = {
    tarefas: [
        { id: '1', descricao: 'Estudar TypeScript' },
        { id: '2', descricao: 'Fazer exercícios de JavaScript' },
        { id: '3', descricao: 'Aprender React' },
        { id: '4', descricao: 'Praticar CSS' },
        { id: '5', descricao: 'Desenvolver um projeto em Node.js' },
        { id: '6', descricao: 'Explorar APIs REST' },
    ],
};

export const tarefasStore = signalStore(
    { providedIn: 'root' },
    withState(initialState),
    withMethods((store) => ({
        addTarefa(tarefa: Tarefa) {
            const tarefas = store.tarefas();
            patchState(store, { tarefas: [...tarefas, tarefa] });
        },
        removeTarefa(id: string) {
            const tarefas = store.tarefas();
            patchState(store, { tarefas: tarefas.filter(tarefa => tarefa.id !== id) });
        },
        updateTarefa(id: string, descricao: string) {
            const tarefas = store.tarefas();
            patchState(store, {
                tarefas: tarefas.map(tarefa =>
                    tarefa.id === id ? { ...tarefa, descricao } : tarefa
                )
            });
        },
    }))
);

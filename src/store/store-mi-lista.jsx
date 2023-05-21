import { create } from 'zustand';

export const useStoreML = create((set) => ({

    mi_lista: [],

    addML: (movie) => (
        set(state => ({
            mi_lista: [...state.mi_lista, movie]
        }))),
    removeML: (newList) => (
        set(() => ({
            mi_lista: newList
        }))
    )
}))
import { configureStore } from "@reduxjs/toolkit";
import ticketSlice from "./tickets/ticketSlice";

export const store = configureStore({
    reducer: {
        ticket: ticketSlice,
    },
},)

// Adiciona um listener para salvar os dados no localStorage sempre que o estado mudar
store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem('tickets', JSON.stringify(state.ticket.tickets));
});

store.subscribe
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
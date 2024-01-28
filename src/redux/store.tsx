import { configureStore } from "@reduxjs/toolkit";
import ticketSlice from "./tickets/ticketSlice";

export const store = configureStore({
    reducer: {
        ticket: ticketSlice,
    },
},)

store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem('tasks', JSON.stringify(state.ticket.tickets));
});

store.subscribe
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
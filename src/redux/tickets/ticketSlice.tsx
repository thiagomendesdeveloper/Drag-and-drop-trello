import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { columnList } from '../../utils/colums';

const savedTickets = JSON.parse(localStorage.getItem('tasks') || '[]');

const initialState = {
  tickets: savedTickets || columnList,
};

interface ticket {
    status: string;
    id: number;
    tag: string;
    descricao: string;
    responsavel: string;
    upload?: any;
}

export const ticketSlice = createSlice({
    name: 'teste',
    initialState: initialState,
    reducers: {
        addTicket: (state: any, action: PayloadAction<ticket>) => {
            state.tickets[0].cards = [...state.tickets[0]?.cards, action.payload] 
        },
        remodedItem: (state, action) => {
            state.tickets = action.payload
        },
        addListTickets: (state, action) => {
            state.tickets = action.payload
        }
    }
})


export const addTicket = ticketSlice.actions
export const addListTickets = ticketSlice.actions
export default ticketSlice.reducer
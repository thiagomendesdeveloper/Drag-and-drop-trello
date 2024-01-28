import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { columnList } from '../../utils/colums';

const savedTickets = JSON.parse(localStorage.getItem('tasks') || '[]');

const initialState = {
  tickets: savedTickets.length > 0 ? savedTickets : columnList,
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
            state.tickets = state.tickets.map((item: any) => ({ 
                title: item.title,
                id: item.id,
                color: item.color,
                cards: item.cards.filter( (task: any) => Number(task.id) !== Number(action.payload.id))
            }))
        },
        addListTickets: (state, action) => {
            console.log('testes aqui')
            console.log(action.payload)
            state.tickets = [...action.payload]
        }
    }
})


export const addTicket = ticketSlice.actions
export const addListTickets = ticketSlice.actions
export const remodedItem = ticketSlice.actions
export default ticketSlice.reducer
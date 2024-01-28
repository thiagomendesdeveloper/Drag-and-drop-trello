import './style.css'
import { columnProps } from './types'
import TaskCard from '../TaskCard'
import { useDrop } from 'react-dnd';
import { taskCardProps } from './types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store'
import { addListTickets, remodedItem } from '../../redux/tickets/ticketSlice';

export default function Column(props: columnProps) {

    const cssProps = {
        background: props.headerColor,
    }

    const list = useSelector((state: RootState) => state.ticket)
    const Dispatch = useDispatch()

    const [collectedProps, drop] = useDrop(() => ({
        accept: 'ITEM',
        drop: (item) => setListItem(item),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop(),
        }),
    }))

    const setListItem = async (novo: any) => {
        await Dispatch(remodedItem.remodedItem(novo.props))
        const updateList = list.tickets.map((item: any) => ({
            title: item.title,
            id: item.id,
            color: item.color,
            cards: props.title === item.title
                ? [...item.cards, ...item.cards.filter((card: any) => card.id !== novo.props.id), novo.props]
                : [...item.cards]
        }))
        console.log(updateList)
        Dispatch(addListTickets.addListTickets(updateList))
    }

    return (
        <div ref={drop} className="Column-task">
            <header style={cssProps} className="header-task">
                <h3>{props.title}</h3>
            </header>
            <div className="content">
                {props.cards && props.cards.map((item: taskCardProps) => {
                    return (
                        <TaskCard key={item.id} id={item.id} descricao={item.descricao} responsavel={item.responsavel} tag={item.tag} upload={item.upload} />
                    )

                })}
            </div>
        </div>
    )
}
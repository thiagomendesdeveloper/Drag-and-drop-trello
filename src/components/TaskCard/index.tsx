import { Dropdown, MenuProps } from 'antd';
import './style.css'
import { taskCardProps } from './types'
import { useDrag } from 'react-dnd';
import { useDispatch } from 'react-redux';
import { addListTickets } from '../../redux/tickets/ticketSlice';
import { MoreOutlined } from '@ant-design/icons';


export default function TaskCard(props: taskCardProps) {

    const Dispatch = useDispatch()

    const [{ opacity }, dragRef] = useDrag(
        () => ({
            type: 'ITEM',
            item: { props },
            collect: (monitor) => ({
                opacity: monitor.isDragging() ? 0.5 : 1
            }),

        }),
        []
    )

    const removedItemList = () => {
        Dispatch(addListTickets.remodedItem(props))
    }

    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <div>
                    editar
                </div>
            ),
        },
        {
            key: '2',
            label: (
                <div onClick={removedItemList}>
                    excluir
                </div>
            ),
        },
    ];


    return (
        <div ref={dragRef} style={{ opacity }} className='card'>
            <img src={props.upload} alt="" />
            <span className='flag'>{props.tag}</span>
            <h4>{props.id}</h4>
            <p>{props.descricao}</p>
            <div className='button-cards'>
                <p>{props.responsavel}</p>
                <Dropdown menu={{ items }} placement="bottomLeft" arrow={{ pointAtCenter: true }}>
                 <MoreOutlined size={20} />
                </Dropdown>
            </div>
        </div>
    )
}
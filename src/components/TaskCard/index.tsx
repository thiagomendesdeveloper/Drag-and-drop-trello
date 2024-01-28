import './style.css'
import { taskCardProps } from './types'
import { useDrag } from 'react-dnd';


export default function TaskCard(props: taskCardProps) {

    const [{ opacity }, dragRef, preview] = useDrag(
        () => ({
            type: 'ITEM',
            item: { props },
            collect: (monitor) => ({
                opacity: monitor.isDragging() ? 0.5 : 1
            }),
            
        }),
        []
    )

    return (
        <div ref={dragRef} style={{ opacity }} className='card'>
            <img src={props.upload} alt="" />
            <span className='flag'>{props.tag}</span>
            <h4>{props.id}</h4>
            <p>{props.descricao}</p>
            <div>
                <p>{props.responsavel}</p>
            </div>
        </div>
    )
}
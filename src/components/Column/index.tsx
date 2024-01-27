import './style.css'
import { columnProps } from './types'
import TaskCard from '../TaskCard'
import { useDrop } from 'react-dnd';
import { taskCardProps } from './types';

export default function Column(props: columnProps) {

    const cssProps = {
        background: props.headerColor,
    }

    const [collectedProps, drop] = useDrop(() => ({
        accept: 'ITEM',
        drop: (item) => console.log(item),
        collect: (monitor) => ({
        isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop(),
      }),
    }))

    console.log()

    return (
        <div ref={drop} className="Column-task">
            <header style={cssProps} className="header-task">
                <h3>{props.title}</h3>
            </header>
            <div className="content">
                {props?.cards.map((item: taskCardProps) => {
                    return (
                        <TaskCard key={item.id} id={item.id} descricao={item.descricao} responsavel={item.responsavel} tag={item.tag} upload={item.upload} />
                    )

                })}
            </div>
        </div>
    )
}
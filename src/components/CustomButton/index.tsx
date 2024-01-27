import { PlusOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import './style.css'

export default function CustomButton(props: buttonProps) {

    const cssProps = {
        background: props.background,
        color: props.color,
    }

    return (
        <Button style={cssProps} className='Button' icon={<PlusOutlined />} type="primary" shape="round" onClick={props.onClick}>{props.text}</Button>
    )
}
import { Form, Input, Select } from 'antd'
import Dragger from 'antd/es/upload/Dragger'
import { InboxOutlined } from '@ant-design/icons'
import { propsForm } from './types'


export default function FormTicket(propsform: propsForm) {

    const { Option } = Select;

    return (
        <>
            <Form
                form={propsform.form}
                layout='vertical'
            >
                <Form.Item name="descricao" label="descricao">
                    <Input placeholder="Digite aqui" name='descricao' />
                </Form.Item>

                <Form.Item name="tag" label="tag">
                    <Select
                        placeholder="Select a option and change input text above"
                    >
                        <Option value="Reparo">Reparo</Option>
                        <Option value="Bug">Bug</Option>
                        <Option value="Feature">Feature</Option>
                        <Option value="Hotfix">Hotfix</Option>
                    </Select>
                </Form.Item>

                <Form.Item name="responsavel" label="responsavel">
                    <Select
                        placeholder="Select a option and change input text above"
                    >
                        <Option value="Thiago">Thiago</Option>
                        <Option value="Yudi">Yudi</Option>
                        <Option value="Elon Musk">Elon Musk</Option>
                        <Option value="einstein">einstein</Option>
                    </Select>
                </Form.Item>

                <Form.Item name="upload" label="upload">

                    <Dragger>
                        <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">Arraste uma imagem para anexar ao ticket</p>
                        <p className="ant-upload-hint">
                            Arraste uma imagem para anexar ao ticket
                        </p>
                    </Dragger>
                </Form.Item>
            </Form >
        </>

    )
}
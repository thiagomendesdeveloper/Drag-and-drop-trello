import { Form, Input, Select, UploadProps, message } from 'antd'
import Dragger from 'antd/es/upload/Dragger'
import { InboxOutlined } from '@ant-design/icons'
import { propsForm } from './types'
import { useEffect } from 'react';


export default function FormTicket(propsform: propsForm) {

    const { Option } = Select;

    // const props: UploadProps = {
    //     name: 'file',
    //     multiple: false,
    //     action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
    //     onChange(info) {
    //         const { status } = info.file;
    //         if (status !== 'uploading') {
    //             console.log(info.file, info.fileList);
    //         }
    //         if (status === 'done') {
    //             message.success(`${info.file.name} file uploaded successfully.`);
    //         } else if (status === 'error') {
    //             message.error(`${info.file.name} file upload failed.`);
    //         }
    //     },
    //     onDrop(e) {
    //         console.log('Dropped files', e.dataTransfer.files);
    //     },
    // };

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

                {/* <Form.Item name="upload" label="upload">

                    <Dragger>
                        <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">Arraste uma imagem para anexar ao ticket</p>
                        <p className="ant-upload-hint">
                            Arraste uma imagem para anexar ao ticket
                        </p>
                    </Dragger>
                </Form.Item> */}
            </Form >
        </>

    )
}
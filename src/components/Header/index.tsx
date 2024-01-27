import './style.css'
import logo from '../../assets/logo.png'
import CustomButton from '../CustomButton'
import { useState } from 'react'
import { Form, Modal } from 'antd'
import ModalFormTicket from '../FormTicket'
import { useDispatch } from 'react-redux'
import { addTicket } from '../../redux/tickets/ticketSlice'


export function Header() {
    const [open, setOpen] = useState(false)
    const [confirmLoading, setconfirmLoading] = useState(false)
    const [form] = Form.useForm();
    const dispatch = useDispatch()

    function showModal() {
        setOpen(true)
    }

    function gerarNumerosAleatorios() {
        var numerosAleatorios = [];
        for (var i = 0; i < 4; i++) {
            var numero = Math.floor(Math.random() * 10);
            numerosAleatorios.push(numero);
        }
    
        return numerosAleatorios.join('');
    }

    function handleOk() {
        setconfirmLoading(true)

        form
            .validateFields()
            .then((values) => {
                values.id = gerarNumerosAleatorios();
                dispatch(addTicket.addTicket(values))
            })
            .catch((errorInfo) => {
                console.log('Erro na validação do formulário:', errorInfo);
            });
        setconfirmLoading(false)
        setOpen(false)

    }

    function closeModal() {
        setOpen(false)
    }

    return (
        <header className='header'>
            <div className='container flex'>
                <a href="">
                    <img className='logo' src={logo} alt="" />
                </a>
                <CustomButton background='#4C12A1' color='#fff' text='Novo Ticket' onClick={showModal} />
                <Modal
                    title="Novo ticket"
                    open={open}
                    onOk={handleOk}
                    onCancel={closeModal}
                    confirmLoading={confirmLoading}
                >
                    <ModalFormTicket form={form} />
                </Modal>
            </div>
        </header>
    )
}
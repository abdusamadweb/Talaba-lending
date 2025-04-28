import './Application.scss'
import React, {useState} from 'react'
import logo from '../../../assets/images/logo.svg'
import {Link} from "react-router-dom"
import {Button, Form, Input} from "antd";
import {IMaskInput} from "react-imask";

const PhoneInput = React.forwardRef(({ value, onChange }, ref) => {
    return (
        <IMaskInput
            type="tel"
            mask="+998 00 000 00 00"
            lazy={false} // Показывает маску сразу
            placeholder="-"
            unmask={true} // Передает "чистый" номер в Form
            value={value} // Связывает с Form
            onAccept={onChange} // Передает изменения в Form
            inputRef={ref} // Ant Design ожидает, что ref будет передан в Input
        />
    );
});

const Application = () => {

    const [form] = Form.useForm()

    const [count, setCount] = useState(0)
    const [loading, setLoading] = useState(false)

    const onFormSubmit = (values) => {

        if (count === 0) {
            setLoading(true)

            setTimeout(() => {
                setCount(1)
                setLoading(false)
            }, 1000)

        } else if (count === 1) {
            setLoading(true)

            setTimeout(() => {
                setCount(2)
                setLoading(false)
            }, 1000)

        }

        const body = {
            ...values,
        }
        console.log(count, '--- count ---')
    }


    return (
        <div className='appl'>
            <div className="appl__header">
                <div className="container row between align-center">
                    <img src={logo} alt="logo"/>
                    <Link className='close no-copy grid-center' to='/'>
                        <i className="fa-solid fa-xmark"/>
                    </Link>
                </div>
            </div>
            <div className="container h100 grid-center">
                <div className="appl__content grid-center">
                    <div className='wrapper'>
                        <div>
                            <p className="title">“Kokand University” Andijon filiali</p>
                            <p className="subtitle">"Qabul-2025" platformasiga xush kelibsiz!</p>
                            <p className="desc">Iltimos, tizimga kiring yoki ro‘yxatdan o‘ting.</p>
                        </div>
                        <Form
                            className='form'
                            onFinish={onFormSubmit}
                            layout='vertical'
                            form={form}
                        >

                            {
                                count < 1 &&
                                <Form.Item
                                    name='phone_number'
                                    label='Telefon raqam'
                                    rules={[{required: true, message: ''}]}
                                >
                                    <PhoneInput/>
                                </Form.Item>
                            }
                            {
                                count < 2 ?
                                    <Form.Item
                                        name='phone_number'
                                        label='Telefon raqam'
                                        rules={[{required: true, message: ''}]}
                                    >
                                        <PhoneInput/>
                                    </Form.Item>
                                    :
                                    <div>
                                        2
                                    </div>
                            }

                            <Button
                                className='btn'
                                loading={loading}
                                size='large'
                                htmlType="submit"
                            >
                                Tasdiqlash
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Application;
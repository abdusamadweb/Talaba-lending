import './Application.scss'
import React, {useEffect, useState} from 'react'
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

    // sms timer
    const [active, setActive] = useState(false)
    const [timeLeft, setTimeLeft] = useState(120)


    // submit form
    const onFormSubmit = (values) => {

        if (count === 0) {
            setLoading(true)

            startTimer()

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


    // timer
    useEffect(() => {
        if (!active) return;

        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(timer)
                    setActive(false)
                    return 0
                }
                return prev - 1
            })
        }, 1000)

        return () => clearInterval(timer)
    }, [active])

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60)
        const secs = seconds % 60
        return `${minutes}:${secs < 10 ? "0" : ""}${secs}`
    }

    function startTimer() {
        setTimeLeft(120)
        setActive(true)
    }

    const retryOnFinish = () => {

        startTimer()
        // mutation.mutate(sms.phone_number)
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

                            {count < 2 && (
                                <Form.Item
                                    name='phone_number'
                                    label='Telefon raqam'
                                    rules={[{ required: true, message: '' }]}
                                >
                                    <PhoneInput />
                                </Form.Item>
                            )}

                            {count === 1 && (
                                <div>
                                    <Form.Item
                                        name='code'
                                        label='Kodni kiriting'
                                        rules={[{ required: true, message: '' }]}
                                    >
                                        <Input type='tel' placeholder='Kodni kiriting' />
                                    </Form.Item>
                                    <div className='sms-retry'>
                                        <p className='txt'>SMS ni qayta yuborish:</p>
                                        {
                                            active ? <span className='sms-btn'>{formatTime(timeLeft)}</span>
                                                :
                                                <button className='sms-btn' onClick={retryOnFinish} type='button'>Qayta
                                                    yuborish</button>
                                        }
                                    </div>
                                </div>
                            )}

                            {count > 1 && (
                                <div>
                                    <Form.Item
                                        name='password'
                                        label='Parolni kiriting'
                                        rules={[{ required: true, message: '' }]}
                                    >
                                        <Input type='text' placeholder='Parolni kiriting' />
                                    </Form.Item>
                                    <Form.Item
                                        name='cPassword'
                                        label='Parolni tasdiqlang'
                                        rules={[{ required: true, message: '' }]}
                                    >
                                        <Input type='text' placeholder='Parolni kiriting' />
                                    </Form.Item>
                                </div>
                            )}

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
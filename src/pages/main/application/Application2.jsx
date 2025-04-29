import React from 'react';
import logo from "../../../assets/images/logo.svg";
import {Link} from "react-router-dom";
import {Form} from "antd";
import IMask from "imask";
import {IMaskInput} from "react-imask";

const PassportInput = React.forwardRef(({ value, onChange }, ref) => {
    return (
        <IMaskInput
            mask="aa 0000000" // Две буквы и 7 цифр
            definitions={{
                a: /[a-zA-Z]/, // Разрешаем и строчные, и заглавные буквы
                0: /[0-9]/, // Только цифры
            }}
            lazy={false} // Показывает маску сразу
            unmask={true} // Передает "чистое" значение в Form
            value={value}
            onAccept={(val) => onChange(val.toUpperCase())}
            inputRef={ref}
        />
    );
});

const BirthDateInput = React.forwardRef(({ value, onChange }, ref) => {
    return (
        <IMaskInput
            type='tel'
            mask="0000-00-00" // Формат YYYY-MM-DD
            blocks={{
                0: {
                    mask: IMask.MaskedRange,
                    from: 0,
                    to: 9,
                },
            }}
            lazy={false} // Показывает маску сразу
            placeholder="yyyy-mm-dd"
            unmask={false}
            value={value}
            onAccept={onChange} // Обновляет значение в Form
            inputRef={ref}
        />
    );
});

const Application2 = () => {

    const [form] = Form.useForm()


    const onFormSubmit = (values) => {



        const body = {
            ...values,
        }
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
                            <p className="title">Malumotlarni toldiring</p>
                        </div>
                        <Form
                            className='form'
                            onFinish={onFormSubmit}
                            layout='vertical'
                            form={form}
                        >
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Application2;
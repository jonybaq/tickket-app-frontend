import React from 'react';
import {Navigate} from "react-router-dom";
import { Form, Input, Button, InputNumber, Typography, Divider } from 'antd';
import { LoginOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router';
import { useHideMenu } from '../hooks/useHideMenu';
import { getInfoLocalStorage } from '../helpers/funciones';

const { Title, Text } = Typography;
export const LoginPage = () => {
    useHideMenu(false);
    const navigate = useNavigate();
    const datos=getInfoLocalStorage();
    if (datos.agente) {
        console.log(`escritorio`);
         return <Navigate replace to="/escritorio" />;
    }
    const onFinish = (values) => {
        console.log('Success:', values);
        localStorage.setItem('agente',values.agente);
        localStorage.setItem('cubiculo',values.cubiculo);
        navigate('/escritorio');
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <>
            <Title level={2} >Ingresar</Title>
            <Text>Ingrese su nombre y número de cubiculo</Text>
            <Divider/>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 14,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Nombre del Agente"
                    name="agente"
                    rules={[
                        {
                            required: true,
                            message: 'Ingrese el nombre de agente'
                        }
                    ]}
                    hasFeedback
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Num. de Cubiculo"
                    name="cubiculo"
                    rules={[
                        {
                            required: true,
                            message: 'Ingrese el # de cubiculo!',
                        },
                    ]}
                    hasFeedback
                >
                    <InputNumber min={1} max={5} />
                </Form.Item>


                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 14,
                    }}
                >
                    <Button type="primary" htmlType="submit" shape="round">
                        <LoginOutlined />
                        Ingresar
                    </Button>
                </Form.Item>
            </Form>
        </>

    )
}

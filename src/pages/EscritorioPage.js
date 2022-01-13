import { CloseCircleOutlined, RightCircleOutlined } from '@ant-design/icons';
import { Button, Col, Divider, Row, Typography } from 'antd'
import React, { useContext, useEffect, useState } from 'react';
import { Navigate, useNavigate } from "react-router-dom";
import { AppContext } from '../context/AppContext';
import { getInfoLocalStorage } from '../helpers/funciones';
import { useHideMenu } from '../hooks/useHideMenu';
const { Title, Text } = Typography;
export const EscritorioPage = () => {
    useHideMenu(false);
    const { socket } = useContext(AppContext);
    const navigate = useNavigate();
    const datos = getInfoLocalStorage();
    const [state, setstate] = useState(0);
    useEffect(() => {
        if (datos) {
            //console.log(`object`);
            socket.emit('ultimo-ticket',datos?.agente,(ticket)=>{
                //console.log(ticket);
                setstate(ticket.numero);
            });
        }
    }, []);
    if (!datos.agente) {
        console.log(`login`);
        return <Navigate replace to="/login" />;
    }
    const salir = () => {
        localStorage.clear();
        navigate('/login');
    }
    const siguienteTicket = () => {
        socket.emit('asignar-ticket', { agente: datos.agente, cubiculo: datos.cubiculo }, (ticket) => {
                setstate(ticket.numero);
        });
    }
 
    return (
        <>
            <Row>
                <Col span={20}>
                    <Title level={2}>{datos.agente}</Title>
                    <Text>Usted esta trabajando en el escritorio: </Text>
                    <Text type='success' style={{ fontSize: 15, fontWeight: 'bold' }} >{datos.cubiculo}</Text>
                </Col>
                <Col span={4} align="right">
                    <Button shape="round" type="danger" onClick={salir}>
                        <CloseCircleOutlined />
                        Salir
                    </Button>
                </Col>
            </Row>
            <Divider />
            <Row>
                <Col>
                    {
                    state !== 0 &&
                        (<>
                            <Text>Esta atendiendo el ticket número: </Text>
                            <Text style={{ fontSize: 30, fontWeight: 'bold' }} type="warning"> {state} </Text>
                        </>
                        )
                    }
                </Col>
            </Row>
            <Row>
                <Col offset={18} span={6} align="right" >
                    <Button shape="round" type="primary" onClick={siguienteTicket}>
                        <RightCircleOutlined />
                        Siguiente
                    </Button>
                </Col>
            </Row>

        </>
    )
}

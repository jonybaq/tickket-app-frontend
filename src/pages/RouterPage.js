import React, { useContext } from 'react';
import { Layout, Menu } from 'antd';
import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';
import {
    BrowserRouter as Router,
    Routes,
    Route, Link
} from "react-router-dom";
import { LoginPage } from './LoginPage';
import { ColaPage } from './ColaPage';
import { TickePage } from './TickePage';
import { EscritorioPage } from './EscritorioPage';
import { AppContext } from '../context/AppContext';

const { Sider, Content } = Layout;

export const RouterPage = () => {
    const {hideMenu} = useContext(AppContext);
    return (
        <Router>
            <Layout style={{ height: '100vh' }}>
                <Sider collapsedWidth="0" breakpoint="md" hidden={hideMenu}>
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" icon={<UserOutlined />}>
                            <Link to="/ingresar">Ingresar</Link>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                            <Link to="/cola">Cola</Link>
                        </Menu.Item>
                        <Menu.Item key="3" icon={<UploadOutlined />}>
                            <Link to="/ticket">Crear Ticket</Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                         <Routes>

                            <Route exact path="/ingresar" element={<LoginPage />} />
                            <Route exact path="/cola" element={<ColaPage />} />
                            <Route exact path="/ticket" element={<TickePage />} />
                            <Route exact path="/escritorio" element={<EscritorioPage />} />
                            <Route path="/*" element={<LoginPage />} />  
                                               
                        </Routes>
                    </Content>
                </Layout>
            </Layout>
        </Router>

    )
}

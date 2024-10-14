import React from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined, BookOutlined, SearchOutlined } from '@ant-design/icons';
import './SideMenu.css';

const { Sider } = Layout;

const SideMenu = () => {
  return (
    <Sider width={72} className="sider-menu">
      <Menu className="menu-items" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<img src="/logo.png" alt="Logo" style={{ width: '3px' }} />} /> {/* Aumentando o tamanho do ícone */}
        <Menu.Item key="2" icon={<UserOutlined style={{ fontSize: '20px' }} />} /> {/* Aumentando o tamanho do ícone */}
        <Menu.Item key="3" icon={<BookOutlined style={{ fontSize: '20px' }} />} /> {/* Aumentando o tamanho do ícone */}
        <Menu.Item key="4" icon={<SearchOutlined style={{ fontSize: '20px' }} />} /> {/* Aumentando o tamanho do ícone */}
      </Menu>
    </Sider>
  );
};

export default SideMenu;

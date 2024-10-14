import React from 'react';
import { Layout, Button, Table } from 'antd';
import { ArrowLeftOutlined , ArrowRightOutlined } from '@ant-design/icons';
import SideMenu from '../Components/SideMenu';
import './Prova.css'


const { Content } = Layout;

const Prova = () => {
  const columns = [
    {
      title: 'Opções',
      dataIndex: 'option',
      key: 'option',
    },
    {
      title: 'Alternativas',
      dataIndex: 'alternative',
      key: 'alternative',
    },
    {
      title: 'Progresso',
      children: [
        {
          title: '',
          dataIndex: 'progress1',
          key: 'progress1',
        },
        {
          title: '',
          dataIndex: 'progress2',
          key: 'progress2',
        },
        {
          title: '',
          dataIndex: 'progress3',
          key: 'progress3',
        },
        {
          title: '',
          dataIndex: 'progress4',
          key: 'progress4',
        },
      ],
    },
  ];

  const data = [
    {
      key: '1',
      option: 'A)',
      alternative: 'Lorem ipsum',
      progress1: 'a',
      progress2: 'b',
      progress3: 'c',
      progress4: '4',
    },
    {
      key: '2',
      option: 'B)',
      alternative: 'Lorem ipsum',
      progress1: '6',
      progress2: '7',
      progress3: '8',
      progress4: '9',
    },
    {
        key: '3',
        option: 'C)',
        alternative: 'Lorem ipsum',
        progress1: 'a',
        progress2: '7',
        progress3: 'd',
        progress4: 'e',
    },
    {
        key: '4',
        option: 'D)',
        alternative: 'Lorem ipsum',
        progress1: 'a',
        progress2: '7',
        progress3: 'd',
        progress4: 'e',
    },
    {
        key: '3',
        option: 'E)',
        alternative: 'Lorem ipsum',
        progress1: 'a',
        progress2: '7',
        progress3: 'd',
        progress4: 'e',
    },
    // Adicione mais linhas conforme necessário
  ];

  return (
    <Layout className="exam-page">
      <SideMenu />
      <Layout style={{ padding: '0 80px' }}>
        <Content style={{ margin: '24px 16px 0' }}>
          <div>
            <h1>Prova 1</h1>
            <div  className="navigation-buttons" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <ArrowLeftOutlined className='ArrowButton' />
                <span style={{ marginLeft: '8px' }}>Questão anterior</span>
              </div>
              <h2>Questão 4</h2>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ marginRight: '8px' }}>Próxima questão</span>
               <ArrowRightOutlined className='ArrowButton'/>
              </div>
            </div>

            <div className="div-content" style={{ marginTop: '24px', border: '1px solid #d9d9d9', padding: '16px' }}>
              
              
            </div>

            <Table
              className="table-alternatives"
              style={{ marginTop: '20px' }}
              columns={columns}
              dataSource={data}
              pagination={false}
            />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Prova;

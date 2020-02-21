
import React, { Suspense } from 'react';
import { useHistory } from "react-router-dom";

import { Layout, Menu, Spin } from 'antd';
const { Header, Content, Footer } = Layout;

const menu = [
  { key: '/authors', text: 'Authors' },
  { key: '/books', text: 'Books' },
];

const findKeyBasedOnPath = (location) => menu.find(({ key }) => key === location)?.key || menu[0].key;

export default ({ children }) => {
  const history = useHistory();
  const currentKey = findKeyBasedOnPath(history.location.pathname);

  const handleRouteChange = ({ key }) => { history.push(key); }

  return (
    <Layout className="layout">
      <Header>
        <Menu
          theme="dark"
          mode="horizontal"
          style={{ lineHeight: '64px' }}
          defaultSelectedKeys={[currentKey]}
          onClick={handleRouteChange}
        >
          {menu.map(({ key, text }) => (
            <Menu.Item key={key}>{text}</Menu.Item>
          ))}
        </Menu>
      </Header>
      <Content>
        <div style={{ padding: '48px' }}>
          {children}
        </div>
      </Content>
      <Footer>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
}
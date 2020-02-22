
import React from 'react';
import { useHistory } from "react-router-dom";

import { Layout, Menu } from 'antd';
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
          selectedKeys={[currentKey]}
          onClick={handleRouteChange}
        >
          {menu.map(({ key, text }) => (
            <Menu.Item key={key} className="e2e-menu-item">{text}</Menu.Item>
          ))}
        </Menu>
      </Header>
      <Content>
        <div style={{ padding: '48px', minHeight: 'calc(100vh - 64px - 69px)' }} className="e2e-container">
          {children}
        </div>
      </Content>
      <Footer>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
}
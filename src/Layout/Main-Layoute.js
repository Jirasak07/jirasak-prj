import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import './Layout.css'
import { Layout,theme } from "antd";
import Menus from "./Menus";
import {BiSolidLeaf} from 'react-icons/bi'

const { Header, Content, Footer, Sider } = Layout;
const MainLayoute = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: "100vh"
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        className="sidemenu"

      >
        <div className="d-flex justify-content-center py-3" >
              <BiSolidLeaf size={50} color="#3c096c" /> 
        </div>
   
        <Menus/>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            height:'40px',
            borderBottom:'1px solid #dee2e6',
            fontWeight:'600'
          }}
          className="d-flex justify-content-center align-items-center head bg-danger"
        >
        <span className="text-capitalize" >plant genetic management system</span> 
        <div className="d-flex bg-info" style={{justifySelf:'end'}} >Logout</div>
        </Header>
        <Content className="container-fluid " style={{backgroundColor:'#f8f9fa',overflow:'auto',maxHeight:"calc(100dvh - 40px)"}}>
          <div style={{ height: "10px" }}></div>
            <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayoute;

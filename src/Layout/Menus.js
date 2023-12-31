import { Menu } from "antd";
import SubMenu from "antd/es/menu/SubMenu";
import React from "react";
import { NavLink } from "react-router-dom";
import {BiSolidLeaf} from 'react-icons/bi'
import {BiSolidUser} from 'react-icons/bi'
import {IoNewspaperSharp} from 'react-icons/io5'
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  HomeFilled,
} from "@ant-design/icons";

function Menus() {
  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={window.location.pathname}
      //   items={items}
    >
      <Menu.Item key={"/home"} icon={<HomeFilled/>} >
      <NavLink
          to="/home"
          className="d-flex align-items-center pl-2"
          style={{ textDecoration: "none", gap: "5px" }}
        >
           หน้าแรก
        </NavLink>
      </Menu.Item>
      <SubMenu
        key={"sub"}
        title={"พืชพันธ์"}
        icon={<BiSolidLeaf/>}
      >
         <Menu.Item key={"/list-data"}>
          <NavLink
            to="/list-data"
            className="d-flex align-items-center"
            style={{ textDecoration: "none", gap: "5px" ,fontSize:'12px'}}
          >
            - รายการพันธุกรรมพืช
          </NavLink>
        </Menu.Item>
      </SubMenu>
      <SubMenu key={'sub-4'} icon={<BiSolidUser/>} title={"ผู้ใช้งาน"} >
          <Menu.Item key={'/list-user'}>
          <NavLink
            to="/list-user"
            className="d-flex align-items-center "
            style={{ textDecoration: "none", gap: "5px" ,fontSize:'12px'}}
          >
            - รายการผู้ใช้งาน
          </NavLink>
        </Menu.Item>
          <Menu.Item key={'/manage-user'}>
          <NavLink
            to="/manage-user"
            className="d-flex align-items-center "
            style={{ textDecoration: "none", gap: "5px" ,fontSize:'12px'}}
          >
            - จัดการสิทธิ์
          </NavLink>
        </Menu.Item>
      </SubMenu>
      <Menu.Item key={"/report"} icon={<IoNewspaperSharp/>} >
       <NavLink to={"/report"} > รายงานสรุป</NavLink> 
      </Menu.Item>
    </Menu>
  );
}

export default Menus;

import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  MailOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  ContainerOutlined,
  LockOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Space, } from "antd";
import { Button, Dropdown } from "antd";
import type { MenuProps } from "antd";
import Worktime from "./Category/Worktime/Worktime";

import { Image } from "antd";
import "./GateWayStag.css";

type MenuItem = Required<MenuProps>["items"][number];
const { Header, Sider, Content } = Layout;
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}
const items: MenuItem[] = [
  getItem("Quản lý tài khoản", "sub1", <MailOutlined />, [
    getItem("Nhóm quyền", "1"),
    getItem("Chức năng", "2"),
    getItem("Tham số", "3"),
    getItem("Tài khoản", "4"),
  ]),

  getItem("Quản lý danh mục", "sub2", <UploadOutlined />, [
    getItem("Tỉnh/TP", "5"),
    getItem("Quận/Huyện", "6"),
    getItem("Xã/Phường", "7"),
    getItem("Đơn vị y tế", "8"),
    getItem("Danh sách dịch vụ", "9"),
    getItem("Chuyên khoa", "10"),
    getItem("Ca làm việc", "11"),
    getItem("Khung giờ", "12"),
    getItem("Chuyên mục", "13"),
    getItem("Banner/Popup", "14"),
  ]),
  getItem("Quản lý gói khám", "sub3", <UserOutlined />, [
    getItem("Gói khám", "15"),
    getItem("Loại gói khám", "16"),
    getItem("Theo đối tác", "17"),
  ]),
  getItem("Quản lý bệnh nhân", "sub4", <ContainerOutlined />),
  getItem("Video call", "sub5", <UserOutlined />, [
    getItem("Quản lý lịch trực", "18"),
    getItem("Theo dõi cuộc gọi video call", "19"),
  ]),
  getItem("Quản lý bác sĩ", "sub5", <ContainerOutlined />),
  getItem("Chỉ định xét nghiệm", "sub6", <ContainerOutlined />),
  getItem("Quản lý tin tức", "sub7", <UserOutlined />, [
    getItem("Bài viết", "20"),
  ]),
  getItem("Quản lý Banner/Popup", "sub8", <ContainerOutlined />),
  getItem("Hỏi đáp", "sub9", <UserOutlined />, [
    getItem("Quản lý câu hỏi", "21"),
    getItem("Quản lý câu trả lời", "22"),
  ]),
  getItem("Thiết lập chung", "sub10", <ContainerOutlined />),
  getItem("Báo cáo thống kê", "sub11", <ContainerOutlined />),
  getItem("Quản lý thông báo", "sub12", <UserOutlined />, [
    getItem("App User", "23"),
    getItem("App Doctor", "24"),
  ]),
];
//TODO: User NavBar
const UserNavBar = () => {
const items: MenuProps["items"] = [
  {
    key: "1",
    icon: <UserOutlined />,
    label: <a href="#">Tài khoản</a>,
  },
  {
    key: "2",
    icon: <LockOutlined />,
    label: <a href="#">Đổi mật khẩu</a>,
  },
  {
    key: "3",
    icon: <PoweroffOutlined />,
    label: <a href="#">Đăng xuất</a>,
  },
];
  return (
    <>
      <Menu mode="horizontal">
        <Menu.SubMenu key={"SubMenu"} title="Quản trị viên">
          <Menu.Item key="one" icon={<UserOutlined />}>
            Tài khoản
          </Menu.Item>
          <Menu.Item key="two" icon={<LockOutlined />}>
            Đổi mật khẩu
          </Menu.Item>
          <Menu.Item key="three" icon={<PoweroffOutlined />}>
            Đăng xuất
          </Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </>
  );
}
//TODO: Footer
const Footer = () => {
  return (
    <footer className="footer"
    >
      <span
        className="copyright"
      >
        MedOn Admin ©2021 Design By MEDON JSC
      </span>
    </footer>
  );
}
const GateWayStag = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          {/* <a href="#">
            <Image
              src="https://gatewaystag.medon.vn/cms/static/media/logo-trang-01.46dbc2d7.png"
              width={150}
              style={{ padding: 0 }}
              preview={false}
            />
          </a> */}
        </div>
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={[""]}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0, display: "flex", justifyContent: "space-between" }}>
          <div>
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: () => setCollapsed(!collapsed),
              }
            )}
          </div>
          <div>
            <UserNavBar/>
          </div>
        </Header>
        <Content className="ant-layout-content content">
          <Worktime />
        </Content>
        <Footer />
      </Layout>
    </Layout>
  );
};

export default GateWayStag;

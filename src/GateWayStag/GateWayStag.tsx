import React, { useState } from "react";
import {
  NotificationOutlined,
  BarChartOutlined,
  SettingOutlined,
  QuestionCircleOutlined,
  FileImageOutlined,
  ProfileOutlined,
  ExceptionOutlined,
  ContactsOutlined,
  UnorderedListOutlined,
  UsergroupAddOutlined,
  WhatsAppOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ContainerOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar } from "antd";
import { Layout, Menu, Space } from "antd";
import type { MenuProps } from "antd";
import UserNavBar from "./UserNavBar/UserNavBar";
import { Typography } from "antd";
import Worktime from "./Worktime/Worktime";
import Footer from "./Footer/Footer";
import { Image } from "antd";
import "./GateWayStag.css";

const { Title, Text } = Typography;
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
  getItem("Quản lý tài khoản", "sub1", <ContactsOutlined />, [
    getItem("Nhóm quyền", "1"),
    getItem("Chức năng", "2"),
    getItem("Tham số", "3"),
    getItem("Tài khoản", "4"),
  ]),

  getItem("Quản lý danh mục", "sub2", <UnorderedListOutlined />, [
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
  getItem("Quản lý gói khám", "sub3", <ContainerOutlined />, [
    getItem("Gói khám", "15"),
    getItem("Loại gói khám", "16"),
    getItem("Theo đối tác", "17"),
  ]),
  getItem("Quản lý bệnh nhân", "sub4", <UsergroupAddOutlined />),
  getItem("Video call", "sub5", <WhatsAppOutlined />, [
    getItem("Quản lý lịch trực", "18"),
    getItem("Theo dõi cuộc gọi video call", "19"),
  ]),
  getItem("Quản lý bác sĩ", "sub6", <UsergroupAddOutlined />),
  getItem("Chỉ định xét nghiệm", "sub7", <ExceptionOutlined />),
  getItem("Quản lý tin tức", "sub8", <ProfileOutlined />, [
    getItem("Bài viết", "20"),
  ]),
  getItem("Quản lý Banner/Popup", "sub9", <FileImageOutlined />),
  getItem("Hỏi đáp", "sub10", <QuestionCircleOutlined />, [
    getItem("Quản lý câu hỏi", "21"),
    getItem("Quản lý câu trả lời", "22"),
  ]),
  getItem("Thiết lập chung", "sub11", <SettingOutlined />),
  getItem("Báo cáo thống kê", "sub12", <BarChartOutlined />),
  getItem("Quản lý thông báo", "sub13", <NotificationOutlined />, [
    getItem("App User", "23"),
    getItem("App Doctor", "24"),
  ]),
];
//TODO: User NavBar

const GateWayStag = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        width={255}
        collapsedWidth={0}
      >
        <header className="logo">
          <div className="imagelogo">
            <Image
              src="https://gatewaystag.medon.vn/cms/static/media/logo-trang-01.46dbc2d7.png"
              width={"150px"}
              height={60}
              preview={false}
            />
          </div>
          <div className="avtadmin">
            <div>
              <Avatar
                size={64}
                icon={<UserOutlined />}
                style={{ backgroundColor: "#BFBFBF" }}
              />
            </div>
            <div className="info">
              <Title level={4} style={{ color: "white", }}>
                Quản trị viên
              </Title>
              <p style={{ color: "#7f7f7f", fontSize: "1rem" }}>
                admin@gmail.com
              </p>
            </div>
          </div>
        </header>
        <Menu
          // subMenuCloseDelay={0.3}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={[""]}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
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
            <UserNavBar />
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

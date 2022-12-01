import { Avatar, Menu, MenuProps } from "antd";
import {
  UserOutlined,
  LockOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";

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
      <Menu mode="horizontal" style={{ fontSize: "20px" }}>
        <Menu.SubMenu
          key={"SubMenu"}
          title="Quản trị viên"
        >
          <Menu.Item key="one" icon={<UserOutlined />}>
            Tài khoản
          </Menu.Item>
          <Menu.Item key="two" icon={<LockOutlined />}>
            Đổi mật khẩu
          </Menu.Item>
          <Menu.Item key="three" icon={<PoweroffOutlined />} danger>
            Đăng xuất
          </Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </>
  );
};
export default UserNavBar;

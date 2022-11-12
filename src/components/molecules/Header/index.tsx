import React from "react";
import { HeaderWrapper, Hamburger, Menu } from "./styles";
import { HeaderProps } from "./types";
import { Link } from "@/src/components";
import { paths } from "@/src/paths";
import { useAuth0 } from "@auth0/auth0-react";
import { PoweroffOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Dropdown, Menu as Settings } from "antd";

export const Header: React.FC<HeaderProps> = ({ showSidebar }) => {
  const { user, logout } = useAuth0();

  const setting = (
    <Settings
      style={{ padding: "10px" }}
      items={[
        {
          label: "Account",
          key: "1",
          icon: <UserOutlined />,
          onClick: () => {},
        },
        {
          label: "Logout",
          key: "2",
          icon: <PoweroffOutlined />,
          onClick: () => logout({ returnTo: `${window.location.origin}/` }),
        },
      ]}
    />
  );
  return (
    <HeaderWrapper>
      <Hamburger onClick={showSidebar} />
      <Menu>
        <Link href={paths.publicScope.go()}>PUBLIC SCOPE</Link>
        <Link href={paths.privateScope.go()}>PRIVATE SCOPE</Link>
      </Menu>
      <Dropdown overlay={setting} placement="bottomLeft" arrow>
        <Avatar size={"large"} src={user?.picture} />
      </Dropdown>
    </HeaderWrapper>
  );
};

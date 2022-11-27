import React from "react";
import { HeaderWrapper, Hamburger, Menu, NavElement } from "./styles";
import { HeaderProps } from "./types";
import { Flex, LabjackMenu, Link } from "@/src/components";
import { paths } from "@/src/paths";
import { useAuth0 } from "@auth0/auth0-react";
import { PoweroffOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Dropdown, Menu as Settings } from "antd";
import { useRouter } from "next/router";

export const Header: React.FC<HeaderProps> = ({ showSidebar }) => {
  const { user, logout } = useAuth0();
  const router = useRouter();
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
        <Link href={paths.publicScope.go()}>
          <NavElement isActive={router.pathname.includes("public")}>
            PUBLIC SCOPE
          </NavElement>
        </Link>
        <Link href={paths.privateScope.go()}>
          <NavElement isActive={router.pathname.includes("private")}>
            PRIVATE SCOPE
          </NavElement>
        </Link>
      </Menu>
      <Flex align="center" gap="25px">
        <LabjackMenu />
        <Dropdown overlay={setting} placement="bottomLeft" arrow>
          <Avatar size={"large"} src={user?.picture} />
        </Dropdown>
      </Flex>
    </HeaderWrapper>
  );
};

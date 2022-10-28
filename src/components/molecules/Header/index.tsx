import React from "react";
import { HeaderWrapper, Hamburger, Menu } from "./styles";
import { HeaderProps } from "./types";
import { Link } from "@/src/components";

export const Header: React.FC<HeaderProps> = ({ showSidebar }) => {
  return (
    <HeaderWrapper>
      <Hamburger onClick={showSidebar} />
      <Menu>
        <Link href={"/"}>PUBLIC</Link>
        <Link href={"/"}>PRIVATE</Link>
      </Menu>
    </HeaderWrapper>
  );
};

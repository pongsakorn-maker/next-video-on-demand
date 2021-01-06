import React from "react";
import {
  Sidebar,
  Logo,
  LogoText,
  DropdownItem,
  Item,
  Icon,
  InputItem,
} from "react-sidebar-ui";
import "react-sidebar-ui/dist/index.css";
import Link from "next/link";

export default function Sidebars() {
  return (
    <div>
      <Sidebar bgColor="black" isCollapsed={false}>
        <Logo image="/book.png" imageName="react logo" />
        <Link href="/">
          <Item bgColor="black">
            <Icon>
              <i className="fas fa-home" />
            </Icon>
            Home
          </Item>
        </Link>
        <Link href="/playlist">
          <Item bgColor="black">
            <Icon>
              <i className="fas fa-list"></i>
            </Icon>
            Playlist
          </Item>
        </Link>
        <Link href="/watch">
          <Item bgColor="black">
            <Icon>
            <i className="fas fa-play-circle"></i>
            </Icon>
            Watch
          </Item>
        </Link>
      </Sidebar>
    </div>
  );
}

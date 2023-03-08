/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { ListContainer, NavItem } from "./navItems.styles";
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../responsive";
import menuStyles from "../navbar/menu.styles";

export function NavItems() {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });
  const menuChoices = ["Home", "Cars", "Services", "Contact Us"];
  if (isMobile) {
    return (
      <Menu right styles={menuStyles}>
        <ListContainer>
          {menuChoices.map((choice, i) => (
            <NavItem menu key={i}>
              <a href="#">{choice}</a>
            </NavItem>
          ))}
        </ListContainer>
      </Menu>
    );
  }
  return (
    <ListContainer>
      {menuChoices.map((choice, i) => (
        <NavItem key={i}>
          <a href="#">{choice}</a>
        </NavItem>
      ))}
    </ListContainer>
  );
}

import React from "react";
import { Logo } from "../logo/logo.components";
import { NavItems } from "../navItems/navItems.component";
import { NavbarContainer } from "./navbar.styles";

export function Navbar() {
  return (
    <NavbarContainer>
      <div>
        <Logo />
      </div>
      <NavItems />
    </NavbarContainer>
  );
}

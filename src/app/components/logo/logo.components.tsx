import React from "react";
import CarLogoImg from "../../../assets/car-logo.png";
import { LogoContainer, Image, LogoText } from "./logo.styles";

export function Logo() {
  return (
    <LogoContainer>
      <Image>
        <img src={CarLogoImg} alt="" />
      </Image>
      <LogoText>Yourcar.</LogoText>
    </LogoContainer>
  );
}

import React from "react";
import CarLogoImg from "../../../assets/car-logo.png";
import CarLogoDarkImg from "../../../assets/car-logo-dark.png";
import { LogoContainer, Image, LogoText } from "./logo.styles";

interface ILogoProps {
  color?: "white" | "dark";
  bgColor?: "white" | "dark";
}

export function Logo(props: ILogoProps) {
  const { color, bgColor } = props;
  return (
    <LogoContainer>
      <Image>
        <img src={bgColor === "white" ? CarLogoImg : CarLogoDarkImg} alt="" />
      </Image>
      <LogoText color={color || "dark"}>Yourcar.</LogoText>
    </LogoContainer>
  );
}

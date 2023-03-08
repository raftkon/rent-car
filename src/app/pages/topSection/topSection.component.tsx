import React from "react";
import {
  BlobContainer,
  ButtonsContainer,
  Descritption,
  LeftContainer,
  RightContainer,
  Slogan,
  StandaloneCar,
  TopSectionContainer,
} from "./topSection-styles";
import MclarenCarImg from "../../../assets/mclaren-orange-big.png";
import BlobImg from "../../../assets/blob.svg";
import { Button } from "../../components/button/button.component";

export function TopSection() {
  return (
    <TopSectionContainer>
      <LeftContainer>
        <Slogan>Rent The Best Quality Car's With Us</Slogan>
        <Descritption>
          Always choose the best car from our local stores or order it remotely
          at the best prive for you and get the best quality cars for as long as
          you like
        </Descritption>
        <ButtonsContainer>
          <Button theme="outlined" text="Book Your Ride" />
          <Button theme="filled" text="Sell Your Car" />
        </ButtonsContainer>
      </LeftContainer>
      <RightContainer>
        <BlobContainer>
          <img src={BlobImg} alt="" />
        </BlobContainer>
        <StandaloneCar>
          <img src={MclarenCarImg} alt="" />
        </StandaloneCar>
      </RightContainer>
    </TopSectionContainer>
  );
}

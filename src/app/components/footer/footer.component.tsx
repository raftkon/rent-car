import { Logo } from "../logo/logo.components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import {
  AboutContainer,
  AboutText,
  BottomContainer,
  CopyrightText,
  FooterContainer,
  HeaderTitle,
  HorizontalContainer,
  InnerContainer,
  LinkList,
  ListItem,
  RedIcon,
  SectionContainer,
  SmallText,
} from "./footer.styles";

export function Footer() {
  return (
    <FooterContainer>
      <InnerContainer>
        <AboutContainer>
          <Logo color="white" bgColor="dark" />
          <AboutText>
            Yourcar is a Car renting and selling company located in many
            countries across the world which has hogh quality cars and top rated
            services.
          </AboutText>
        </AboutContainer>
        <SectionContainer>
          <HeaderTitle>Our links</HeaderTitle>
          <LinkList>
            <ListItem>
              <a href="#">Home</a>
            </ListItem>
            <ListItem>
              <a href="#">About Us</a>
            </ListItem>
            <ListItem>
              <a href="#">Services</a>
            </ListItem>
            <ListItem>
              <a href="#">Blog</a>
            </ListItem>
          </LinkList>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Other links</HeaderTitle>
          <LinkList>
            <ListItem>
              <a href="#">FAQ</a>
            </ListItem>
            <ListItem>
              <a href="#">Contact Us</a>
            </ListItem>
            <ListItem>
              <a href="#">Support</a>
            </ListItem>
            <ListItem>
              <a href="#">Privacy Policy</a>
            </ListItem>
          </LinkList>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Call Now</HeaderTitle>
          <HorizontalContainer>
            <RedIcon>
              <FontAwesomeIcon icon={faPhoneAlt} />
            </RedIcon>
            <SmallText>+30 123-456-7899</SmallText>
          </HorizontalContainer>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Email</HeaderTitle>
          <HorizontalContainer>
            <RedIcon>
              <FontAwesomeIcon icon={faEnvelope} />
            </RedIcon>
            <SmallText>info@yourcar.com</SmallText>
          </HorizontalContainer>
        </SectionContainer>
      </InnerContainer>
      <BottomContainer>
        <CopyrightText>
          Copyright &copy; {new Date().getFullYear()} Yourcar. All rights
          reserved
        </CopyrightText>
      </BottomContainer>
    </FooterContainer>
  );
}

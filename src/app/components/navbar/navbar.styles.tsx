import styled from "styled-components";
import tw from "twin.macro";

export const NavbarContainer = styled.div`
  min-height: 68px;
  ${tw`
    w-full
    max-w-screen-2xl
    flex
    px-3
    flex-row
    items-center
    lg:px-12
    justify-between
  `}
`;

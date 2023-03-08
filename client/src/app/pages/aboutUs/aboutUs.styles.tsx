import styled from "styled-components";
import tw from "twin.macro";
import { SCREENS } from "../../components/responsive";

export const AboutUsContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-col
    justify-center
    items-center
    xl:flex-row
    2xl:justify-center
    py-4
    px-7
    md:px-4
    bg-white
  `}
`;

export const CarContainer = styled.div`
  width: auto;
  height: 15em;
  margin-left: -30px;

  img {
    width: auto;
    height: 100%;
  }

  @media (min-width: ${SCREENS.md}) {
    height: 28em;
  }
  @media (min-width: ${SCREENS.lg}) {
    height: 30em;
  }
  @media (min-width: ${SCREENS["2xl"]}) {
    height: 35em;
    margin-left: 0;
  }
`;

export const InfoContainer = styled.div`
  ${tw`
    flex
    w-full
    flex-col
    md:ml-6
    md:w-1/2
    2xl:ml-16
  `}
`;
export const Title = styled.h1`
  ${tw`
    text-black
    text-center
    w-full
    text-lg
    font-extrabold
    md:text-3xl
    md:font-black
    md:text-left
    md:leading-normal
    lg:text-5xl
  `}
`;

export const InfoText = styled.p`
  ${tw`
    max-w-2xl
    text-xs
    px-4
    sm:px-24
    md:text-sm
    md:px-0
    md:text-left
    lg:text-base
    text-gray-500
    mt-4
    font-normal
  `}
`;

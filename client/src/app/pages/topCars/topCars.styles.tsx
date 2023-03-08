import styled from "styled-components";
import tw from "twin.macro";

export const TopCarsContainer = styled.div`
  ${tw`
    max-w-screen-lg
    w-full
    flex
    flex-col
    items-center
    justify-center
    px-4
    md:px-0
    mb-10
  `}
`;

export const Title = styled.h2`
  ${tw`
    text-3xl
    lg:text-5xl
    text-black
    font-extrabold
  `}
`;

export const CarsContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-col
    justify-center
    items-center
    mt-7
    md:mt-10
  `}
`;

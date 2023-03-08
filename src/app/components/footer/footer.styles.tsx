import styled from "styled-components";
import tw from "twin.macro";

export const FooterContainer = styled.div`
  ${tw`
    flex
    flex-col
    space-y-5
    w-full
    h-full
    p-3
    items-center
    justify-center
    md:pt-12
    md:pb-6
    bg-[#1d2124]
  `}
`;

export const InnerContainer = styled.div`
  ${tw`
    flex
    flex-col
    sm:flex-row
    sm:flex-wrap
    justify-between
    space-y-5
    w-full
    h-full
    lg:space-y-0
    lg:flex-row
    max-w-screen-2xl
    px-12
  `}
`;

export const AboutContainer = styled.div`
  ${tw`
    flex
    flex-col
    
  `}
`;

export const AboutText = styled.p`
  ${tw`
    text-white
    text-sm
    font-normal
    max-w-xs
    leading-5
    mt-2
  `}
`;

export const SectionContainer = styled.div`
  ${tw`
    flex
    flex-col
    mr-3
  `}
`;

export const LinkList = styled.ul`
  ${tw`
    outline-none
    list-none
    flex
    flex-col
  `}
`;
export const ListItem = styled.li`
  ${tw`
    mb-2  
  `}

  & > a {
    ${tw`
      text-sm
      text-white
      transition-all
      hover:text-gray-400
    `}
  }
`;
export const HeaderTitle = styled.h3`
  ${tw`
    text-xl
    font-bold
    text-white
    mb-3
  `}
`;

export const RedIcon = styled.span`
  ${tw`
    w-8
    h-8
    rounded-full
    bg-red-500
    flex
    items-center
    justify-center
    text-white
    text-base
    mr-2
  `}
`;

export const HorizontalContainer = styled.div`
  ${tw`
    flex
    items-center
  `}
`;

export const SmallText = styled.h6`
  ${tw`
    text-white
    text-sm
  `}
`;

export const BottomContainer = styled.div`
  ${tw`
    flex
    w-full    
    max-w-screen-2xl
    sm:px-12
  `}
`;
export const CopyrightText = styled.small`
  ${tw`
    text-[12px]
    text-gray-400
  `}
`;

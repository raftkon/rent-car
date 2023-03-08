import styled from "styled-components";
import tw from "twin.macro";

export const CardContainer = styled.div`
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  min-height: 4.3em;
  ${tw`
    flex
    justify-center
    items-center
    rounded-md
    bg-white
    pt-1
    pb-1
    pr-2
    pl-2
    md:pt-2
    md:pb-2
    md:pl-9
    md:pr-9
  `}
`;

export const ItemContainer = styled.div`
  ${tw`
    flex 
    relative
    items-center
    cursor-pointer

  `}
`;

export const ItemsContainer = styled.div`
  margin-right: 3em;
  display: flex;
  /* ${tw`
    flex-col
    justify-between
    items-center
  `} */
`;

export const Icon = styled.span`
  ${tw`
    text-red-500
    fill-current
    text-sm
    md:text-base
    mr-1
    md:mr-3
  `}
`;

export const Name = styled.span`
  ${tw`
    text-gray-600
    text-xs
    md:text-sm
    select-none
  `}
`;

export const LineSeperator = styled.span`
  width: 2px;
  height: 1.5em;
  ${tw`
    bg-gray-400
    mx-2
    md:mx-5
  `}
`;

export const SmallIcon = styled.span`
  ${tw`
  text-gray-500
  fill-current
  text-xs
  md:text-base
  ml-1
  `}
`;

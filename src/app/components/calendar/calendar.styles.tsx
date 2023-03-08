import { Calendar } from "react-calendar";
import styled, { css } from "styled-components";
import "react-calendar/dist/Calendar.css";
import { SCREENS } from "../responsive";

export const DateCalendar = styled(Calendar)<{ offset: boolean }>`
  position: absolute;
  max-width: none;
  user-select: none;
  top: 3em;
  left: 0;

  ${({ offset }) =>
    offset &&
    css`
      left: -6em;
    `}
`;

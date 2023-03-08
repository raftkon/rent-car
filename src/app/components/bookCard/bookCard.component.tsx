import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button } from "../button/button.component";
import { DateCalendar } from "../calendar/calendar.styles";
import {
  CardContainer,
  Icon,
  ItemContainer,
  ItemsContainer,
  LineSeperator,
  Name,
  SmallIcon,
} from "./bookCard.styles";

export function BookCard() {
  const [startDate, setStartDate] = useState(new Date());
  const [isStartCalendarOpen, setIsStartCalendarOpen] = useState(false);
  const [returnDate, setReturnDate] = useState(new Date());
  const [isReturnCalendarOpen, setIsReturnCalendarOpen] = useState(false);

  const toggleStartDateCalendar = () => {
    setIsStartCalendarOpen((prevState) => !prevState);
    if (isReturnCalendarOpen) setIsReturnCalendarOpen(false);
  };

  const toggleReturnDateCalendar = () => {
    setIsReturnCalendarOpen((prevState) => !prevState);
    if (isStartCalendarOpen) setIsStartCalendarOpen(false);
  };
  return (
    <CardContainer>
      <ItemsContainer>
        <ItemContainer onClick={toggleStartDateCalendar}>
          <Icon>
            <FontAwesomeIcon icon={faCalendarAlt} />
          </Icon>
          <Name>Pick Up Date</Name>
          <SmallIcon>
            <FontAwesomeIcon
              icon={isStartCalendarOpen ? faCaretUp : faCaretDown}
            />
          </SmallIcon>
          {isStartCalendarOpen && (
            <DateCalendar
              offset={false}
              value={startDate}
              onChange={setStartDate}
              locale="en-EN"
            />
          )}
        </ItemContainer>
        <LineSeperator />
        <ItemContainer>
          <Icon>
            <FontAwesomeIcon icon={faCalendarAlt} />
          </Icon>
          <Name onClick={toggleReturnDateCalendar}>Return Date</Name>
          <SmallIcon>
            <FontAwesomeIcon
              icon={isReturnCalendarOpen ? faCaretUp : faCaretDown}
            />
          </SmallIcon>
          {isReturnCalendarOpen && (
            <DateCalendar
              offset={true}
              value={returnDate}
              onChange={setReturnDate}
              locale="en-EN"
            />
          )}
        </ItemContainer>
      </ItemsContainer>
      <Button text="Book Your Ride" theme="outlined" />
    </CardContainer>
  );
}

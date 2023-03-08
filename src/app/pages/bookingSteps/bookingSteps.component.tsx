import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkedAlt,
  faCalendarAlt,
  faCarSide,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {
  Container,
  Step,
  StepContainer,
  StepDescription,
  StepIcon,
  StepsContainer,
  StepTitle,
  Title,
} from "./bookingSteps.styles";

export function BookingSteps() {
  const steps = [
    {
      title: "Choose Location",
      description: "Find the nearest Yourcar point and book your car.",
      icon: faMapMarkedAlt,
      id: 1,
    },
    {
      title: "Pick-Up Date",
      description: "Pickup the best date to rent a car for you.",
      icon: faCalendarAlt,
      id: 2,
    },
    {
      title: "Book Your Car",
      description: "Book tour nice car with ease in one single click.",
      icon: faCarSide,
      id: 3,
    },
  ];
  return (
    <Container>
      <Title>Our Working Steps</Title>
      <StepsContainer>
        {steps.map(({ title, description, icon, id }) => (
          <StepContainer>
            <Step>
              <StepIcon>
                <FontAwesomeIcon icon={icon} />
              </StepIcon>
            </Step>
            <StepTitle>{title}</StepTitle>
            <StepDescription>{description}</StepDescription>
          </StepContainer>
        ))}
      </StepsContainer>
    </Container>
  );
}

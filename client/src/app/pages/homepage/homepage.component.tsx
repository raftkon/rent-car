import React from "react";
import { BookCard } from "../../components/bookCard/bookCard.component";
import { Footer } from "../../components/footer/footer.component";
import { Navbar } from "../../components/navbar/navbar.component";
import { AboutUs } from "../aboutUs/aboutUs.component";
import { BookingSteps } from "../bookingSteps/bookingSteps.component";
import { TopCars } from "../topCars/topCars.component";
import { TopSection } from "../topSection/topSection.component";
import { PageContainer } from "./homepage.styles";

export function HomePage() {
  return (
    <PageContainer>
      <Navbar />
      <TopSection />
      <BookCard />
      <BookingSteps />
      <AboutUs />
      <TopCars />
      <Footer />
    </PageContainer>
  );
}

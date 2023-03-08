import React from "react";
import { BookCard } from "../../components/bookCard/bookCard.component";
import { Navbar } from "../../components/navbar/navbar.component";
import { TopSection } from "../topSection/topSection.component";
import { PageContainer } from "./homepage.styles";

export function HomePage() {
  return (
    <PageContainer>
      <Navbar />
      <TopSection />
      <BookCard />
    </PageContainer>
  );
}

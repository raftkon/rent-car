import { ICar } from "../../../typings/car.type";
import { Car } from "../../components/car/car.component";
import { CarsContainer, Title, TopCarsContainer } from "./topCars.styles";

import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../components/responsive";

export function TopCars() {
  const [current, setCurrent] = useState(0);
  const isBelow640 = useMediaQuery({ maxWidth: SCREENS.sm });
  const isBelow900 = useMediaQuery({ maxWidth: "900px" });
  const numberOfDots = (array: JSX.Element[]) => {
    if (isBelow640) {
      return array.length;
    } else if (isBelow900) {
      return array.length - 1;
    } else return array.length - 2;
  };
  const testCar: ICar = {
    name: "Audi S3 Car",
    mileage: "10k",
    thumbnailSrc:
      "https://cdn.jdpower.com/Models/640x480/2017-Audi-S3-PremiumPlus.jpg",
    dailyPrice: 70,
    monthlyPrice: 1600,
    gearType: "Auto",
    gas: "Petrol",
  };

  const testCar2: ICar = {
    name: "HONDA cITY 5 Seater Car",
    mileage: "20k",
    thumbnailSrc:
      "https://3.bp.blogspot.com/-wrTWQ7RDUoo/VHWdpoBZqiI/AAAAAAAAAH4/PgPKwenQrXg/s1600/vti-l-taffeta-white-f34-700x467-WHITE.png",
    dailyPrice: 50,
    monthlyPrice: 1500,
    gearType: "Auto",
    gas: "Petrol",
  };

  const carouselCars = [
    <Car {...testCar} />,
    <Car {...testCar2} />,
    <Car {...testCar} />,
    <Car {...testCar2} />,
    <Car {...testCar} />,
    <Car {...testCar} />,
    <Car {...testCar} />,
    <Car {...testCar} />,
    <Car {...testCar} />,
  ];
  return (
    <TopCarsContainer>
      <Title>Explore Our Top Deals</Title>
      <CarsContainer>
        <Carousel
          value={current}
          onChange={setCurrent}
          slides={carouselCars}
          plugins={[
            "clickToChange",
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 3,
              },
            },
          ]}
          breakpoints={{
            640: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 1,
                  },
                },
              ],
            },
            900: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 2,
                  },
                },
              ],
            },
          }}
        />
        <Dots
          value={current}
          onChange={setCurrent}
          number={numberOfDots(carouselCars)}
        />
      </CarsContainer>
    </TopCarsContainer>
  );
}

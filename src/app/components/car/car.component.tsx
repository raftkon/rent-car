import {
  faTachometerAlt,
  faEllipsisH,
  faFillDrip,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ICar } from "../../../typings/car.type";
import {
  CarContainer,
  CarDetail,
  CarDetailsContainer,
  CarInfo,
  CarName,
  CarThumbnail,
  DailyPrice,
  DetailsContainer,
  ImageContainer,
  MonthlyPrice,
  PricesContainer,
  RentButton,
  Seperator,
  SmallIcon,
  SmallText,
} from "./car.styles";

interface ICarProps extends ICar {}

export function Car(props: ICarProps) {
  const {
    name,
    thumbnailSrc,
    dailyPrice,
    gas,
    gearType,
    mileage,
    monthlyPrice,
  } = props;

  return (
    <CarContainer>
      <ImageContainer>
        <CarThumbnail>
          <img src={thumbnailSrc} alt="" />
        </CarThumbnail>
        <CarName>{name}</CarName>
      </ImageContainer>
      <DetailsContainer>
        <PricesContainer>
          <DailyPrice>
            {dailyPrice}&euro;
            <SmallText>/day</SmallText>
          </DailyPrice>
          <MonthlyPrice>
            {monthlyPrice}&euro;
            <SmallText>/day</SmallText>
          </MonthlyPrice>
        </PricesContainer>
        <Seperator />
        <CarDetailsContainer>
          <CarDetail>
            <SmallIcon>
              <FontAwesomeIcon icon={faTachometerAlt} />
            </SmallIcon>
            <CarInfo>{mileage}</CarInfo>
          </CarDetail>

          <CarDetail>
            <SmallIcon>
              <FontAwesomeIcon icon={faEllipsisH} />
            </SmallIcon>
            <CarInfo>{gearType}</CarInfo>
          </CarDetail>

          <CarDetail>
            <SmallIcon>
              <FontAwesomeIcon icon={faFillDrip} />
            </SmallIcon>
            <CarInfo>{gas}</CarInfo>
          </CarDetail>
        </CarDetailsContainer>
        <RentButton text="Rent Now" />
      </DetailsContainer>
    </CarContainer>
  );
}

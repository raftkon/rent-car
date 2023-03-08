import {
  AboutUsContainer,
  CarContainer,
  InfoContainer,
  InfoText,
  Title,
} from "./aboutUs.styles";
import JeepImg from "../../../assets/jeep.png";

export function AboutUs() {
  return (
    <AboutUsContainer>
      <CarContainer>
        <img src={JeepImg} alt="" />
      </CarContainer>
      <InfoContainer>
        <Title>Feel The Best Experience With Our Rental Deals</Title>
        <InfoText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          molestias, quisquam autem suscipit aut voluptatum maiores ullam
          consequuntur quo perferendis quam sunt aliquam. Vel labore aut, nisi
          voluptatibus animi sapiente. Illum repellendus quod eaque quas,
          delectus vel recusandae nemo consequatur voluptatibus repellat
          quaerat? Temporibus quae sit officia laboriosam sapiente voluptates
          est quis, veritatis eaque hic? Corporis, quasi. Ad, accusamus dolorum.
          Deserunt, enim expedita nihil id perspiciatis iusto debitis reiciendis
          consequatur. Incidunt sit sunt nostrum facere, recusandae explicabo
          cum aliquid voluptate neque perspiciatis porro repellat asperiores!
          Ducimus voluptas incidunt quo consequuntur. Eum, quasi perferendis
          expedita delectus doloremque nam error pariatur quam alias ad in.
          Temporibus veniam quo cupiditate eligendi odit inventore quas tempora
          non laborum?
        </InfoText>
      </InfoContainer>
    </AboutUsContainer>
  );
}

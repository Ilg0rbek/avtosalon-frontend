import React from "react";
import {
  AboutCar,
  BoldText,
  CapabilitiesContainer,
  CarImage,
  PriceCar,
  SimpleText,
  TitleCar,
  ViewCars,
} from "./capabilities.styles";
import CarsImg from "./assets/yon.svg";

const Capabilities = () => {
  return (
    <CapabilitiesContainer>
      <AboutCar>
        <TitleCar>Chevrolet Malibu</TitleCar>
        <PriceCar>329 900 000 so‘m dan</PriceCar>
        <CarImage src={CarsImg} />
        <BoldText>
          Marka: <SimpleText>CHEVROLET</SimpleText>{" "}
        </BoldText>
        <BoldText>
          Tanirovkasi: <SimpleText>Yo‘q</SimpleText>
        </BoldText>
        <BoldText>
          Mator: <SimpleText>1.5 turbo</SimpleText>
        </BoldText>
        <BoldText>
          Year: <SimpleText>2023</SimpleText>
        </BoldText>
        <BoldText>
          Color: <SimpleText>Oq</SimpleText>{" "}
        </BoldText>
        <BoldText>
          Distance: <SimpleText>3000 km</SimpleText>{" "}
        </BoldText>
        <BoldText>
          Gearbook: <SimpleText>Avtomat karobka</SimpleText>{" "}
        </BoldText>
        <BoldText>
          Dascription:
          <SimpleText>
            Mishina ideal holatda krasska top toza 100tali. Ayol kishiniki
            judayam akuratno haydalgan.
          </SimpleText>
        </BoldText>
      </AboutCar>
      <ViewCars>2</ViewCars>
    </CapabilitiesContainer>
  );
};

export default Capabilities;

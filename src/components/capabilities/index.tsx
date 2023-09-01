import {
  AboutCar,
  BoldText,
  CapabilitiesContainer,
  Car3DImage,
  Car3DText,
  CarImage,
  PriceCar,
  RadioInput,
  SelectForm,
  SimpleText,
  TitleCar,
  ViewCars,
  SelectValue,
  Line,
  Degree,
} from "./capabilities.styles";
import CarsImg from "./assets/yon.svg";
import Car3DImg from "./assets/ropara.svg";
import DegreeImg from "./assets/degree.svg";
import { useEffect, useState } from "react";

const Capabilities = () => {
  const [select, setSelect] = useState<string>("tashqi");

  const HandleSelect = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSelect(event.target.value);
  };

  useEffect(() => {}, [select]);

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
            &nbsp;Mashina ideal holatda krasska top toza 100tali. Ayol kishiniki
            judayam akuratno haydalgan.
          </SimpleText>
        </BoldText>
        <Line />
        <BoldText style={{ textAlign: "end", marginTop: "2px" }}>
          Umumiy xarajat: <SimpleText>329 900 000 so'm dan</SimpleText>
        </BoldText>
      </AboutCar>
      <ViewCars>
        <Car3DImage src={Car3DImg} />
        <Degree src={DegreeImg} />
        <Car3DText>
          Tasvir tanlangan konfiguratsiyaga mos kelmasligi mumkin. Mashinaning
          rangi ushbu saytda taqdim etilganidan farq qilishi mumkin.
        </Car3DText>
        <SelectForm>
          <RadioInput
            style={{ marginLeft: "20px" }}
            type="radio"
            name="select"
            id="tashqi"
            value={"tashqi"}
            onChange={HandleSelect}
          />
          <SelectValue htmlFor="tashqi">Tashqi</SelectValue>
          <RadioInput
            style={{ marginLeft: "20px" }}
            type="radio"
            name="select"
            id="ichki"
            value={"ichki"}
            onChange={HandleSelect}
          />
          <SelectValue htmlFor="ichki">Ichki makon</SelectValue>
        </SelectForm>
      </ViewCars>
    </CapabilitiesContainer>
  );
};

export default Capabilities;

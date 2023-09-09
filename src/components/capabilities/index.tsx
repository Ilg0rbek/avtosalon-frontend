import * as Styles from "./capabilities.styles";
import CarsImg from "./assets/yon.svg";
import DegreeImg from "./assets/degree.svg";
import { useState } from "react";
import VR from "./VRviews";
import Views from "./360views";
import HomeIcon from "./assets/home.svg";
import DrawIcon from "./assets/draw.svg";

const Capabilities = () => {
  const [select, setSelect] = useState<string>("tashqi");

  const HandleSelect = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSelect(event.target.value);
  };

  return (
    <Styles.CapabilitiesContainer>
      <Styles.AboutCar>
        <Styles.TitleCar>Chevrolet Malibu</Styles.TitleCar>
        <Styles.PriceCar>329 900 000 so‘m dan</Styles.PriceCar>
        <Styles.CarImage src={CarsImg} />
        <Styles.BoldText>
          Marka: <Styles.SimpleText>CHEVROLET</Styles.SimpleText>{" "}
        </Styles.BoldText>
        <Styles.BoldText>
          Tanirovkasi: <Styles.SimpleText>Yo‘q</Styles.SimpleText>
        </Styles.BoldText>
        <Styles.BoldText>
          Mator: <Styles.SimpleText>1.5 turbo</Styles.SimpleText>
        </Styles.BoldText>
        <Styles.BoldText>
          Year: <Styles.SimpleText>2023</Styles.SimpleText>
        </Styles.BoldText>
        <Styles.BoldText>
          Color: <Styles.SimpleText>Oq</Styles.SimpleText>{" "}
        </Styles.BoldText>
        <Styles.BoldText>
          Distance: <Styles.SimpleText>3000 km</Styles.SimpleText>{" "}
        </Styles.BoldText>
        <Styles.BoldText>
          Gearbook: <Styles.SimpleText>Avtomat karobka</Styles.SimpleText>{" "}
        </Styles.BoldText>
        <Styles.BoldText>
          Dascription:
          <Styles.SimpleText>
            &nbsp;Mashina ideal holatda krasska top toza 100tali. Ayol kishiniki
            judayam akuratno haydalgan.
          </Styles.SimpleText>
        </Styles.BoldText>
        <Styles.Line />
        <Styles.BoldText style={{ textAlign: "end", marginTop: "2px" }}>
          Umumiy xarajat:{" "}
          <Styles.SimpleText>329 900 000 so'm dan</Styles.SimpleText>
        </Styles.BoldText>
      </Styles.AboutCar>
      <Styles.ViewCars>
        <Styles.CarNavbar3D>
          <Styles.CarNavText>Chevrolet Malibu</Styles.CarNavText>
          <Styles.WrapperIcon>
            <Styles.IconNav src={DrawIcon} />
            <Styles.IconNav src={HomeIcon} />
          </Styles.WrapperIcon>
        </Styles.CarNavbar3D>
        {select === "tashqi" ? <Views /> : <VR />}
        <Styles.Degree src={DegreeImg} />
        <Styles.Car3DText>
          Tasvir tanlangan konfiguratsiyaga mos kelmasligi mumkin. Mashinaning
          rangi ushbu saytda taqdim etilganidan farq qilishi mumkin.
        </Styles.Car3DText>
        <Styles.SelectForm>
          <Styles.RadioInput
            style={{ marginLeft: "20px" }}
            type="radio"
            name="select"
            id="tashqi"
            value={"tashqi"}
            onChange={HandleSelect}
          />
          <Styles.SelectValue htmlFor="tashqi">Tashqi</Styles.SelectValue>
          <Styles.RadioInput
            style={{ marginLeft: "20px" }}
            type="radio"
            name="select"
            id="ichki"
            value={"ichki"}
            onChange={HandleSelect}
          />
          <Styles.SelectValue htmlFor="ichki">Ichki makon</Styles.SelectValue>
        </Styles.SelectForm>
      </Styles.ViewCars>
    </Styles.CapabilitiesContainer>
  );
};

export default Capabilities;

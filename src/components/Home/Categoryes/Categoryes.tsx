import React from "react";
import {
  CardMachine,
  CardsContainer,
  CategoryTitle,
  MachineImg,
  MachineMark,
} from "./category.styles";
import Chevrolet from "./assets/chevrolet.svg";
import Ferra from "./assets/ferra.svg";
import Lada from "./assets/lada.svg";
import Lambo from "./assets/lambo.svg";
const Categoryes = () => {
  return (
    <>
      <CategoryTitle>Modellari</CategoryTitle>
      <CardsContainer>
        <CardMachine>
          <MachineImg src={Chevrolet} />
          <MachineMark>chevrolet</MachineMark>
        </CardMachine>
        <CardMachine>
          <MachineImg src={Lada} />
          <MachineMark>lada</MachineMark>
        </CardMachine>
        <CardMachine>
          <MachineImg src={Lambo} />
          <MachineMark>lamborghini</MachineMark>
        </CardMachine>
        <CardMachine>
          <MachineImg src={Ferra} />
          <MachineMark>ferrari</MachineMark>
        </CardMachine>
      </CardsContainer>
    </>
  );
};

export default Categoryes;

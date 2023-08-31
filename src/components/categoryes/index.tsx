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
import { Link } from "react-router-dom";
const Categoryes = () => {
  return (
    <>
      <CategoryTitle>Modellari</CategoryTitle>
      <CardsContainer>
        <Link to={"/cars"}>
          <CardMachine>
            <MachineImg src={Chevrolet} />
            <MachineMark>chevrolet</MachineMark>
          </CardMachine>
        </Link>
        <Link to={"/cars"}>
          <CardMachine>
            <MachineImg src={Lada} />
            <MachineMark>lada</MachineMark>
          </CardMachine>
        </Link>
        <Link to={"/cars"}>
          <CardMachine>
            <MachineImg src={Lambo} />
            <MachineMark>lamborghini</MachineMark>
          </CardMachine>
        </Link>
        <Link to={"/cars"}>
          <CardMachine>
            <MachineImg src={Ferra} />
            <MachineMark>ferrari</MachineMark>
          </CardMachine>
        </Link>
      </CardsContainer>
    </>
  );
};

export default Categoryes;
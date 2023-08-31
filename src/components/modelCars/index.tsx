import React from "react";
import {
  ModelCarPrice,
  ModelCard,
  ModelTitle,
  ModelsCarImg,
  ModelsContainer,
} from "./model.styles";
import Tahoe from "./assets/tahoe.svg";
import Damas from "./assets/damas.svg";
import Equinox from "./assets/equinox.svg";
import Nexia from "./assets/nexia.svg";
import Malibu from "./assets/malibu.svg";
import { Link } from "react-router-dom";

const Models = () => {
  return (
    <ModelsContainer>
      <Link to={"/capabilities"}>
        <ModelCard>
          <ModelsCarImg src={Tahoe} />
          <ModelTitle>Chevrolet Tahoe</ModelTitle>
          <ModelCarPrice>Narxi: 329 900 000</ModelCarPrice>
        </ModelCard>
      </Link>
      <Link to={"/capabilities"}></Link>
      <ModelCard>
        <ModelsCarImg src={Damas} />
        <ModelTitle>Chevrolet Tahoe</ModelTitle>
        <ModelCarPrice>Narxi: 329 900 000</ModelCarPrice>
      </ModelCard>
      <Link to={"/capabilities"}></Link>
      <ModelCard>
        <ModelsCarImg src={Equinox} />
        <ModelTitle>Chevrolet Tahoe</ModelTitle>
        <ModelCarPrice>Narxi: 329 900 000</ModelCarPrice>
      </ModelCard>
      <Link to={"/capabilities"}>
        <ModelCard>
          <ModelsCarImg src={Nexia} />
          <ModelTitle>Chevrolet Tahoe</ModelTitle>
          <ModelCarPrice>Narxi: 329 900 000</ModelCarPrice>
        </ModelCard>
      </Link>
      <Link to={"/capabilities"}>
        <ModelCard>
          <ModelsCarImg src={Malibu} />
          <ModelTitle>Chevrolet Malibu</ModelTitle>
          <ModelCarPrice>Narxi: 329 900 000</ModelCarPrice>
        </ModelCard>
      </Link>
      <Link to={"/capabilities"}>
        <ModelCard>
          <ModelsCarImg src={Damas} />
          <ModelTitle>Chevrolet Tahoe</ModelTitle>
          <ModelCarPrice>Narxi: 329 900 000</ModelCarPrice>
        </ModelCard>
      </Link>
      <Link to={"/capabilities"}>
        <ModelCard>
          <ModelsCarImg src={Equinox} />
          <ModelTitle>Chevrolet Tahoe</ModelTitle>
          <ModelCarPrice>Narxi: 329 900 000</ModelCarPrice>
        </ModelCard>
      </Link>
      <Link to={"/capabilities"}>
        <ModelCard>
          <ModelsCarImg src={Tahoe} />
          <ModelTitle>Chevrolet Tahoe</ModelTitle>
          <ModelCarPrice>Narxi: 329 900 000</ModelCarPrice>
        </ModelCard>
      </Link>
    </ModelsContainer>
  );
};

export default Models;

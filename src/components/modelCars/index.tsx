import * as Styles from "./model.styles";
import Tahoe from "./assets/tahoe.svg";
import Damas from "./assets/damas.svg";
import Equinox from "./assets/equinox.svg";
import Nexia from "./assets/nexia.svg";
import Malibu from "./assets/malibu.svg";
import { Link } from "react-router-dom";

const Models = () => {
  return (
    <Styles.ModelsContainer>
      <Link to={"/capabilities"}>
        <Styles.ModelCard>
          <Styles.ModelsCarImg src={Tahoe} />
          <Styles.ModelTitle>Chevrolet Tahoe</Styles.ModelTitle>
          <Styles.ModelCarPrice>Narxi: 329 900 000</Styles.ModelCarPrice>
        </Styles.ModelCard>
      </Link>
      <Link to={"/capabilities"}></Link>
      <Styles.ModelCard>
        <Styles.ModelsCarImg src={Damas} />
        <Styles.ModelTitle>Chevrolet Tahoe</Styles.ModelTitle>
        <Styles.ModelCarPrice>Narxi: 329 900 000</Styles.ModelCarPrice>
      </Styles.ModelCard>
      <Link to={"/capabilities"}></Link>
      <Styles.ModelCard>
        <Styles.ModelsCarImg src={Equinox} />
        <Styles.ModelTitle>Chevrolet Tahoe</Styles.ModelTitle>
        <Styles.ModelCarPrice>Narxi: 329 900 000</Styles.ModelCarPrice>
      </Styles.ModelCard>
      <Link to={"/capabilities"}>
        <Styles.ModelCard>
          <Styles.ModelsCarImg src={Nexia} />
          <Styles.ModelTitle>Chevrolet Tahoe</Styles.ModelTitle>
          <Styles.ModelCarPrice>Narxi: 329 900 000</Styles.ModelCarPrice>
        </Styles.ModelCard>
      </Link>
      <Link to={"/capabilities"}>
        <Styles.ModelCard>
          <Styles.ModelsCarImg src={Malibu} />
          <Styles.ModelTitle>Chevrolet Malibu</Styles.ModelTitle>
          <Styles.ModelCarPrice>Narxi: 329 900 000</Styles.ModelCarPrice>
        </Styles.ModelCard>
      </Link>
      <Link to={"/capabilities"}>
        <Styles.ModelCard>
          <Styles.ModelsCarImg src={Damas} />
          <Styles.ModelTitle>Chevrolet Tahoe</Styles.ModelTitle>
          <Styles.ModelCarPrice>Narxi: 329 900 000</Styles.ModelCarPrice>
        </Styles.ModelCard>
      </Link>
      <Link to={"/capabilities"}>
        <Styles.ModelCard>
          <Styles.ModelsCarImg src={Equinox} />
          <Styles.ModelTitle>Chevrolet Tahoe</Styles.ModelTitle>
          <Styles.ModelCarPrice>Narxi: 329 900 000</Styles.ModelCarPrice>
        </Styles.ModelCard>
      </Link>
      <Link to={"/capabilities"}>
        <Styles.ModelCard>
          <Styles.ModelsCarImg src={Tahoe} />
          <Styles.ModelTitle>Chevrolet Tahoe</Styles.ModelTitle>
          <Styles.ModelCarPrice>Narxi: 329 900 000</Styles.ModelCarPrice>
        </Styles.ModelCard>
      </Link>
    </Styles.ModelsContainer>
  );
};

export default Models;

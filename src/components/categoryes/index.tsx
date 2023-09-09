import * as Styles from "./category.styles";
import Chevrolet from "./assets/chevrolet.svg";
import Ferra from "./assets/ferra.svg";
import Lada from "./assets/lada.svg";
import Lambo from "./assets/lambo.svg";
import { Link } from "react-router-dom";
const Categoryes = () => {
  return (
    <>
      <Styles.CategoryTitle>Modellari</Styles.CategoryTitle>
      <Styles.CardsContainer>
        <Link to={"/cars"}>
          <Styles.CardMachine>
            <Styles.MachineImg src={Chevrolet} />
            <Styles.MachineMark>chevrolet</Styles.MachineMark>
          </Styles.CardMachine>
        </Link>
        <Link to={"/cars"}>
          <Styles.CardMachine>
            <Styles.MachineImg src={Lada} />
            <Styles.MachineMark>lada</Styles.MachineMark>
          </Styles.CardMachine>
        </Link>
        <Link to={"/cars"}>
          <Styles.CardMachine>
            <Styles.MachineImg src={Lambo} />
            <Styles.MachineMark>lamborghini</Styles.MachineMark>
          </Styles.CardMachine>
        </Link>
        <Link to={"/cars"}>
          <Styles.CardMachine>
            <Styles.MachineImg src={Ferra} />
            <Styles.MachineMark>ferrari</Styles.MachineMark>
          </Styles.CardMachine>
        </Link>
      </Styles.CardsContainer>
    </>
  );
};

export default Categoryes;

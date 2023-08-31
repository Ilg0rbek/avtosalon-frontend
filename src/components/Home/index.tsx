import { HomeContainer } from "./home.styles";
import Categoryes from "../categoryes";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Models from "../modelCars";
import Capabilities from "../capabilities";

const Home = () => {
  return (
    <HomeContainer>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Categoryes />} />
        <Route path={"/cars"} element={<Models/>} />
        <Route path={"/capabilities"} element={<Capabilities/>} />
      </Routes>
    </HomeContainer>
  );
};

export default Home;

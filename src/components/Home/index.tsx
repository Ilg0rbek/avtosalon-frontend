import { HomeContainer } from "./home.styles";
import Categoryes from "../categoryes";
import { Route, Routes } from "react-router-dom";
import Navbar from "./navbar";
import Models from "../modelcars";
import Capabilities from "../capabilities";
import Admin from "../../admin";

const Home = () => {
  return (
    <HomeContainer>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Categoryes />} />
        <Route path={"/cars"} element={<Models/>} />
        <Route path={"/capabilities"} element={<Capabilities/>} />
        <Route path={"/admin"} element={<Admin/>} />
      </Routes>
    </HomeContainer>
  );
};

export default Home;

import { HomeContainer } from "./home.styles";
import Categoryes from "../categoryes";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Capabilities from "../capabilities";
import Admin from "../../admin";
import Models from "../modelCars";
import Sidebar from "../../admin/sidebar";

const Home = () => {
  const { pathname } = useLocation();

  return (
    <HomeContainer>
      {pathname.slice(0, 6) !== "/admin" && <Navbar />}
      <Routes>
        <Route path={"/"} element={<Categoryes />} />
        <Route path={"/cars"} element={<Models />} />
        <Route path={"/capabilities"} element={<Capabilities />} />
        <Route path={"/admin"} element={<Admin />} />
        <Route path={"/admin/panel"} element={<Sidebar />} />
      </Routes>
    </HomeContainer>
  );
};

export default Home;

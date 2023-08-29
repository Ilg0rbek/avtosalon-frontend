import React from "react";
import {
  HomeButton,
  HomeContainer,
  HomeWrapper,
  PathContainer,
} from "./home.styles";
import { UserOutlined } from "@ant-design/icons";
import Categoryes from "./Categoryes/Categoryes";

const Home = () => {
  return (
    <HomeContainer>
      <HomeWrapper>
        <HomeButton>
          <UserOutlined /> Admin o‘tish
        </HomeButton>
      </HomeWrapper>
      <PathContainer>
        Bosh sahifa{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M14.4192 12.2147L11.1844 8.97989C11.1134 8.90838 11.0291 8.85162 10.9361 8.81289C10.8431 8.77415 10.7434 8.75421 10.6427 8.75421C10.542 8.75421 10.4423 8.77415 10.3493 8.81289C10.2563 8.85162 10.1719 8.90838 10.101 8.97989C9.95891 9.12283 9.87915 9.3162 9.87915 9.51776C9.87915 9.71931 9.95891 9.91268 10.101 10.0556L12.8018 12.7564L10.101 15.4572C9.95891 15.6002 9.87915 15.7935 9.87915 15.9951C9.87915 16.1966 9.95891 16.39 10.101 16.5329C10.1723 16.6037 10.2568 16.6596 10.3498 16.6976C10.4427 16.7355 10.5423 16.7548 10.6427 16.7542C10.7431 16.7548 10.8426 16.7355 10.9356 16.6976C11.0285 16.6596 11.1131 16.6037 11.1844 16.5329L14.4192 13.2981C14.4907 13.2272 14.5475 13.1428 14.5862 13.0498C14.625 12.9569 14.6449 12.8571 14.6449 12.7564C14.6449 12.6557 14.625 12.556 14.5862 12.463C14.5475 12.37 14.4907 12.2857 14.4192 12.2147Z"
            fill="black"
          />
        </svg>{" "}
        modellari
      </PathContainer>
     <Categoryes/>
    </HomeContainer>
  );
};

export default Home;

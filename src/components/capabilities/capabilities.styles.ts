import { styled } from "styled-components";

export const CapabilitiesContainer = styled.div`
  width: 90%;
  margin: 20px auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;
export const AboutCar = styled.div`
  width: 396px;
  height: 660px;
  flex-shrink: 0;
  padding: 24px;
  border-radius: 8px;
  background: #f6f6f6;
`;
export const ViewCars = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 800px;
  height: 500px;
  gap: 10px;
  padding: 50px;
  text-align: center;
`;
export const TitleCar = styled.div`
  color: var(--light-mode-black-100, #000);
  font-family: Noto Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  text-transform: uppercase;
`;
export const PriceCar = styled.div`
  color: var(--light-mode-black-100, #000);
  font-family: Noto Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
`;
export const CarImage = styled.img`
  width: 348px;
  height: 200px;
  flex-shrink: 0;
  background: #f6f6f6 lightgray 50% / contain no-repeat;
`;
export const BoldText = styled.div`
  color: var(--light-mode-black-100, #000);
  display: inline-flexbox;
  font-family: Noto Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
`;
export const SimpleText = styled.span`
  color: rgba(0, 0, 0, 0.6);
  font-family: Noto Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
`;

export const Line = styled.div`
  width: 348px;
  height: 2px;
  background: rgba(0, 0, 0, 0.2);
`;

//Window the right styles
export const Car3DImage = styled.img`
  width: 824px;
  height: 444px;
  background: white lightgray 0px -81px / 100% 139.189% no-repeat;
`;

export const Car3DText = styled.div`
  color: #000;
  font-family: Noto Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 133.333% */
`;

export const SelectText = styled.span`
  color: #000;
  font-family: Noto Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

export const SelectForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 25px;
`;

export const RadioInput = styled.input`
  width: 18px;
  height: 18px;
`;

export const SelectValue = styled.label`
  color: #000;
  font-family: Noto Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

export const Degree = styled.img`
  width: 32px;
  height: 32px;
  color: #000000;
`;

export const CarNavbar3D = styled.div`
  width: 824px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const CarNavText = styled.div`
  color: var(--light-mode-black-100, #000);
  font-family: Noto Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  text-transform: uppercase;
`;

export const IconNav = styled.img`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`;

export const WrapperIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60px;
`;

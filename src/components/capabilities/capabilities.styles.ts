import { styled } from "styled-components";

export const CapabilitiesContainer = styled.div`
  width: 100%;
  margin: 20px auto;
  display: flex;
  align-items: center;
  justify-content: center;
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
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  width: 824px;
  height: 528px;
  gap: 40px;
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
  height: 160px;
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

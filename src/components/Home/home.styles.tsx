import { styled } from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
`;

export const HomeWrapper = styled.div`
 margin: auto;
  width: 90%;
  display: flex;
  justify-content: end;
  align-items: center;
  margin-top: 20px;
`;
export const HomeButton = styled.div`
  display: flex;
  width: 150px;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 12px;
  background: var(--primary-01, #2a85ff);
  color: var(--neutral-01, #fcfcfc);
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.15px;
`;

export const PathContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  color: #000;
  font-family: Noto Sans;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-top: 10px;
  width: 90%;
  margin: auto;
`;

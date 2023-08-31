import { styled } from "styled-components";

export const CardsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 30px;
`;

export const CategoryTitle = styled.div`
  color: #000;
  font-family: Noto Sans;
  font-size: 34px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 15px;
`;

export const CardMachine = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const MachineImg = styled.img`
  width: 260px;
  height: 210px;
  background: white lightgray 50% / contain no-repeat;
`;

export const MachineMark = styled.div`
  color: var(--light-mode-black-100, #000);
  font-family: Noto Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 133.333% */
  text-transform: uppercase;
`;

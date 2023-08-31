import { styled } from "styled-components";

export const ModelsContainer = styled.div`
  margin: auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content:center;
  flex-wrap: wrap;
`;

export const ModelCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  width: 280px;
  height: 300px;
`;

export const ModelsCarImg = styled.img`
  width: 289px;
  height: 220px;
  background: white lightgray 50% / contain no-repeat;
`;

export const ModelTitle = styled.div`
  color: var(--light-mode-black-100, #000);
  font-family: Noto Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  text-transform: uppercase;
`;

export const ModelCarPrice = styled.div`
  color: rgba(0, 0, 0, 0.8);
  font-family: Noto Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
`;

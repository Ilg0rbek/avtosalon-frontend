import { styled } from "styled-components";

export const SiedbarWrapperFluid = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

// styles for Left
export const WrapperLeft = styled.div`
  width: 340px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  background: #fcfcfc;
`;

export const OrderList = styled.ol`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  align-self: stretch;
  margin-top: 48px;
`;

export const OrderListItem = styled.li`
  display: flex;
  padding: 12px;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  border-radius: 12px;
  cursor: pointer;
`;

export const LIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export const ITitle = styled.div`
  color: var(--neutral-04, #6f767e);
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.15px;
`;

export const LMode = styled.div`
  display: flex;
  width: 280px;
  padding: 2px 15px;
  height: 40px;
  justify-content: space-between;
  align-items: center;
  background: #f4f4f4;
  margin: auto;
  border-radius: 20px;
`;

export const ModeWrapper = styled.div`
  display: flex;
  padding: 5px 0px;
  justify-content: center;
  align-items: center;
  width: 150px;
  border-radius: 32px;
  background: var(--neutral-01, #fcfcfc);
  box-shadow: 0px 4px 8px -4px rgba(0, 0, 0, 0.25),
    0px 2px 0px 0px rgba(255, 255, 255, 0.25) inset,
    0px -1px 1px 0px rgba(0, 0, 0, 0.04) inset;
`;

// styles for Right
export const WrapperRight = styled.div`
  height: 100vh;
  flex: 1 0 0;
`;

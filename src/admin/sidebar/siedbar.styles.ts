import { styled } from "styled-components";

export const SiedbarWrapperFluid = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

// styles for Left
export const WrapperLeft = styled.div`
  display: flex;
  width: 340px;
  padding: 24px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex-shrink: 0;
  align-self: stretch;
  background: #fcfcfc;
`;

export const OrderList = styled.ol`
  display: flex;
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
  padding: 10px;
  justify-content: space-around;
  align-items: flex-start;
  flex-shrink: 0;
  align-self: stretch;
  background: white;
  border-radius: 20px;
`;

// styles for Right
export const WrapperRight = styled.div`
  height: 100vh;
  flex: 1 0 0;
`;

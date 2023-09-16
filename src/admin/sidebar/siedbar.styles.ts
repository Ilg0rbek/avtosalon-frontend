import { styled } from "styled-components";

export const SiedbarWrapperFluid = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: #f4f4f4;
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
  overflow-y: scroll;
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
  cursor: pointer;
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

export const RightNavbar = styled.div`
  display: flex;
  width: 100%;
  padding: 20px 50px;
  justify-content: space-between;
  align-items: center;
  background: var(--neutral-01, #fcfcfc);
  box-shadow: 1px 0px 0px 0px #f4f4f4 inset;
`;

export const NavButton = styled.div`
  width: 192px;
  padding: 9px 18px;
  border-radius: 12px;
  background: var(--primary-01, #2a85ff);
  cursor: pointer;
  color: var(--neutral-01, #fcfcfc);
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.15px;
`;

export const NavUser = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 16px;
`;

export const Notification = styled.img`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`;

export const UserAcount = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 48px;
  background: var(--secondary-01, #ffbc99);
`;

export const TableCart = styled.div`
  display: flex;
  width: 90%;
  padding: 15px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  border-radius: 8px;
  background: var(--neutral-01, #fcfcfc);
  margin: 30px auto;
`;

export const CartNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const CartNavLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 188px;
  gap: 14px;
  color: var(--neutral-07, #1a1d1f);
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: -0.4px;
`;

export const CartLogo = styled.div`
  width: 16px;
  height: 32px;
  border-radius: 4px;
  background: var(--secondary-05, #ffd88d);
`;

export const CartAddButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  padding: 9px 20px;
  gap: 8px;
  border-radius: 12px;
  background: var(--primary-01, #2a85ff);
  color: var(--neutral-01, #fcfcfc);
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.15px;
`;

export const Table = styled.div`
  display: flex;
  width: 100%;
  padding: 0px 12px;
  justify-content: space-between;
  align-items: center;
`;

export const TableHeadText = styled.div`
  color:  #6f767e;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  letter-spacing: -0.13px;
`;

export const TableBodyText = styled.div`
  color: var(--neutral-07, #1a1d1f);
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: -0.15px;
`;

export const TableLine = styled.div`
  height: 1px;
  align-self: stretch;
  border-radius: 1px;
  background:  #efefef;
  margin-top: 15px;
`;

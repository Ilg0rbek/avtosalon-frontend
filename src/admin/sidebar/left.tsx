import * as Styles from "./siedbar.styles";
import HIcon from "../icons/home.svg";
import QIcon from "../icons/question.svg";
import PIcon from "../icons/poster.svg";
import { useState } from "react";
import MIcon from "../icons/moon.svg"
import SIcon from "../icons/soon.svg"

const Left = () => {
  const [mode, setMode] = useState<string>("night");

  const data = [
    {
      id: 1,
      icon: HIcon,
      title: "Asosiy",
      to: "/main",
    },
    {
      id: 2,
      icon: QIcon,
      title: "E'lonlar",
      to: "/main",
    },
    {
      id: 3,
      icon: PIcon,
      title: "Savollar",
      to: "/main",
    },
  ];

  return (
    <Styles.WrapperLeft>
      <Styles.OrderList>
        {data.map((v) => (
          <Styles.OrderListItem key={v.id}>
            <div>
              <Styles.LIcon src={v.icon} />
            </div>
            <Styles.ITitle>{v.title}</Styles.ITitle>
          </Styles.OrderListItem>
        ))}
      </Styles.OrderList>
      <Styles.LMode>
        <Styles.ModeWrapper><Styles.LIcon  src={MIcon} /></Styles.ModeWrapper>
        <span><Styles.LIcon  src={SIcon} /></span>
      </Styles.LMode>
    </Styles.WrapperLeft>
  );
};

export default Left;

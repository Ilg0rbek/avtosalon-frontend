import { UserOutlined } from "@ant-design/icons";
import * as Styles from "./siedbar.styles";
import Notification from "../icons/notification.svg";
import Avatar from "../icons/user.png";
import { Link } from "react-router-dom";

const Right = () => {
  return (
    <Styles.WrapperRight>
      <Styles.RightNavbar>
        <Styles.NavButton>
          <Link
            style={{
              display: "flex",
              alignItems: "center",
              gap:"8px",
              justifyContent:"center"
            }}
            to={"/"}
          >
            <UserOutlined /> Asosiyga qaytish
          </Link>
        </Styles.NavButton>
        <Styles.NavUser>
          <Styles.Notification src={Notification} />
          <Styles.UserAcount src={Avatar} />
        </Styles.NavUser>
      </Styles.RightNavbar>
      <Styles.TableCart>Hello Table</Styles.TableCart>
    </Styles.WrapperRight>
  );
};

export default Right;

import { UserOutlined } from "@ant-design/icons";
import * as Styles from "./siedbar.styles";
import Notification from "../icons/notification.svg";
import Avatar from "../icons/avatar.png";
import Plus from "../icons/add.svg";
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
              gap: "8px",
              justifyContent: "center",
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
      <Styles.TableCart>
        <Styles.CartNav>
          <Styles.CartNavLogoWrapper>
            <Styles.CartLogo /> Mashinalar
          </Styles.CartNavLogoWrapper>
          <Styles.TableHeadText
            style={{
              display: "flex",
              gap: "18px",
            }}
          >
            <Styles.CartAddButton>
              <img src={Plus} alt="" />
              Kategoriya qo’shish
            </Styles.CartAddButton>
            <Styles.CartAddButton>
              <img src={Plus} alt="" />
              Mashina qo‘shish
            </Styles.CartAddButton>
          </Styles.TableHeadText>
        </Styles.CartNav>
        <Styles.Table>
          <Styles.TableHeadText
            style={{
              width: "18px",
            }}
          >
            #
          </Styles.TableHeadText>
          <Styles.TableHeadText
            style={{
              width: "122px",
            }}
          >
            Markasi
          </Styles.TableHeadText>
          <Styles.TableHeadText
            style={{
              width: "140px",
            }}
          >
            Gearbook
          </Styles.TableHeadText>
          <Styles.TableHeadText
            style={{
              width: "94px",
            }}
          >
            Tanirovkasi
          </Styles.TableHeadText>
          <Styles.TableHeadText
            style={{
              width: "94px",
            }}
          >
            Mator
          </Styles.TableHeadText>
          <Styles.TableHeadText
            style={{
              width: "94px",
            }}
          >
            Year
          </Styles.TableHeadText>
          <Styles.TableHeadText
            style={{
              width: "94px",
            }}
          >
            Color
          </Styles.TableHeadText>
          <Styles.TableHeadText
            style={{
              width: "148px",
            }}
          >
            Distance
          </Styles.TableHeadText>
        </Styles.Table>
        <div style={{width:"100%"}}>
          <Styles.Table>
            <Styles.TableHeadText
              style={{
                width: "18px",
              }}
            >
              1.
            </Styles.TableHeadText>
            <Styles.TableBodyText
              style={{
                width: "122px",
              }}
            >
              CHEVROLET
            </Styles.TableBodyText>
            <Styles.TableBodyText
              style={{
                width: "140px",
              }}
            >
              Avtomat karobka
            </Styles.TableBodyText>
            <Styles.TableBodyText
              style={{
                width: "94px",
              }}
            >
              Yoq
            </Styles.TableBodyText>
            <Styles.TableBodyText
              style={{
                width: "94px",
              }}
            >
              1.6
            </Styles.TableBodyText>
            <Styles.TableBodyText
              style={{
                width: "94px",
              }}
            >
              2016
            </Styles.TableBodyText>
            <Styles.TableBodyText
              style={{
                width: "94px",
              }}
            >
              Oq
            </Styles.TableBodyText>
            <Styles.TableBodyText
              style={{
                width: "148px",
              }}
            >
              3000 km
            </Styles.TableBodyText>
          </Styles.Table>
          <Styles.TableLine/>
        </div>
        <div style={{width:"100%"}}>
          <Styles.Table>
            <Styles.TableHeadText
              style={{
                width: "18px",
              }}
            >
              2.
            </Styles.TableHeadText>
            <Styles.TableBodyText
              style={{
                width: "122px",
              }}
            >
              CHEVROLET
            </Styles.TableBodyText>
            <Styles.TableBodyText
              style={{
                width: "140px",
              }}
            >
              Avtomat karobka
            </Styles.TableBodyText>
            <Styles.TableBodyText
              style={{
                width: "94px",
              }}
            >
              Yoq
            </Styles.TableBodyText>
            <Styles.TableBodyText
              style={{
                width: "94px",
              }}
            >
              1.6
            </Styles.TableBodyText>
            <Styles.TableBodyText
              style={{
                width: "94px",
              }}
            >
              2016
            </Styles.TableBodyText>
            <Styles.TableBodyText
              style={{
                width: "94px",
              }}
            >
              Oq
            </Styles.TableBodyText>
            <Styles.TableBodyText
              style={{
                width: "148px",
              }}
            >
              3000 km
            </Styles.TableBodyText>
          </Styles.Table>
          <Styles.TableLine/>
        </div>
      </Styles.TableCart>
    </Styles.WrapperRight>
  );
};

export default Right;

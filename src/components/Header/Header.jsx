import { useContext, useEffect, useState } from "react";
import {
  Container,
  HeaderBlock,
  HeaderBtnMainNew,
  HeaderLogo,
  HeaderNav,
  HeaderUser,
  SHeader,
} from "./Header.styled";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function Header() {
  const { user } = useContext(AuthContext);
  const isLightTheme = true;
  const [isShow, setIsShow] = useState(false);
  const navigate = useNavigate();

  function handleUser(event) {
    event.preventDefault();
    console.log(`${isShow} → ${!isShow}`);
    setIsShow(!isShow);
  }

  function handleLogo() {
    setIsShow(false);
  }

  useEffect(() => {
    isShow ? navigate("/user") : navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isShow]);

  return (
    <SHeader>
      <Container>
        <HeaderBlock>
          <HeaderLogo $display={isLightTheme ? "block" : "none"}>
            <a onClick={handleLogo}>
              <img
                src="/images/logo.png"
                alt="logo"
                style={{ width: "85px" }}
              />
            </a>
          </HeaderLogo>
          <HeaderLogo $display={isLightTheme ? "none" : "block"}>
            <a onClick={handleLogo}>
              <img
                src="/images/logo_dark.png"
                alt="logo"
                style={{ width: "85px" }}
              />
            </a>
          </HeaderLogo>
          <HeaderNav>
            <HeaderBtnMainNew id="btnMainNew">
              <Link to="/new-task" style={{ color: "#ffffff" }}>
                Создать новую задачу
              </Link>
            </HeaderBtnMainNew>
            <HeaderUser onClick={handleUser}>{user.name}</HeaderUser>
          </HeaderNav>
        </HeaderBlock>
      </Container>
    </SHeader>

    // <header className="header">
    //     <div className="container">
    //       <div className="header__block">
    //         <div className="header__logo _show _light">
    //           <a href="" target="_self">
    //             <img src="../public/images/logo.png" alt="logo" />
    //           </a>
    //         </div>

    //         <div className="header__logo _dark">
    //           <a href="" target="_self">
    //             <img src="../public/images/logo_dark.png" alt="logo" />
    //           </a>
    //         </div>

    //         <nav className="header__nav">
    //           <button className="header__btn-main-new _hover01" id="btnMainNew">
    //             <a href="#popNewCard">Создать новую задачу</a>
    //           </button>
    //           <a className="header__user _hover02" onClick={handleClickName}>
    //             Ivan Ivanov
    //           </a>
    //           <PopUser isShow={isShowPopUser} />
    //         </nav>
    //       </div>
    //     </div>
    //   </header>
  );
}

export default Header;

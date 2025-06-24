import { useEffect, useState } from "react";
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
import { getLocalStorage } from "../../services/localStorage";

function Header() {
  const isLightTheme = true;
  const [isShowPopUser, setIsShowPopUser] = useState(false);
  const navigate = useNavigate();

  function handleUser(event) {
    event.preventDefault();
    setIsShowPopUser(!isShowPopUser);
  }

  function handleLogo() {
    setIsShowPopUser(false);
  }

  useEffect(() => {
    isShowPopUser ? navigate("/user") : navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isShowPopUser]);

  useEffect(() => {}, []);

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
            <HeaderUser onClick={handleUser}>
              {getLocalStorage().name}
            </HeaderUser>
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

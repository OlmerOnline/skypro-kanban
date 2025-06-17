import { useState } from "react";
import PopUser from "../popups/PopUser/PopUser";
import {
  Container,
  HeaderBlock,
  HeaderBtnMainNew,
  HeaderLogo,
  HeaderNav,
  HeaderUser,
  SHeader,
} from "./Header.styled";

function Header() {
  const [isShowPopUser, setIsShowPopUser] = useState(false);
  const isLightTheme = true;

  function handleClickName() {
    setIsShowPopUser(!isShowPopUser);
  }

  return (
    <SHeader>
      <Container>
        <HeaderBlock>
          <HeaderLogo $display={isLightTheme ? "block" : "none"}>
            <a href="" target="_self">
              <img
                src="/images/logo.png"
                alt="logo"
                style={{ width: "85px" }}
              />
            </a>
          </HeaderLogo>
          <HeaderLogo $display={isLightTheme ? "none" : "block"}>
            <a href="" target="_self">
              <img
                src="/images/logo_dark.png"
                alt="logo"
                style={{ width: "85px" }}
              />
            </a>
          </HeaderLogo>
          <HeaderNav>
            <HeaderBtnMainNew id="btnMainNew">
              <a href="#popNewCard" style={{ color: "#ffffff" }}>
                Создать новую задачу
              </a>
            </HeaderBtnMainNew>
            <HeaderUser onClick={handleClickName}>Ivan Ivanov</HeaderUser>
            <PopUser isShow={isShowPopUser} />
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

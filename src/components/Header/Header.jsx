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
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function Header() {
  const { user, isPopUser, setIsPopUser, globalTheme } =
    useContext(AuthContext);
  const [isShow, setIsShow] = useState(false);
  const [theme, setTheme] = useState(globalTheme);
  const navigate = useNavigate();

  useEffect(() => {
    setTheme(globalTheme);
  }, [globalTheme]);

  function handleUser(event) {
    event.preventDefault();

    setIsShow(!isShow);
  }

  function handleLogo() {
    setIsShow(false);
  }

  function handleNewTask() {
    navigate("/new-task");
  }

  useEffect(() => {
    if (isPopUser) {
      setIsShow(false);
      setIsPopUser(false);
    }

    isShow ? navigate("/user") : navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isShow, isPopUser]);

  return (
    <SHeader $theme={theme}>
      <Container>
        <HeaderBlock>
          <HeaderLogo $display={theme === "light" ? "block" : "none"}>
            <a style={{ display: "flex" }} onClick={handleLogo}>
              <img
                src="/images/logo.png"
                alt="logo"
                style={{ width: "85px" }}
              />
            </a>
          </HeaderLogo>
          <HeaderLogo $display={theme === "dark" ? "block" : "none"}>
            <a style={{ display: "flex" }} onClick={handleLogo}>
              <img
                src="/images/logo_dark.png"
                alt="logo"
                style={{ width: "85px" }}
              />
            </a>
          </HeaderLogo>
          <HeaderNav>
            <HeaderBtnMainNew onClick={handleNewTask}>
              {"Создать новую задачу"}
            </HeaderBtnMainNew>
            <HeaderUser id={"userName"} $theme={theme} onClick={handleUser}>
              {user.name}
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

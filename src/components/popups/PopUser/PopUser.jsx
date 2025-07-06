import { useNavigate } from "react-router-dom";
import {
  HeaderPopUserSet,
  PopUserSetButton,
  PopUserSetMail,
  PopUserSetName,
  PopUserSetTheme,
  PopUserSetThemeInput,
  PopUserSetThemeParagraph,
} from "./PopUser.styled";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";

function PopUser({ isShow }) {
  const { user, globalTheme, updateTheme } = useContext(AuthContext);
  const [theme, setTheme] = useState(globalTheme);
  const navigate = useNavigate();

  useEffect(() => {
    setTheme(globalTheme);
  }, [globalTheme]);

  const elem = document.getElementById("userName");
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  const left = elem?.getBoundingClientRect().left + scrollLeft;

  function handleCheckbox(event) {
    event.target.checked ? updateTheme("dark") : updateTheme("light");
  }

  function handleExit(event) {
    event.preventDefault();

    navigate("/exit");
  }

  return (
    <HeaderPopUserSet $isShow={isShow} $left={left} $theme={theme}>
      <PopUserSetName $theme={theme}>{user.name}</PopUserSetName>
      <PopUserSetMail>{user.login}</PopUserSetMail>
      <PopUserSetTheme>
        <PopUserSetThemeParagraph $theme={theme}>
          Темная тема
        </PopUserSetThemeParagraph>
        <PopUserSetThemeInput
          id="checkboxTheme"
          type="checkbox"
          name="checkbox"
          checked={theme === "dark"}
          $theme={theme}
          onChange={handleCheckbox}
        ></PopUserSetThemeInput>
      </PopUserSetTheme>
      <PopUserSetButton $theme={theme} onClick={handleExit}>
        Выход
      </PopUserSetButton>
    </HeaderPopUserSet>

    // <div
    //   className="header__pop-user-set pop-user-set"
    //   id="user-set-target"
    //   style={{ display: isShow ? "block" : "none" }}
    // >
    //   <p className="pop-user-set__name">Ivan Ivanov</p>
    //   <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
    //   <div className="pop-user-set__theme">
    //     <p>Темная тема</p>
    //     <input type="checkbox" className="checkbox" name="checkbox" />
    //   </div>
    //   <button type="button" className="_hover03">
    //     <a href="#popExit">Выйти</a>
    //   </button>
    // </div>
  );
}

export default PopUser;

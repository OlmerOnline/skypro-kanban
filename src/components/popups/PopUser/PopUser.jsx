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
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

function PopUser({ isShow }) {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleExit(event) {
    event.preventDefault();

    navigate("/exit");
  }

  return (
    <HeaderPopUserSet $isShow={isShow} id="user-set-target">
      <PopUserSetName>{user.name}</PopUserSetName>
      <PopUserSetMail>{user.login}</PopUserSetMail>
      <PopUserSetTheme>
        <PopUserSetThemeParagraph>Темная тема</PopUserSetThemeParagraph>
        <PopUserSetThemeInput
          type="checkbox"
          name="checkbox"
        ></PopUserSetThemeInput>
      </PopUserSetTheme>
      <PopUserSetButton onClick={handleExit}>Выход</PopUserSetButton>
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

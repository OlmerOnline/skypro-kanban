import { useNavigate } from "react-router-dom";
import {
  ExitButton,
  PopExitBlock,
  PopExitContainer,
  PopExitFormGroup,
  PopExitTtlH2,
  SPopExit,
} from "./PopExit.styled";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";

function PopExit({ isShow }) {
  const { updateUser, setIsPopUser, globalTheme, updateTheme } =
    useContext(AuthContext);
  const [theme, setTheme] = useState(globalTheme);
  const navigate = useNavigate();

  useEffect(() => {
    setTheme(globalTheme);
  }, [globalTheme]);

  function handleLogout(event) {
    event.preventDefault();

    updateUser(null);
    updateTheme(null);
    navigate("/login");
  }

  function handleCancel() {
    setIsPopUser(true);
  }

  return (
    <SPopExit id="popExit" $isShow={isShow}>
      <PopExitContainer>
        <PopExitBlock $theme={theme}>
          <div>
            <PopExitTtlH2 $theme={theme}>Выйти из аккаунта?</PopExitTtlH2>
          </div>
          <form id="formExit">
            <PopExitFormGroup>
              <ExitButton
                $isConfirm={true}
                $theme={theme}
                onClick={handleLogout}
              >
                Да, выйти
              </ExitButton>
              <ExitButton
                $isConfirm={false}
                $theme={theme}
                onClick={handleCancel}
              >
                Нет, остаться
              </ExitButton>
            </PopExitFormGroup>
          </form>
        </PopExitBlock>
      </PopExitContainer>
    </SPopExit>

    // <div className="pop-exit" id="popExit">
    //   <div className="pop-exit__container">
    //     <div className="pop-exit__block">
    //       <div className="pop-exit__ttl">
    //         <h2>Выйти из аккаунта?</h2>
    //       </div>
    //       <form className="pop-exit__form" id="formExit" action="#">
    //         <div className="pop-exit__form-group">
    //           <button className="pop-exit__exit-yes _hover01" id="exitYes">
    //             <a href="modal/signin.html">Да, выйти</a>{" "}
    //           </button>
    //           <button className="pop-exit__exit-no _hover03" id="exitNo">
    //             <a href="main.html">Нет, остаться</a>{" "}
    //           </button>
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    // </div>
  );
}

export default PopExit;

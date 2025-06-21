import { Link, useNavigate } from "react-router-dom";
import GlobalStyle, {
  ButtonEnter,
  ContainerAuth,
  FooterAuth,
  FooterAuthLink,
  FooterAuthParagraph,
  FormAuth,
  InputAuth,
  Modal,
  ModalBlock,
  Title,
  Wrapper,
} from "./Auth.styled";

function Auth({ isRegistration, setIsAuth }) {
  const navigate = useNavigate();

  function handleLogin(event) {
    event.preventDefault();

    setIsAuth(true);
    navigate("/");
  }

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <ContainerAuth>
          <Modal>
            <ModalBlock>
              <div>
                <Title>{!isRegistration ? "Вход" : "Регистрация"}</Title>
              </div>
              <FormAuth id="formLogIn" action="#">
                {isRegistration && (
                  <InputAuth
                    type="text"
                    name="name"
                    id="formName"
                    placeholder="Имя"
                  />
                )}
                <InputAuth
                  type="text"
                  name="login"
                  id="formLogin"
                  placeholder="Эл. почта"
                />
                <InputAuth
                  type="password"
                  name="password"
                  id="formPassword"
                  placeholder="Пароль"
                />
                <ButtonEnter id="btnEnter" onClick={handleLogin}>
                  {!isRegistration ? "Войти" : "Зарегистрироваться"}
                </ButtonEnter>
                <FooterAuth>
                  <FooterAuthParagraph>
                    {!isRegistration
                      ? "Нужно зарегистрироваться?"
                      : "Уже есть аккаунт?"}
                  </FooterAuthParagraph>
                  <FooterAuthLink
                    to={!isRegistration ? "/registration" : "/login"}
                  >
                    {!isRegistration
                      ? "Регистрируйтесь здесь"
                      : "Войдите здесь"}
                  </FooterAuthLink>
                </FooterAuth>
              </FormAuth>
            </ModalBlock>
          </Modal>
        </ContainerAuth>
      </Wrapper>
    </>
  );
}

export default Auth;

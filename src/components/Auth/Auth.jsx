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
import { login, registration } from "../../services/auth";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const VALIDATION_FIELDS = { name: false, login: false, password: false };

function Auth({ isRegistration }) {
  const navigate = useNavigate();
  const { updateUser } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    name: "",
    login: "",
    password: "",
  });
  const [errors, setErrors] = useState(VALIDATION_FIELDS);
  const [textError, setTextError] = useState("");

  function validate() {
    const newErrors = VALIDATION_FIELDS;

    if (isRegistration && !formData.name.trim()) {
      newErrors.name = true;
      setTextError("Заполните все поля");
    }
    if (!formData.login.trim()) {
      newErrors.login = true;
      setTextError("Заполните все поля");
    }
    if (!formData.password.trim()) {
      newErrors.password = true;
      setTextError("Заполните все поля");
    }

    setErrors(newErrors);
    return !Object.values(newErrors).filter(Boolean).length;
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: false });
    setTextError("");
  }

  async function handleLogin(event) {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    try {
      const user = !isRegistration
        ? await login(formData)
        : await registration(formData);

      if (user) {
        console.log(user);
        updateUser(user);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      switch (error.message) {
        case "login должен содержать хотя бы 3 символа":
          setTextError("Логин должен содержать хотя бы 3 символа");
          break;
        case "password должен содержать хотя бы 3 символа":
          setTextError("Пароль должен содержать хотя бы 3 символа");
          break;
        case "name должен содержать хотя бы 3 символа":
          setTextError("Имя должно содержать хотя бы 3 символа");
          break;
        default:
          setTextError(error.message);
          break;
      }
    }
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
                    value={formData.name}
                    onChange={handleChange}
                    $error={errors.name}
                  />
                )}
                <InputAuth
                  type="text"
                  name="login"
                  id="formLogin"
                  placeholder="Эл. почта"
                  value={formData.login}
                  onChange={handleChange}
                  $error={errors.login}
                />
                <InputAuth
                  type="password"
                  name="password"
                  id="formPassword"
                  placeholder="Пароль"
                  value={formData.password}
                  onChange={handleChange}
                  $error={errors.password}
                />
                <p style={{ color: "red" }}>{textError}</p>
                <ButtonEnter
                  id="btnEnter"
                  onClick={handleLogin}
                  disabled={!!textError}
                >
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

import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    *:before,
    *:after {
        box-sizing: border-box;
    }

    a,
    a:visited {
        text-decoration: none;
        cursor: pointer;
    }

    button,
    ._btn {
        cursor: pointer;
    }

    ul li {
        list-style: none;
    }

    html,
    body {
        width: 100%;
        height: 100%;
        font-family: "Roboto", sans-serif;
    }

    div,
    button,
    a {
        font-family: "Roboto", sans-serif;
    }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  background-color: #eaeef6;
`;
Wrapper.displayName = "Wrapper";

export const ContainerAuth = styled.div`
  display: block;
  width: 100vw;
  min-height: 100vh;
  margin: 0 auto;
`;
ContainerAuth.displayName = "ContainerAuth";

export const Modal = styled.div`
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
Modal.displayName = "Modal";

export const ModalBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 368px;
  width: 100%;
  padding: 50px 60px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
`;
ModalBlock.displayName = "ModalBlock";

export const Title = styled.h2`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.6px;
  margin-bottom: 20px;
`;
Title.displayName = "Title";

export const FormAuth = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & input:not(:last-child) {
    margin-bottom: 7px;
  }
`;
FormAuth.displayName = "FormAuth";

export const InputAuth = styled.input`
  width: 100%;
  min-width: 100%;
  border-radius: 8px;
  border: 0.7px solid
    ${({ $error }) => ($error ? "red" : "rgba(148, 166, 190, 0.4)")}; //rgba(148, 166, 190, 0.4);
  outline: none;
  padding: 10px 8px;

  &::placeholder {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.28px;
    color: #94a6be;
  }
`;
InputAuth.displayName = "InputAuth";

export const ButtonEnter = styled.button`
  width: 100%;
  height: 30px;
  background-color: #565eef;
  border-radius: 4px;
  margin-top: 20px;
  margin-bottom: 20px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: #ffffff;

  &:hover {
    background-color: #33399b;
  }
  &:disabled {
    background-color: #94a6be;
  }
  &:disabled:hover {
    background-color: #94a6be;
    cursor: auto;
  }
`;
ButtonEnter.displayName = "ButtonEnter";

export const FooterAuth = styled.footer`
  text-align: center;
`;
FooterAuth.displayName = "FooterAuth";

export const FooterAuthParagraph = styled.p`
  color: rgba(148, 166, 190, 0.4);
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.14px;
`;
FooterAuthParagraph.displayName = "FooterAuthParagraph";

export const FooterAuthLink = styled(Link)`
  color: rgba(148, 166, 190, 0.4);
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.14px;
  text-decoration: underline;
`;
FooterAuthLink.displayName = "FooterAuthLink";

export default GlobalStyle;

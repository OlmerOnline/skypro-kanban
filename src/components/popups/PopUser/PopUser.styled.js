import styled from "styled-components";

const checkboxColor = {
  light: "#94a6be",
  dark: "#565EEF",
};

const btnColor = {
  light: "#565eef",
  dark: "#FFFFFF",
};

const textColor = {
  light: "#000000",
  dark: "#FFFFFF",
};

const bgColor = {
  light: "#FFFFFF",
  dark: "#202229",
};

const shadowColor = {
  light: "rgba(26, 56, 101, 0.21)",
  dark: "rgba(148, 166, 190, 0.4)",
};

const borderColor = {
  light: "rgba(148, 166, 190, 0.4)",
  dark: "rgb(78, 85, 102)",
};

export const HeaderPopUserSet = styled.div`
  display: ${({ $isShow }) => ($isShow ? "block" : "none")};
  position: absolute;
  top: 61px;
  left: ${({ $left }) => $left - 115 + "px"};
  width: 213px;
  height: 205px;
  border-radius: 10px;
  border: 0.7px solid ${({ $theme }) => borderColor[$theme]};
  background: ${({ $theme }) => bgColor[$theme]};
  box-shadow: 0px 10px 39px 0px ${({ $theme }) => shadowColor[$theme]};
  padding: 34px;
  text-align: center;
  z-index: 2;
`;

export const PopUserSetName = styled.p`
  color: ${({ $theme }) => textColor[$theme]};
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 4px;
`;

export const PopUserSetMail = styled.p`
  color: #94a6be;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 10px;
`;

export const PopUserSetTheme = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const PopUserSetThemeParagraph = styled.p`
  color: ${({ $theme }) => textColor[$theme]};
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
`;

export const PopUserSetThemeInput = styled.input`
  position: relative;
  width: 24px;
  height: 13px;
  border-radius: 100px;
  background: #eaeef6;
  cursor: pointer;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &::before {
    content: "";
    position: absolute;
    top: 1px;
    left: 1px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: ${({ $theme }) => checkboxColor[$theme]};
    transition: 0.5s;
  }

  &:checked::before {
    left: 12px;
  }
`;

export const PopUserSetButton = styled.button`
  width: 72px;
  height: 30px;
  background: transparent;
  color: ${({ $theme }) => btnColor[$theme]};
  border-radius: 4px;
  border: 1px solid ${({ $theme }) => btnColor[$theme]};

  &:hover {
    background-color: #565eef;
    color: #ffffff;
    border: 1px solid #565eef;
  }
`;

export const PopUserSetLink = styled.a`
  color: #565eef;
`;

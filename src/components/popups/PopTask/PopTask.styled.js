import styled from "styled-components";

const title = `
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

const button = `
    height: 30px;
    margin-bottom: 10px;
    padding: 0 14px;
`;

const colors = {
  "Web Design": {
    faint: "#ff6d00",
    saturated: "#ffe4c2",
  },
  Research: {
    faint: "#06b16e",
    saturated: "#b4fdd1",
  },
  Copywriting: {
    faint: "#9a48f1",
    saturated: "#e9d4ff",
  },
};

const bgColor = {
  light: "#ffffff",
  dark: "#20202C",
};
const borderColor = {
  light: "rgb(212, 219, 229)",
  dark: "rgb(78, 85, 102)",
};
const textColor = {
  light: "#000000",
  dark: "#FFFFFF",
};
const btnColor = {
  light: "#565EEF",
  dark: "#FFFFFF",
};
const textStatusColor = {
  light: "#FFFFFF",
  dark: "#000000",
};
const textareaColor = {
  light: "#EAEEF6",
  dark: "#151419",
};

export const SPopTask = styled.div`
  display: ${({ $isShow }) => ($isShow ? "block" : "none")};
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`;

export const Block = styled.div`
  display: block;
  margin: 0 auto;
  background-color: ${({ $theme }) => bgColor[$theme]};
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid ${({ $theme }) => borderColor[$theme]};
  position: relative;
`;

export const Content = styled.div`
  display: block;
  text-align: left;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const Title = styled.h3`
  color: ${({ $theme }) => textColor[$theme]};
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

export const CategoriesTheme = styled.div`
  display: ${({ $isTop }) => ($isTop ? "block" : "inline-block")};
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: 1 !important;
  background-color: ${({ $color, $theme }) =>
    $theme === "light" ? colors[$color]?.saturated : colors[$color]?.faint};
`;

export const ThemeText = styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  white-space: nowrap;
  color: ${({ $color, $theme }) =>
    $theme === "light" ? colors[$color]?.faint : colors[$color]?.saturated};
`;

export const Status = styled.div`
  margin-bottom: 11px;
`;

export const StatusTitle = styled.p`
  ${title}
  color: ${({ $theme }) => textColor[$theme]};
  margin-bottom: 14px;
`;

export const StatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const StatusTheme = styled.div`
  display: ${({ $isHide }) => ($isHide ? "none" : "block")};
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  color: #94a6be;
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
  cursor: pointer;
  color: ${({ $isActive, $theme }) => $isActive && textStatusColor[$theme]};
  background: ${({ $isActive }) => $isActive && "#94a6be"};
`;
StatusTheme.displayName = "StatusTheme";

export const StatusThemeText = styled.p`
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
`;
StatusThemeText.displayName = "StatusThemeText";

export const Wrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Form = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
`;

export const FormBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormTitle = styled.label`
  color: ${({ $theme }) => textColor[$theme]};
  ${title}
`;

export const FormArea = styled.textarea`
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: ${({ $theme, $isReadOnly }) =>
    $isReadOnly ? textareaColor[$theme] : "transparent"};
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;
  color: #94a6be;

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    letter-spacing: -0.14px;
  }
`;

export const BlockCategoriesBot = styled.div`
  display: none;
  margin-bottom: 20px;
`;

export const CategoriesBotTitle = styled.p`
  ${title}
  margin-bottom: 14px;
`;

export const ButtonsBlock = styled.div`
  display: ${({ $isShow }) => ($isShow ? "flex" : "none")};
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
`;

export const BtnWhite = styled.button`
  ${button}
  margin-right: 8px;
  border-radius: 4px;
  border: 0.7px solid
    var(--palette-navy-60, ${({ $theme }) => btnColor[$theme]});
  outline: none;
  background: transparent;
  color: ${({ $theme }) => btnColor[$theme]};

  &:hover {
    background-color: #565eef;
    color: #ffffff;
    border: 0.7px solid ${({ $theme }) => $theme && "#565eef"};
  }
`;

export const BtnBlue = styled.button`
  ${button}
  border-radius: 4px;
  background: #565eef;
  border: none;
  outline: none;
  color: #ffffff;

  &:hover {
    background-color: #33399b;
  }
`;

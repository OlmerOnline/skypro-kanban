import styled from "styled-components";

const title = `
  color: #000;
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
    color: "#ff6d00",
    bg: "#ffe4c2",
  },
  Research: {
    color: "#06b16e",
    bg: "#b4fdd1",
  },
  Copywriting: {
    color: "#9a48f1",
    bg: "#e9d4ff",
  },
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
  background-color: #ffffff;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
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
  color: #000;
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
  background-color: ${({ $color }) => colors[$color]?.bg};
`;

export const ThemeText = styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  white-space: nowrap;
  color: ${({ $color }) => colors[$color]?.color};
`;

export const Status = styled.div`
  margin-bottom: 11px;
`;

export const StatusTitle = styled.p`
  ${title}
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
  color: ${({ $isActive }) => $isActive && "#ffffff"};
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
  ${title}
`;

export const FormArea = styled.textarea`
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: #eaeef6;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
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
  border: 0.7px solid var(--palette-navy-60, #565eef);
  outline: none;
  background: transparent;
  color: #565eef;

  &:hover {
    background-color: #33399b;
    color: #ffffff;
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

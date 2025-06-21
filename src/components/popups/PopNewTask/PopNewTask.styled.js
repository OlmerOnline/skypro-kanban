import { Link } from "react-router-dom";
import styled from "styled-components";

const colors = {
  orange: {
    color: "#ff6d00",
    bg: "#ffe4c2",
  },
  green: {
    color: "#06b16e",
    bg: "#b4fdd1",
  },
  purple: {
    color: "#9a48f1",
    bg: "#e9d4ff",
  },
};

export const SPopNewTask = styled.div`
  display: ${({ $isShow }) => ($isShow ? "block" : "none")};
  width: 100%;
  min-width: 375px;
  height: 100%;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 6;
`;
SPopNewTask.displayName = "SPopNewTask";

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
Container.displayName = "Container";

export const Block = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 48px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;
`;
Block.displayName = "Block";

export const Content = styled.div`
  display: block;
  text-align: left;
`;
Content.displayName = "Content";

export const Title = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 20px;
`;
Title.displayName = "Title";

export const CloseBtn = styled(Link)`
  position: absolute;
  top: 20px;
  right: 30px;
  color: #94a6be;
  cursor: pointer;

  &:hover {
    color: #000000;
  }
`;
CloseBtn.displayName = "CloseBtn";

export const Wrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;
Wrap.displayName = "Wrap";

export const Form = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
`;
Form.displayName = "Form";

export const FormBlock = styled.div`
  display: flex;
  flex-direction: column;
`;
FormBlock.displayName = "FormBlock";

export const FormTitle = styled.label`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;
FormTitle.displayName = "FormTitle";

const input = `
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
`;

export const FormInput = styled.input`
  ${input}
  margin: 20px 0;
`;
FormInput.displayName = "FormInput";

export const FormArea = styled.textarea`
  ${input}
  max-width: 370px;
  margin-top: 14px;
  height: 200px;
`;
FormArea.displayName = "FormArea";

export const Categories = styled.div`
  margin-bottom: 20px;
`;
Categories.displayName = "Categories";

export const CategoriesTitle = styled.p`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 14px;
`;
CategoriesTitle.displayName = "CategoriesTitle";

export const CategoriesThemes = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
`;
CategoriesThemes.displayName = "CategoriesThemes";

export const Theme = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: 0.4;
  background-color: ${({ $color }) => colors[$color].bg};

  opacity: ${({ $isActive }) => $isActive && "1 !important"};
`;
Theme.displayName = "Theme";

export const ThemeText = styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  white-space: nowrap;
  color: ${({ $color }) => colors[$color].color};
`;
ThemeText.displayName = "ThemeText";

export const CreateNewTaskBtn = styled.button`
  width: 132px;
  height: 30px;
  background-color: #565eef;
  border-radius: 4px;
  border: 0;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  color: #ffffff;
  float: right;

  &:hover {
    background-color: #33399b;
  }
`;
CreateNewTaskBtn.displayName = "CreateNewTaskBtn";

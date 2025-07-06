import styled, { keyframes } from "styled-components";

const topicColors = {
  orange: {
    faint: "#ff6d00",
    saturated: "#ffe4c2",
  },
  green: {
    faint: "#06b16e",
    saturated: "#b4fdd1",
  },
  purple: {
    faint: "#9a48f1",
    saturated: "#e9d4ff",
  },
};

const bgColor = {
  light: "#ffffff",
  dark: "#20202C",
};

const textColor = {
  light: "#000000",
  dark: "#FFFFFF",
};

const cardAnimation = keyframes`
  0% {
    height: 0;
    opacity: 0;
  }
  100% {
    height: auto;
    opacity: 1;
  }
`;

export const SCardsItem = styled.div`
  padding: 5px;
  animation-name: ${cardAnimation};
  animation-duration: 500ms;
  animation-timing-function: linear;
  opacity: ${({ $isDragging }) => ($isDragging ? 0.3 : 1)};
`;

export const CardsCard = styled.div`
  width: 220px;
  height: 130px;
  background-color: ${({ $isDragging, $theme }) =>
    $isDragging ? "transparent" : bgColor[$theme]};
  border-radius: 10px;
  border: ${({ $isDragging }) => ($isDragging ? "1px dashed #94A6BE" : "none")};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;
`;

export const CardGroup = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 12px;
  display: ${({ $isDragging }) => ($isDragging ? "none" : "flex")};
  align-items: center;
  justify-content: space-between;
`;

export const CardTheme = styled.div`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;
  background-color: ${({ $color, $theme }) =>
    $theme === "light"
      ? topicColors[$color].saturated
      : topicColors[$color].faint};
`;

export const CardThemeParagraph = styled.p`
  font-size: 10px;
  font-weight: 600;
  line-height: 10px;
  color: ${({ $color, $theme }) =>
    $theme === "light"
      ? topicColors[$color].faint
      : topicColors[$color].saturated};
`;

export const CardBtn = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2px;
`;

export const CardBtnDiv = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #94a6be;
`;

export const CardContent = styled.div`
  height: 64px;
  display: ${({ $isDragging }) => ($isDragging ? "none" : "flex")};
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const CardTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: ${({ $theme }) => textColor[$theme]};
  margin-bottom: 10px;
`;

export const CardDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const CardDateParagraph = styled.p`
  margin-left: 6px;
  font-size: 10px;
  line-height: 13px;
  color: #94a6be;
  letter-spacing: 0.2px;
`;

import styled, { keyframes } from "styled-components";

const colors = {
  orange: {
    text: "#ff6d00",
    bg: "#ffe4c2",
  },
  green: {
    text: "#06b16e",
    bg: "#b4fdd1",
  },
  purple: {
    text: "#9a48f1",
    bg: "#e9d4ff",
  },
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
`;

export const CardsCard = styled.div`
  width: 220px;
  height: 130px;
  background-color: #ffffff;
  border-radius: 10px;
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
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardTheme = styled.div`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;
  background-color: ${({ $color }) => colors[$color].bg};
`;

export const CardThemeParagraph = styled.p`
  font-size: 10px;
  font-weight: 600;
  line-height: 10px;
  color: ${({ $color }) => colors[$color].text};
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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const CardTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: #000000;
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

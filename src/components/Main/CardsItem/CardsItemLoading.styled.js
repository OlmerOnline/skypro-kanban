import styled from "styled-components";

export const SCardsItem = styled.div`
  padding: 5px;
`;

export const CardsCard = styled.div`
  width: 220px;
  height: 130px;
  background-color: ${({ $theme }) =>
    $theme === "light" ? "#ffffff" : "#20202C"};
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
  width: 82px;
  height: 20px;
  border-radius: 18px;
  background-image: linear-gradient(to right, #c1cddc, #e9eef7);
`;

export const CardBtn = styled.div`
  width: 18px;
  height: 4px;
  background-image: linear-gradient(to right, #c1cddc, #e9eef7);
`;

export const CardContent = styled.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const CardTitle = styled.div`
  width: 113px;
  height: 13px;
  background-image: linear-gradient(to right, #c1cddc, #e9eef7);
`;

export const CardDate = styled.div`
  width: 58px;
  height: 13px;
  background-image: linear-gradient(to right, #c1cddc, #e9eef7);
`;

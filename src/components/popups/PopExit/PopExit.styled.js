import { Link } from "react-router-dom";
import styled from "styled-components";

export const SPopExit = styled.div`
  display: ${({ $isShow }) => ($isShow ? "block" : "none")};
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;

  &:target {
    display: block;
  }
`;
SPopExit.displayName = "SPopExit";

export const PopExitContainer = styled.div`
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

export const PopExitBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 370px;
  width: 100%;
  padding: 50px 60px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
`;

export const PopExitTtlH2 = styled.h2`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.4px;
  margin-bottom: 20px;
`;

export const PopExitFormGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

export const ExitButton = styled(Link)`
  width: 153px;
  height: 30px;
  background-color: ${({ $isConfirm }) =>
    $isConfirm ? "#565eef" : "transparent"};
  border: ${({ $isConfirm }) =>
    $isConfirm ? "none" : "0.7px solid var(--palette-navy-60, #565eef)"};
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
  color: ${({ $isConfirm }) => ($isConfirm ? "#ffffff" : "#565eef")};

  &:hover {
    background-color: #33399b;
    color: ${({ $isConfirm }) => !$isConfirm && "#ffffff"};
  }
`;

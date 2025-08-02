import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 16px;
  margin-bottom: 30px;
`;

export const FooterBtnMainNew = styled.button`
  display: none;

  width: 100%;
  height: 40px;
  border-radius: 4px;
  background-color: #565eef;
  color: #ffffff;
  border: none;
  font-size: 14px;
  line-height: 1;
  font-weight: 500;

  &:hover {
    background-color: #33399b;
  }

  @media (max-width: 425px) {
    display: block;
  }
`;
FooterBtnMainNew.displayName = "FooterBtnMainNew";

import { useNavigate } from "react-router-dom";
import { FooterBtnMainNew, Wrapper } from "./Footer.styled";

function Footer() {
  const navigate = useNavigate();

  function handleNewTask() {
    navigate("/new-task");
  }

  return (
    <Wrapper>
      <FooterBtnMainNew onClick={handleNewTask}>
        {"Создать новую задачу"}
      </FooterBtnMainNew>
    </Wrapper>
  );
}

export default Footer;

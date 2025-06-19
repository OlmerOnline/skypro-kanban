import "../App.css";
import GlobalStyle, { Wrapper } from "../App.styled";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import PopBrowse from "../components/popups/PopBrowse/PopBrowse";
import PopNewTask from "../components/popups/PopNewTask/PopNewTask";

function MainPage() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <PopBrowse />
        <Header />
        <Main />
      </Wrapper>
    </>
  );
}

export default MainPage;

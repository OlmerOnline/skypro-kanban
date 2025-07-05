import "../App.css";
import GlobalStyle, { Wrapper } from "../App.styled";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import TasksProvider from "../context/TasksProvider";

function MainPage() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <Main />
      </Wrapper>
    </>
  );
}

export default MainPage;

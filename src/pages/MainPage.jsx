import "../App.css";
import GlobalStyle, { Wrapper } from "../App.styled";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import PopBrowse from "../components/popups/PopBrowse/PopBrowse";
import PopExit from "../components/popups/PopExit/PopExit";
import PopNewCard from "../components/popups/PopNewCard/PopNewCard";

function MainPage() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <PopExit />
        <PopNewCard />
        <PopBrowse />
        <Header />
        <Main />
      </Wrapper>
    </>
  );
}

export default MainPage;

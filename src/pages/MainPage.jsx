import "../App.css";
import GlobalStyle, { Wrapper } from "../App.styled";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";

function MainPage() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <Main />
        <Footer />
      </Wrapper>
    </>
  );
}

export default MainPage;

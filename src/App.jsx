import "./App.css";
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import PopExit from "./components/popups/PopExit/PopExit.jsx";
import PopBrowse from "./components/popups/PopBrowse/PopBrowse.jsx";
import PopNewCard from "./components/popups/PopNewCard/PopNewCard.jsx";
import GlobalStyle, { Wrapper } from "./App.styled.js";

function App() {
  return (
    <>
      <Wrapper>
        <PopExit />
        <PopNewCard />
        <PopBrowse />
        <Header />
        <Main />
      </Wrapper>
      <GlobalStyle />
    </>
  );
}

export default App;

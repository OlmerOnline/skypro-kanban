import { useEffect, useState } from "react";
import Column from "./Column/Column";
import { Container, MainBlock, MainContent, SMain } from "./Main.styled";
import Loading from "./Loading";
import { Outlet } from "react-router-dom";
import { fetchGetCards } from "../../services/api";
import { getLocalStorage } from "../../services/localStorage";

function Main() {
  const [isLoading, setIsLoading] = useState(false);
  const [cards, setCards] = useState([]);
  let statusList = [];
  const token = getLocalStorage().token;

  async function getCards() {
    try {
      setIsLoading(true);
      const data = await fetchGetCards(token);

      if (data) {
        setCards(data);
      }
    } catch (error) {
      throw error.message;
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getCards();
  }, []);

  for (const card of cards) {
    if (!statusList.includes(card.status)) {
      statusList.push(card.status);
    }
  }

  const components = statusList.map((status, index) => (
    <Column key={index} status={status} cards={cards} />
  ));

  return (
    <SMain>
      <Container>
        <MainBlock>
          <MainContent>{isLoading ? <Loading /> : components}</MainContent>
        </MainBlock>
      </Container>
      <Outlet />
    </SMain>
  );
}

export default Main;

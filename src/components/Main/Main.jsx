import { useEffect, useState } from "react";
import { cards } from "../../../data";
import Column from "./Column/Column";
import { Container, MainBlock, MainContent, SMain } from "./Main.styled";
import Loading from "./Loading";

function Main() {
  const [isLoading, setIsLoading] = useState(true);
  let statusList = [];

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  for (const card of cards) {
    if (!statusList.includes(card.status)) {
      statusList.push(card.status);
    }
  }

  const components = statusList.map((status, index) => (
    <Column key={index} status={status} />
  ));

  return (
    <SMain>
      <Container>
        <MainBlock>
          <MainContent>{isLoading ? <Loading /> : components}</MainContent>
        </MainBlock>
      </Container>
    </SMain>
  );
}

export default Main;

import CardsItem from "../CardsItem/CardsItem";
import {
  Cards,
  ColumnTitle,
  ColumnTitleParagraph,
  MainColumn,
} from "./Column.styled";

function Column({ status, cards }) {
  const listCard = cards.filter((card) => card.status === status);
  const components = listCard.map((card) => (
    <CardsItem key={card._id} card={card} />
  ));

  return (
    <MainColumn>
      <ColumnTitle>
        <ColumnTitleParagraph>{status}</ColumnTitleParagraph>
      </ColumnTitle>
      <Cards>{components}</Cards>
    </MainColumn>
  );
}

export default Column;

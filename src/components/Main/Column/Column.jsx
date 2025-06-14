import { cards } from "../../../../data";
import CardsItem from "../CardsItem/CardsItem";

function Column({ status }) {
  const listCard = cards.filter((card) => card.status === status);
  const components = listCard.map((card) => (
    <CardsItem key={card.id} card={card} />
  ));

  return (
    <div className="main__column">
      <div className="column__title">
        <p>{status}</p>
      </div>
      <div className="cards">{components}</div>
    </div>
  );
}

export default Column;

import CardsItem from "../CardsItem/CardsItem";

function Column() {
  return (
    <div className="main__column">
      <div className="column__title">
        <p>Нужно сделать</p>
      </div>
      <div className="cards">
        <CardsItem />
      </div>
    </div>
  );
}

export default Column;

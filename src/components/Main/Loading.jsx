import CardsItemLoading from "./CardsItem/CardsItemLoading";
import {
  Cards,
  ColumnTitle,
  ColumnTitleParagraph,
  MainColumn,
} from "./Column/Column.styled";

function Loading() {
  const STATUSES = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];
  const CARDS_LOADING = [5, 1, 3, 1, 1];

  let componentCards = [];

  for (let i = 0; i < CARDS_LOADING.length; i++) {
    let array = [];
    for (let j = 0; j < CARDS_LOADING[i]; j++) {
      array.push(<CardsItemLoading key={j} />);
    }
    componentCards.push(array);
  }

  const componentColumns = STATUSES.map((status, index) => (
    <MainColumn key={index}>
      <ColumnTitle key={index}>
        <ColumnTitleParagraph key={index}>{status}</ColumnTitleParagraph>
      </ColumnTitle>
      <Cards>
        {componentCards[index]}
        {/* <CardsItemLoading /> */}
      </Cards>
    </MainColumn>
  ));

  return <>{componentColumns}</>;
}

export default Loading;

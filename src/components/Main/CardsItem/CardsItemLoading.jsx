import {
  CardBtn,
  CardContent,
  CardDate,
  CardGroup,
  CardsCard,
  CardTheme,
  CardTitle,
  SCardsItem,
} from "./CardsItemLoading.styled";

function CardsItemLoading() {
  return (
    <SCardsItem>
      <CardsCard>
        <CardGroup>
          <CardTheme />
          <CardBtn />
        </CardGroup>
        <CardContent>
          <CardTitle />
          <CardDate />
        </CardContent>
      </CardsCard>
    </SCardsItem>
  );
}

export default CardsItemLoading;

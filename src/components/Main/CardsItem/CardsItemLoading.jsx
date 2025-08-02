import { useContext, useEffect, useState } from "react";
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
import { AuthContext } from "../../../context/AuthContext";

function CardsItemLoading() {
  const { globalTheme } = useContext(AuthContext);
  const [theme, setTheme] = useState(globalTheme);

  useEffect(() => {
    setTheme(globalTheme);
  }, [globalTheme]);

  return (
    <SCardsItem>
      <CardsCard $theme={theme}>
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

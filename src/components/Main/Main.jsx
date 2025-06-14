import { useEffect, useState } from "react";
import { cards } from "../../../data";
import Column from "./Column/Column";

function Main() {
  const [isLoading, setIsLoading] = useState(true);
  const loading = (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "auto",
      }}
    >
      Данные загружаются
    </div>
  );
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
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {/* {isLoading ? loading : components} */}
            {components}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;

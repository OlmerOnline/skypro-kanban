import { cards } from "../../../data";
import Column from "./Column/Column";

function Main() {
  let statusList = [];

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
          <div className="main__content">{components}</div>
        </div>
      </div>
    </main>
  );
}

export default Main;

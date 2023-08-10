import React from "react";
import Header from "./Components/Header/Header";
import Card from "./Components/Card/Card";

import Data from "./Data.js";

function App() {
  const cards = Data.map((item) => <Card key={item.title} {...item} />);

  return (
    <div>
      <Header />
      {cards}
    </div>
  );
}

export default App;

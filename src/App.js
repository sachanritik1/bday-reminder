import "./App.css";
import Peoples from "./data";
import List from "./List";
import { useState } from "react";

function App() {
  const [People, setPeople] = useState(Peoples);
  return (
    <main>
      <section className="container">
        <h3>{People.length} Bithdays Today</h3>
        <List Peoples={People} />
        <button onClick={() => setPeople([])}>Clear all</button>
      </section>
    </main>
  );
}

export default App;

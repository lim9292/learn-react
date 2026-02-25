import Card from "./commponets/Card.jsx";
import Counter from "./commponets/Counter.jsx";

function App() {
  return (
    <div className="App">
      <Card username={"후츠릿"} discount={20} />
      <Card username={"리리림"} discount={70} />
      <Card username={"DY"} discount={90} />
      <Card username={"멀캠"} discount={0} />

      {/*
      <Card />
      <Counter />
      */}
    </div>
  );
}

export default App;

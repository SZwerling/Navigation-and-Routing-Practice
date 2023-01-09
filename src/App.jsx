
import Accordion from "./components/Accordion";

function App() {
   const items = [
      { id: 1, label: "how is wet?", content: "like drippy" },
      { id: 2, label: "storms overhead", content: "like witches flew" },
      { id: 3, label: "off the grass", content: "and in the thickets wickets" },
   ];
   return <Accordion items={items}/>;
}

export default App;

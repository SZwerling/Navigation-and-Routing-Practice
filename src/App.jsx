import Accordion from "./components/Accordion";

function App() {
   const items = [
      { label: "how is wet?", content: "like drippy" },
      { label: "storms overhead", content: "like witches flew" },
      { label: "off the grass", content: "and in the thickets wickets" },
   ];
   return <Accordion items={items}/>;
}

export default App;

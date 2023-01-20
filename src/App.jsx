import ButtonPage from "./pages/ButtonPage";
import AccordionPage from "./pages/AccordionPage";
import Dropdown from "./components/Dropdown";
function App() {
   const options = [
      { id: 1, label: "Red", value: "red" },
      { id: 2, label: "Green", value: "green" },
      { id: 3, label: "Blue", value: "blue" },
   ];

   return (
      <div>
         {/* <AccordionPage/>;
             <ButtonPage /> */}
         <Dropdown options={options} />
      </div>
   );
}

export default App;

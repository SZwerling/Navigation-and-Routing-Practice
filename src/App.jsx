import ButtonPage from "./pages/ButtonPage";
import AccordionPage from "./pages/AccordionPage";
import Dropdown from "./components/Dropdown";
import { useState } from "react";

function App() {
   const [selection, setSelection] = useState(null);
   const handleSelect = (value) => {
      setSelection(value);
   };

   const options = [
      { id: 1, label: "Red", value: "red" },
      { id: 2, label: "Green", value: "green" },
      { id: 3, label: "Blue", value: "blue" },
   ];

   return (
      <div>
         {/* <AccordionPage/>;
             <ButtonPage /> */}
         <Dropdown
            options={options}
            selection={selection}
            onSelect={handleSelect}
         />
      </div>
   );
}

export default App;

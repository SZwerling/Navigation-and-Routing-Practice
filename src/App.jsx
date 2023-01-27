import ButtonPage from "./pages/ButtonPage";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from './pages/DropdownPage';
import { useState } from "react";

function App() {
   return (
      <div className="flex">
         <AccordionPage/>
             <ButtonPage />
         <DropdownPage/>
      </div>
   );
}

export default App;

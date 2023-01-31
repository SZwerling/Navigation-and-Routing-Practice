import ButtonPage from "./pages/ButtonPage";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from './pages/DropdownPage';
import Link from "./components/Link";
import Route from "./components/Route";
import { useState } from "react";

function App() {
   return (
      <div className="flex">
         <Link to="/accordion">accordion</Link>
         <Link to="/dropdown">dropdown</Link>
         <div>
            <Route path="/accordion">
              <AccordionPage />
            </Route>
            <Route path="/dropdown">
               <DropdownPage />
            </Route>
         </div>
      </div>
   );
}

export default App;

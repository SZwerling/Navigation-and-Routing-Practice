import ButtonPage from "./pages/ButtonPage";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from './pages/DropdownPage';
import ModalPage from "./pages/ModalPages";
import TablePage from "./pages/TablePage";
import Sidebar from "./components/Sidebar";
import Route from "./components/Route";
import { useState } from "react";

function App() {
   return (
      <div className="container mx-auto grid grid-cols-6 gap-4 ml-3 mt-4">
        <Sidebar />
         <div className="col-span-5">
            <Route path="/accordion">
              <AccordionPage />
            </Route>
            <Route path="/">
               <DropdownPage />
            </Route>
            <Route path="/buttons">
               <ButtonPage />
            </Route>
            <Route path="/modal">
               <ModalPage />
            </Route>
            <Route path="/table">
               <TablePage />
            </Route>
         </div>
      </div>
   );
}

export default App;

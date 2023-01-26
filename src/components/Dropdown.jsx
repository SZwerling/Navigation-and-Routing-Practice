import { useState, useEffect } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";
import Panel from "./Panel";

function Dropdown({ options, value, onChange }) {
   const [isOpen, setIsOpen] = useState(false);

   useEffect(() => {
      const handler = (event) => {
         console.log(event.target)
      }
      document.addEventListener('click', handler, true)

      return () => {
         document.removeEventListener('click', handler)
      }
   }, []);

   const handleOptionClick = (optionObj) => {
      setIsOpen(false);
      onChange(optionObj);
   };
   const handleToggle = () => setIsOpen((currentIsOpen) => !currentIsOpen); // that very long discussion on updating
   // a piece of state based on it's current state value

   const renderedOptions = options.map((option) => {
      return (
         <div
            className="cursor-pointer p-1 rounded hover:bg-sky-100"
            onClick={() => handleOptionClick(option)}
            key={option.id}
         >
            {option.label}
         </div>
      );
   });

   return (
      <div className="w-48 relative">
         <Panel
            className="flex justify-between items-center cursor-pointer"
            onClick={handleToggle}
         >
            {value?.label || "Select..."}
            {isOpen ? <GoChevronDown className="text-lg"/> : <GoChevronLeft className="text-lg"/>}
         </Panel>
         {isOpen && (
            <Panel className="absolute top-full">
               {renderedOptions}
            </Panel>
         )}
      </div>
   );
}

export default Dropdown;

// selection?.label || 'Select...'
// the fancy question mark will return undefined
// if there is no selection object rather than an error

//border rounded p-3 shadow bg-white w-full

import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Dropdown({ options, value, onChange }) {
   const [isOpen, setIsOpen] = useState(false);
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
         <div
            className="flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full"
            onClick={handleToggle}
         >
            {value?.label || "Select..."}
            {isOpen ? <GoChevronDown className="text-lg"/> : <GoChevronLeft className="text-lg"/>}
         </div>
         {isOpen && (
            <div className="absolute top-full border rounded p-3 shadow bg-white w-full">
               {renderedOptions}
            </div>
         )}
      </div>
   );
}

export default Dropdown;

// selection?.label || 'Select...'
// the fancy question mark will return undefined
// if there is no selection object rather than an error

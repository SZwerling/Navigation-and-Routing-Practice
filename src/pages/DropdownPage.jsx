import Dropdown from "../components/Dropdown";
import { useState } from "react";

function DropdownPage() {
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
         <Dropdown
            options={options}
            value={selection}
            onChange={handleSelect}
         />
   );
}

export default DropdownPage;
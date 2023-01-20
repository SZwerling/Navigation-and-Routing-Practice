import { useState } from "react";

function Dropdown({ options }) {
    const [isOpen, setIsOpen] = useState(false)
    
    const handleToggle = () => setIsOpen((currentIsOpen) => !currentIsOpen) // that very long discussion on updating 
                                                                            // a piece of state based on it's current state value

    const renderedOptions = options.map((option) => {
        return <div key={option.id}>{option.label}</div>
    });

    console.log(isOpen)
    
    return (
        <div>
            <div onClick={handleToggle}>select...</div>
            {isOpen && <div>{renderedOptions}</div>}
        </div>
    )
} 

export default Dropdown;
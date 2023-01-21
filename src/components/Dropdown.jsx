import { useState } from "react";

function Dropdown({ options, selection, onSelect }) {
    const [isOpen, setIsOpen] = useState(false)
    const handleOptionClick = (value) => {
        setIsOpen(false);
        onSelect(value)
    }
    const handleToggle = () => setIsOpen((currentIsOpen) => !currentIsOpen) // that very long discussion on updating 
                                                                            // a piece of state based on it's current state value

    const renderedOptions = options.map((option) => {
        return <div className="cursor-pointer" onClick={() => handleOptionClick(option)} key={option.id}>{option.label}</div>
    });

    
    return (
        <div>
            <div className="cursor-pointer" onClick={handleToggle}>{selection?.label || 'Select...' }</div>
            {isOpen && <div>{renderedOptions}</div>}
        </div>
    )
} 

export default Dropdown;

// selection?.label || 'Select...'
// the fancy question mark will return undefined 
// if there is no selection object rather than an error
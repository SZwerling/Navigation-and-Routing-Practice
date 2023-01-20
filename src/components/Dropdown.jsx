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
        return <div onClick={() => handleOptionClick(option)} key={option.id}>{option.label}</div>
    });

    let content = selection ? selection.label : 'Select...'
    
    return (
        <div>
            <div onClick={handleToggle}>{content}</div>
            {isOpen && <div>{renderedOptions}</div>}
        </div>
    )
} 

export default Dropdown;
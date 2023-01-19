

function Dropdown({ options }) {
    const renderedOptions = options.map((option) => {
        return <option value={option.value}>{option.label}</option>
    });

    return (
        <><label htmlFor="colors">Choose a color:</label>
        <select name="colors" id="colors">
           {renderedOptions}
        </select></>
    )
} 

export default Dropdown;
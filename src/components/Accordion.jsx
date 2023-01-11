import React, {useState} from "react";
import { BiDownArrow, BiLeftArrow } from 'react-icons/bi';

function Accordion({items}){
    const [expandIndex, setExpandIndex] = useState(1)
    
    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expandIndex
        const icon = <span>{isExpanded ? <BiDownArrow /> : <BiLeftArrow />}</span>
    
        return (
            <React.Fragment key={item.id} >
            <h3 className="italic text-lg cursor-pointer" onClick={() => setExpandIndex(index)}>{item.label}  {icon}</h3>
            {isExpanded &&  <div>{item.content}</div>}
            </React.Fragment>
        )
    })
    return(
        <div>{renderedItems}</div>
    )
}


export default Accordion;
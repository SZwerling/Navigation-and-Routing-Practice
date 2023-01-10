import React, {useState} from "react";

function Accordion({items}){
    const [expandIndex, setExpandIndex] = useState(0)
    const handleClick = (index) => setExpandIndex(index)
    
    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expandIndex
        return (
            <React.Fragment key={item.id} >
            <h3 className="italic text-lg" onClick={() => handleClick(index)}>{item.label}</h3>
          {isExpanded &&
           <div>{item.content}</div>
          }
           
            </React.Fragment>
        )
    })
    return(
        <div>{renderedItems}</div>
    )
}


export default Accordion;
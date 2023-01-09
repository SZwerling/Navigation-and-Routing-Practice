import React from "react";

function Accordion({items}){
    const renderedItems = items.map((item) => {
        return (
            <React.Fragment key={item.id}>
            <h3 className="italic text-lg">{item.label}</h3>
            <div>{item.content}</div>
            </React.Fragment>
        )
    })
    return(
        <div>{renderedItems}</div>
    )
}


export default Accordion;
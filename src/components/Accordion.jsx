import React, { useState } from "react";
import { BiDownArrow, BiLeftArrow } from "react-icons/bi";

function Accordion({ items }) {
   const [expandIndex, setExpandIndex] = useState(-1);

   //this more complicated way of setting state with a callback
   //is only necessary if updating VERY quickly and need access
   //to the most up-to-date state value.
   //More simple and customary manner is below export statement.
   const handleClick = (index) => {
      setExpandIndex((current) => {
         if(current === index){
            return -1
         } else {
            return index
         }
      })
   }


   const renderedItems = items.map((item, index) => {
      const isExpanded = index === expandIndex;
      const icon = (
         <span className="text-xl">
            {isExpanded ? <BiDownArrow /> : <BiLeftArrow />}
         </span>
      );

      return (
         <React.Fragment key={item.id}>
            <div
               className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
               onClick={() => handleClick(index)}
            >
               {item.label}
               {icon}
            </div>
            {isExpanded && <div className="border-b p-5">{item.content}</div>}
         </React.Fragment>
      );
   });
   return <div className="border-x border-t rounded">{renderedItems}</div>;
}

export default Accordion;

// const handleClick = (index) => {
//    if(index === expandIndex){
//        setExpandIndex(-1)
//    } else {
//        setExpandIndex(index)
//    }
//   }

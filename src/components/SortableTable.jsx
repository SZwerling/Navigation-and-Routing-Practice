import Table from "./Table";
import { useState } from "react";

function SortableTable(props) {
   const [sortOrder, setSortOrder] = useState(null);
   const [sortBy, setSortBy] = useState(null);
   const { config, data } = props;

   const handleClick = (label) => {
      if (sortOrder === null) {
         setSortOrder("asc");
         setSortBy(label);
      } else if (sortOrder === "asc") {
         setSortOrder("des");
         setSortBy(label);
      } else if (sortOrder === "des") {
         setSortOrder(null);
         setSortBy(null);
      }
   };

   const updateConfig = config.map((column) => {
      if (!column.sortValue) {
         return column;
      }
      return {
         ...column,
         header: () => (
            <th onClick={() => handleClick(column.label)}>
               {getIcons(column.label, sortBy, sortOrder)}
               {column.label}
            </th>
         ),
      };
   });

   let sortedData = data;
   if (sortOrder && sortBy) {
      const { sortValue } = config.find((column) => column.label === sortBy); //destructure sortValue property from config object with matching column label
      sortedData = [...data].sort((a, b) => {
         const valueA = sortValue(a);
         const valueB = sortValue(b);

         const reverseOrder = sortOrder === "asc" ? 1 : -1;

         if (typeof valueA === "string") {
            return valueA.localeCompare(valueB) * reverseOrder;
         } else {
            return (valueA - valueB) * reverseOrder;
         }
      });
   }
   return <Table {...props} data={sortedData} config={updateConfig} />;
}

function getIcons(label, sortBy, sortOrder){
    if(label !== sortBy){
        return 'show up and down'
    }

    if(sortOrder === null){
        return 'show up and down'
    } else if(sortOrder === 'asc'){
        return 'show up'
    } else if(sortOrder === 'des'){
        return 'show down'
    }
}

export default SortableTable;

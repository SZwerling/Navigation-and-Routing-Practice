import { useState } from "react";

function useSort(data, config) {
   const [sortOrder, setSortOrder] = useState(null);
   const [sortBy, setSortBy] = useState(null);

   const sortColumn = (label) => {
      if (sortBy && label !== sortBy) {
         setSortOrder("asc");
         setSortBy(label);
         return;
      }

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
   return { sortOrder, sortBy, sortColumn, sortedData };
}

export default useSort;

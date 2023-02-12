import Table from "./Table";
import { GoArrowSmallDown, GoArrowSmallUp } from "react-icons/go";
import { useState } from "react";

function SortableTable(props) {
   const [sortOrder, setSortOrder] = useState(null);
   const [sortBy, setSortBy] = useState(null);
   const { config, data } = props;

   const handleClick = (label) => {
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

   const updateConfig = config.map((column) => {
      if (!column.sortValue) {
         return column;
      }
      return {
         ...column,
         header: () => (
            <th
               className="cursor-pointer hover:bg-gray-100"
               onClick={() => handleClick(column.label)}
            >
               <div className="flex items-center">
                  {getIcons(column.label, sortBy, sortOrder)}
                  {column.label}
               </div>
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

function getIcons(label, sortBy, sortOrder) {
   if (label !== sortBy) {
      return (
         <div>
            <GoArrowSmallUp />
            <GoArrowSmallDown />
         </div>
      );
   }

   if (sortOrder === null) {
      return (
         <div>
            <GoArrowSmallUp />
            <GoArrowSmallDown />
         </div>
      );
   } else if (sortOrder === "asc") {
      return (
         <div>
            <GoArrowSmallUp />
         </div>
      );
   } else if (sortOrder === "des") {
      return (
         <div>
            <GoArrowSmallDown />
         </div>
      );
   }
}

export default SortableTable;

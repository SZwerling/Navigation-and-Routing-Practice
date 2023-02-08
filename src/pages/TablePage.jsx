import Table from "../components/Table";

function TablePage() {
   const data = [
      { name: "orange", color: "bg-orange-500", score: 5 },
      { name: "apple", color: "bg-red-500", score: 3 },
      { name: "banana", color: "bg-yellow-500", score: 1 },
      { name: "lime", color: "bg-green-500", score: 4 },
   ];

   const config = [
      { label: "Name", render: (fruit) => fruit.name },
      { label: "Color", render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div> },
      { label: "Score", render: (fruit) => fruit.score },
   ];

//This function puts burden of key name here in parent component.
//In this parent component we know that .name will be a property name in the object.
   const keyFn = (fruit) => {
      return fruit.name
   }

   return <Table data={data} config={config} keyFn={keyFn}/>;
}

export default TablePage;

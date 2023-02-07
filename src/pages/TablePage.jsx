import Table from "../components/Table";

function TablePage(){
    const data = [
        {name: "orange", color: 'bg-orange-500', score: 5},
        {name: "apple", color: 'bg-red-500', score: 3},
        {name: "banana", color: 'bg-yellow-500', score: 1},
        {name: "lime", color: 'bg-green-500', score: 4}
    ]

    return(
        <Table data={data}/>
    )
}

export default TablePage;
//import useCounter from "../hooks/use-counter"; taking out custom hook so we can learn useReducer
import Button from "../components/Button";
import { useReducer } from "react";
import Panel from "../components/Panel";

const reducer = (state, action) => {

}

function CounterPage({ initialCount }) {
   // const [count, setCount] = useState(initialCount);
   // const [valueToAdd, setValueToAdd] = useState(1);
   const [state, dispatch] = useReducer(reducer, {
      count: initialCount,
      valueToAdd: 0
   })

   const increment = () => {
      // setCount(count + 1);
   };
   const decrement = () => {
      // setCount(count - 1);
   };



   const handleChange = (e) => {
    const value = parseInt(e.target.value) || 0;
   //  setValueToAdd(value)
   }

   const handleSubmit = (e) => {
    e.preventDefault();
   //  setCount(count + valueToAdd);
   //  setValueToAdd(0)
   }

   return (
      <Panel className="m-3">
         <h1 className="text-lg">count is {state.count}</h1>
         <div className="flex flex-row">
            <Button
               primary
               rounded
               className={"mb-5 hover:bg-sky-700"}
               onClick={increment}
            >
               increment
            </Button>
            <Button
               primary
               rounded
               className={"mb-5 hover:bg-sky-700"}
               onClick={decrement}
            >
               decrement
            </Button>
         </div>
         <form onSubmit={handleSubmit}>
            <label>Custom Add!</label>
            <input
               onChange={handleChange}
               value={state.valueToAdd || ""}
               type="number"
               className="p-1 m-3 bg-gray-50 border border-grey-300"
            />

            <Button primary rounded>
               Add It!!
            </Button>
         </form>
      </Panel>
   );
}

export default CounterPage;

//import useCounter from "../hooks/use-counter"; taking out custom hook so we can learn useReducer
import Button from "../components/Button";
import { useReducer } from "react";
import Panel from "../components/Panel";

const reducer = (state, action) => {
   if (action.type === "increment") {
      return {
         ...state,
         count: state.count + 1,
      };
   } else if (action.type === "decrement") {
      return {
         ...state,
         count: state.count - 1,
      };
   } else if (action.type === "valueToAdd") {
      return {
         ...state,
         valueToAdd: action.payload,
      };
   } else if (action.type === "submit") {
      return {
         ...state,
         count: state.count + state.valueToAdd,
         valueToAdd: 1,
      };
   }
   return state;
};

function CounterPage({ initialCount }) {
   // const [count, setCount] = useState(initialCount);
   // const [valueToAdd, setValueToAdd] = useState(1);
   const [state, dispatch] = useReducer(reducer, {
      count: initialCount,
      valueToAdd: 0,
   });

   const increment = () => {
      dispatch({
         type: "increment",
      });
   };
   const decrement = () => {
      dispatch({
         type: "decrement",
      });
   };

   const handleChange = (e) => {
      const value = parseInt(e.target.value) || 0;
      //  setValueToAdd(value)
      dispatch({
         type: "valueToAdd",
         payload: value,
      });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      //  setCount(count + valueToAdd);
      //  setValueToAdd(0)
      dispatch({
         type: "submit",
         payload: state.valueToAdd,
      });
   };

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

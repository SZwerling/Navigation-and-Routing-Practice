//import useCounter from "../hooks/use-counter"; taking out custom hook so we can learn useReducer
import Button from "../components/Button";
import { useReducer } from "react";
import Panel from "../components/Panel";

const INCREMENT = 'increment';
const DECREMENT = 'decrement';
const VALUE_TO_ADD = 'valueToAdd';
const SUBMIT = 'submit';

const reducer = (state, action) => {
   switch (action.type) {
      case INCREMENT:
         return {
            ...state,
            count: state.count + 1
         }
      case DECREMENT:
         return {
            ...state,
            count: state.count - 1
         }
      case VALUE_TO_ADD:
         return {
            ...state,
            valueToAdd: action.payload
         }
      case SUBMIT:
         return {
            count: state.count + state.valueToAdd,
            valueToAdd: 0
         }
      default: return state // could also throw new Error('unexpected action type: ' + action.type);
   }
}

function CounterPage({ initialCount }) {
   const [state, dispatch] = useReducer(reducer, {
      count: initialCount,
      valueToAdd: 0,
   });

   const increment = () => {
      dispatch({
         type: INCREMENT,
      });
   };
   const decrement = () => {
      dispatch({
         type: DECREMENT,
      });
   };

   const handleChange = (e) => {
      const value = parseInt(e.target.value) || 0;
      dispatch({
         type: VALUE_TO_ADD,
         payload: value,
      });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      dispatch({
         type: SUBMIT,
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

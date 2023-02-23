//import useCounter from "../hooks/use-counter"; taking out custom hook so we can learn useReducer
import Button from "../components/Button";
import { useState } from "react";
import Panel from "../components/Panel";



function CounterPage({ initialCount }){

    const [count, setCount] = useState(initialCount)

    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }
    
    return(
        <Panel className="m-3">
            <h1 className="text-lg">count is {count}</h1>
            <div className="flex flex-row">
            <Button primary rounded className={'mb-5 hover:bg-sky-700'} onClick={increment}>increment</Button>
            <Button primary rounded className={'mb-5 hover:bg-sky-700'} onClick={decrement}>decrement</Button>
            </div>
            <form action="">
                <label>Custom Add!</label>
                    <input type="number" className="p-1 m-3 bg-gray-50 border border-grey-300"/>
                
                <Button primary rounded>Add It!!</Button>
            </form>
        </Panel>
    )
}

export default CounterPage;
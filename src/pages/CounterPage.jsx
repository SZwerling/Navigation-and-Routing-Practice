import useCounter from "../hooks/use-counter";
import Button from "../components/Button";




function CounterPage({ initialCount }){

    const {count, increment} = useCounter(initialCount)
    
    return(
        <div>
            <h1>count is {count}</h1>
            <Button primary rounded className={'mb-5 hover:bg-sky-700'} onClick={increment}>increment</Button>
        </div>
    )
}

export default CounterPage;
import { useState } from "react";


function Counter(){
    const [count, setCount] = useState(0);
    const [counts, setCounts] = useState(0);
   const click= (count) => setCount(preCount=>preCount+1);
   const clicks= (counts) => setCounts(preCount=>preCount+1);
    return(
        <>
        <p>Count: {count}</p>
        <button onClick={click}>Add 1</button>
        <br></br>
        <p>Coun: {counts}</p>
        <button onClick={clicks}>Add 2</button>
        </>
    )
}
export default Counter;
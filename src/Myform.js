import { useState } from "react";

function Myform() {
    const [state, setState] = useState('');
    const handleChange = (e) => {
        setState(e.target.value)
    }
    return(
        <>
        <form>
            <label>Enter your name:</label>
            <input type="text" onChange={handleChange} value={state} />
        </form>
        <h2>The value enetered is {state}</h2>
        </>
    )
}

export default Myform;
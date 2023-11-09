import { useState } from "react";


function Dropdownlist() {
    const [color, setValue] = useState('red');
    const handleChange = (e) => {
        setValue(e.target.value)
    }
    return (
        <>
        <form>
            <select value={color} onChange={handleChange}>
                <option value= 'red'>Red</option>
                <option value= 'yellow'>Yellow</option>
                <option value= 'green'>Green</option>
                <option value= 'black'>Black</option>
            </select>
        </form>
        <h2>you have selected {color}</h2>
        </>
    )
}


export default Dropdownlist;
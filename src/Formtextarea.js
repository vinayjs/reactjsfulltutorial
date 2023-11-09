import { useState } from "react";


function Formtextarea() {

    const[textarea, setTextarea] = useState('');

    const handleChange = (e) => {
        setTextarea(e.target.value)
    }

    return (
        <>
        <form>
            <input type='textarea' value={textarea} 
            onChange={handleChange} />
        </form>
        <h1>Value of textarea : {textarea}</h1>
        </>
    )

}

export default Formtextarea;
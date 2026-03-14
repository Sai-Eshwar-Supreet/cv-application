import { useState } from "react";

function Input({type, id, label, value}){

    const [val, setValue] = useState(value);

    return <div className="input-row">
                <label htmlFor={id}>{label}</label>
                <input id={id} name={id} type={type} value={val} onChange={e => setValue(e.target.value)}/>
            </div>
}

export default Input;
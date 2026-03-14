function Input({type, id, label, value, handleUpdate}){
    return <div className="input-row">
                <label htmlFor={id}>{label}</label>
                <input id={id} name={id} type={type} value={value} onChange={e => handleUpdate(e.target.value)}/>
            </div>
}

export default Input;
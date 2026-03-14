function Input({type, id, label, value, disabled, handleUpdate}){
    return <div className="input-row">
                <label htmlFor={id}>{label}</label>
                <input id={id} name={id} type={type} disabled={disabled} value={value} onChange={e => handleUpdate(e.target.value)}/>
            </div>
}

export default Input;
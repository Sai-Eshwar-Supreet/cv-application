function Checkbox({id, label, value, disabled, handleUpdate}){
    return <div className="input-row">
                <label htmlFor={id}>{label}</label>
                <input id={id} name={id} type='checkbox' disabled={disabled} checked={value} onChange={e => handleUpdate(e.target.checked)}/>
            </div>
}

export default Checkbox;
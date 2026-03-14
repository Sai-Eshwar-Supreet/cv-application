function TextArea({id, label, value, disabled, handleUpdate}){
    return <div className="input-row">
                <label htmlFor={id}>{label}</label>
                <textarea name={id} id={id} value={value} disabled={disabled ?? false} onChange={e => handleUpdate(e.target.value)}></textarea>
            </div>
}

export default TextArea;
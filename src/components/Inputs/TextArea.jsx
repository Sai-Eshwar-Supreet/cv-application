function TextArea({id, label, value, handleUpdate}){
    return <div className="input-row">
                <label htmlFor={id}>{label}</label>
                <textarea name={id} id={id} value={value} onChange={e => handleUpdate(e.target.value)}></textarea>
            </div>
}

export default TextArea;
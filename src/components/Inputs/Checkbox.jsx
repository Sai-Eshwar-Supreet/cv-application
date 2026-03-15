import { ICONS } from "../../Helpers/Icons";

function Checkbox({id, label, value, disabled, handleUpdate}){
    return <div className="input-row inline-input-row">
                <label htmlFor={id}>
                    <span className="check-mark">{value && ICONS.check}</span>
                    {label}
                </label>
                <input id={id} name={id} type='checkbox' disabled={disabled} checked={value} onChange={e => handleUpdate(e.target.checked)}/>
            </div>
}

export default Checkbox;
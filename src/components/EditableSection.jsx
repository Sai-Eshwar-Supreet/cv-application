import Input from "./Input";

function EditableSection({entry, editable, handleUpdate, handleDeletion, setEditable}){

    function handleSubmission(event){
        event.preventDefault();

        const formData = new FormData(event.target);

        handleUpdate?.(entry.id, Object.fromEntries(formData));
    }

    function handleCancel(){
        setEditable(entry.id, false);
    }

    let output = editable
    ? (
        <form action="#" method="post" onSubmit={handleSubmission}>
            {
                Object.entries(entry.data).map(([id, item]) => {
                    return (
                        <Input type='text' id={id} key={id} label={id} value={item} />
                    )
                })
            }
            <button type="button" onClick={handleCancel}>Cancel</button>
            <button>Save</button>
        </form>
    )
    : (
        <div>
            <ul>
                {
                    Object.entries(entry.data).map(([id, item]) => {
                        return (
                            <li key={id}>
                                <span>{id} : </span>
                                <span>{item}</span>
                            </li>
                        )
                    })
                }
            </ul>
            <div>
                { handleDeletion && <button onClick={() => handleDeletion(entry.id)}>Delete</button>}
                <button onClick={() => setEditable(entry.id, true)}>Edit</button>
            </div>
        </div>
    );


    return output;
}

export default EditableSection;
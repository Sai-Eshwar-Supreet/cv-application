import { useState } from "react";
import CollapsibleCard from "../CollapsibleCard";
import EditableSection from "../EditableSection";

function ExperienceCard({entries, handleUpdate, handleAddition, handleDeletion}){
    const [editingId, setEditingId] = useState('');

    function setEditable(id, state){
        setEditingId(state? id : '');
    }

    function handleAddClick(){
        const id = handleAddition();

        setEditable(id, true);
    }

    function onUpdate(id, data){
        setEditable(id, false);
        handleUpdate(id, data);
    }
    function onDeletion(id){
        setEditable(id, false);
        handleDeletion(id);
    }

    return (
        <CollapsibleCard cardName='Experience'>
            {
                entries.map(entry => {
                    return <EditableSection key={entry.id} entry={entry} editable={editingId === entry.id} handleUpdate={onUpdate} handleDeletion={onDeletion} setEditable={setEditable}/>
                })   
            }

            <button onClick={handleAddClick}>Add Experience</button>

        </CollapsibleCard>
    )
}

export default ExperienceCard;
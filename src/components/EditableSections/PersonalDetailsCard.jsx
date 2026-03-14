import { useState } from "react";
import CollapsibleCard from "../CollapsibleCard";
import EditableSection from "../EditableSection";

function PersonalDetailsCard({entries, handleUpdate}){
    const [editingId, setEditingId] = useState('');

    function setEditable(id, state){
        setEditingId(state? id : '');
    }

    return (
        <CollapsibleCard cardName='Personal Details'>
            {
                entries.map(entry => {
                    return <EditableSection key={entry.id} editable={editingId === entry.id}  entry={entry} handleUpdate={handleUpdate} setEditable={setEditable}/>
                })   
            }
        </CollapsibleCard>
    )
}

export default PersonalDetailsCard;
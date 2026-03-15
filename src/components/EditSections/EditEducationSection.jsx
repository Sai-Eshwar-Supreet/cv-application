import { ICONS } from "../../Helpers/Icons";
import Education from "../Items/Education";
import CollapsibleCard from "../utils/CollapsibleCard";

function createEducationEntry(){
  const id = crypto.randomUUID();
  return {
    id,
    school:'',
    degree: '',
    startDate: '',
    endDate: '',
    currentEmployee: false,
  }
}

function EditEducationSection({entries, handleUpdate}){

    function handleEntryUpdate(entry){
        const newEntries = entries.map(e => {
            return (e.id === entry.id)? entry : e;
        });
        handleUpdate(newEntries);
    }

    function addNewEntry(){
        const newEntries = [createEducationEntry(), ...entries];

        handleUpdate(newEntries);
    }

    function removeEntry(id){
        const newEntries = entries.filter(entry => entry.id !== id);

        handleUpdate(newEntries);
    }

    function handleMovement(from, direction){
        const to = from + direction;

        if(!Number.isInteger(from) || !Number.isInteger(to)){
            throw new TypeError('Expects from and to be integers');
        }

        if(from < 0 || from >= entries.length || to < 0 || to >= entries.length){
            return;
        }

        
        const newEntries = [...entries];

        [newEntries[from], newEntries[to]] = [newEntries[to], newEntries[from]];

        handleUpdate(newEntries);
    }

    return (
        <CollapsibleCard cardName='Education'>
            <button className="add-btn" onClick={addNewEntry}>{ICONS.add}</button>
            <ul>
                {
                    entries.map((entry, index) => {
                        return <li key={entry.id}>
                                    <CollapsibleCard cardName={entry.school? entry.school : 'Education Entry'} index={index} handleMovement={handleMovement} handleDeletion={() => removeEntry(entry.id)}>
                                        <Education
                                                    data={entry}
                                                    handleUpdate={handleEntryUpdate}
                                                    handleRemoval={removeEntry}
                                                />
                                    </CollapsibleCard>
                                </li>
                    })
                }
            </ul>
        </CollapsibleCard>
    )
}

export default EditEducationSection;
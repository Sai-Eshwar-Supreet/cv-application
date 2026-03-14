import Experience from "../Items/Experience";
import CollapsibleCard from "../utils/CollapsibleCard";

function createExperienceEntry(){
  const id = crypto.randomUUID();
  return {
    id,
    school:'',
    degree: '',
    startDate: '',
    endDate: '',
    currentEmployee: false,
    location: '',
  }
}

function EditExperienceSection({entries, handleUpdate}){

    function handleEntryUpdate(entry){
        const newEntries = entries.map(e => {
            return (e.id === entry.id)? entry : e;
        });

        handleUpdate(newEntries);
    }

    function addNewEntry(){
        const newEntries = [...entries, createExperienceEntry()];

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
        <CollapsibleCard cardName='Experience'>
            <button onClick={addNewEntry}>Add</button>
            <ul>
                {
                    entries.map((entry, index) => {
                        return <li key={entry.id}>
                                    <CollapsibleCard cardName={entry.company? entry.company : 'New Experience'} index={index} handleMovement={handleMovement}>
                                        <Experience
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

export default EditExperienceSection;
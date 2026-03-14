import PersonalDetails from "../Items/PersonalDetails";
import CollapsibleCard from "../utils/CollapsibleCard";

function PersonalDetailsSection({entry, handleUpdate}){
    return <CollapsibleCard cardName='PersonalDetails'>
                <PersonalDetails 
                    data={entry} 
                    handleUpdate={data => handleUpdate(data)}
                />
           </CollapsibleCard>
}

export default PersonalDetailsSection;
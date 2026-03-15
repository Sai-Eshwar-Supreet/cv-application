import '../../styles/InputComponents.css';

import EditPersonalDetailsSection from '../EditSections/EditPersonalDetailsSection';
import EditEducationSection from '../EditSections/EditEducationSection';
import EditExperienceSection from '../EditSections/EditExperienceSection';

function Editor({state: {personalDetails, educationData, experienceData}}){
    return <div className="panel editor">
            <EditPersonalDetailsSection entry={personalDetails.content} handleUpdate={personalDetails.setContent}/>
            <EditEducationSection entries={educationData.content} handleUpdate={educationData.setContent}/>
            <EditExperienceSection entries={experienceData.content} handleUpdate={experienceData.setContent} />
        </div>
}

export default Editor;
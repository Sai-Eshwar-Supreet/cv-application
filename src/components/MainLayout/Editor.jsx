import '../../styles/Editor.css';

import EditPersonalDetailsSection from '../EditSections/EditPersonalDetailsSection';
import EditEducationSection from '../EditSections/EditEducationSection';
import EditExperienceSection from '../EditSections/EditExperienceSection';

function Editor({state: {personalDetails, educationData, experienceData}}){
    return <section className="panel editor">
            <h2 className='panel-header'>EDITOR</h2>
            <EditPersonalDetailsSection entry={personalDetails.content} handleUpdate={personalDetails.setContent}/>
            <EditEducationSection entries={educationData.content} handleUpdate={educationData.setContent}/>
            <EditExperienceSection entries={experienceData.content} handleUpdate={experienceData.setContent} />
        </section>
}

export default Editor;
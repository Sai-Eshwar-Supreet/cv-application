import '../../styles/Previewer.css';

import PreviewPersonalDetailsSection from '../PreviewSections/PreviewPersonalDetailsSection';
import PreviewEducationSection from '../PreviewSections/PreviewEducationSection';
import PreviewExperienceSection from '../PreviewSections/PreviewExperienceSection';

function Previewer({state: {personalDetails, educationData, experienceData}, ref}){
    return <div ref={ref} className="panel previewer">
          <PreviewPersonalDetailsSection entry={personalDetails.content}/>
          <PreviewEducationSection entries={educationData.content} />
          <PreviewExperienceSection entries={experienceData.content} />
        </div>
}

export default Previewer;
import '../../styles/Previewer.css';

import PreviewPersonalDetailsSection from '../PreviewSections/PreviewPersonalDetailsSection';
import PreviewEducationSection from '../PreviewSections/PreviewEducationSection';
import PreviewExperienceSection from '../PreviewSections/PreviewExperienceSection';

function Previewer({state: {personalDetails, educationData, experienceData}, ref}){
    return <section className="panel previewer">
          <h2 className='panel-header'>PREVIEW</h2>
          <div ref={ref} className="resume">
            <PreviewPersonalDetailsSection entry={personalDetails.content}/>
            <PreviewEducationSection entries={educationData.content} />
            <PreviewExperienceSection entries={experienceData.content} />
          </div>
        </section>
}

export default Previewer;
import { useState } from 'react';
import './App.css';
import EditPersonalDetailsSection from './components/EditSections/EditPersonalDetailsSection';
import EditEducationSection from './components/EditSections/EditEducationSection';
import EditExperienceSection from './components/EditSections/EditExperienceSection';
import PreviewPersonalDetailsSection from './components/PreviewSections/PreviewPersonalDetailsSection';
import PreviewEducationSection from './components/PreviewSections/PreviewEducationSection';
import PreviewExperienceSection from './components/PreviewSections/PreviewExperienceSection';

function App() {
  const [personalDetails, setPersonalDetails] = useState({}); 
  const [educationData, setEducationData] = useState([]);
  const [experienceData, setExperienceData] = useState([]);

  return (
    <main>
      <div className="panel">
        <EditPersonalDetailsSection entry={personalDetails} handleUpdate={data => setPersonalDetails(data)}/>
        <EditEducationSection entries={educationData} handleUpdate={data => setEducationData(data)}/>
        <EditExperienceSection entries={experienceData} handleUpdate={data => setExperienceData(data)} />
      </div>
      <div className="panel">
        <PreviewPersonalDetailsSection entry={personalDetails}/>
        <PreviewEducationSection entries={educationData} />
        <PreviewExperienceSection entries={experienceData} />
      </div>
    </main>
  )
}

export default App

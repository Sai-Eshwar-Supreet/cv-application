import { useState } from 'react';
import './App.css';
import PersonalDetailsSection from './components/EditSections/PersonalDetailsSection';
import EducationSection from './components/EditSections/EducationSection';
import ExperienceSection from './components/EditSections/ExperienceSection';

function App() {
  const [personalDetails, setPersonalDetails] = useState({}); 
  const [educationData, setEducationData] = useState([]);
  const [experienceData, setExperienceData] = useState([]);

  return (
    <main>
      <div className="panel">
        <PersonalDetailsSection entry={personalDetails} handleUpdate={data => setPersonalDetails(data)}/>
        <EducationSection entries={educationData} handleUpdate={data => setEducationData(data)}/>
        <ExperienceSection entries={experienceData} handleUpdate={data => setExperienceData(data)} />
      </div>
    </main>
  )
}

export default App

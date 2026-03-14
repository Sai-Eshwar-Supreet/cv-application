import { useState } from 'react';
import './App.css';
import EditPersonalDetailsSection from './components/EditSections/EditPersonalDetailsSection';
import EditEducationSection from './components/EditSections/EditEducationSection';
import EditExperienceSection from './components/EditSections/EditExperienceSection';
import PreviewPersonalDetailsSection from './components/PreviewSections/PreviewPersonalDetailsSection';
import PreviewEducationSection from './components/PreviewSections/PreviewEducationSection';
import PreviewExperienceSection from './components/PreviewSections/PreviewExperienceSection';

const EXAMPLE_DATA = {
  personalDetails: {
    fullName: 'Alex Morgan',
    email: 'alex.morgan@email.com',
    phoneNumber: '+1 234 567 8901',
    location: 'Austin, Texas'
  },
  education: [
    {
      school: 'State University',
      degree: 'Bachelor of Science in Computer Science',
      startDate: 'Aug 2017',
      endDate: 'May 2021',
      currentStudent: false, 
      location: 'Austin, Texas',
    }
  ],
  experience: [
    {
      company: 'Tech Solutions Inc.',
      designation: 'Software Developer',
      startDate: 'Jun 2021',
      endDate: undefined,
      currentEmployee: true,
      location: 'Austin, Texas',
      description: `• Developed and maintained web applications using modern JavaScript frameworks
      • Collaborated with designers and backend engineers to implement new features
      • Improved application performance and fixed production issues`
    }
  ]

};

function App() {
  const [personalDetails, setPersonalDetails] = useState({}); 
  const [educationData, setEducationData] = useState([]);
  const [experienceData, setExperienceData] = useState([]);

  function reset(){
    if(confirm('This action will reset your data.\nAre you sure to proceed?')){
      setPersonalDetails({});
      setEducationData([]);
      setExperienceData([]);
    }
  }

  function loadExampleData(){
    if(confirm('This action will reset your data with example data.\nAre you sure to proceed?')){
      setPersonalDetails(EXAMPLE_DATA.personalDetails);
      setEducationData(EXAMPLE_DATA.education);
      setExperienceData(EXAMPLE_DATA.experience);
    }
  }

  return (
    <>
      <header>
        <h1>CV Application</h1>
        <ul>
          <li>
            <button onClick={reset}>Reset</button>
          </li>
          <li>
            <button onClick={loadExampleData}>Load Example</button>
          </li>
        </ul>
      </header>
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
    </>
  )
}

export default App

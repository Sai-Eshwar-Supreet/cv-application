import { useState } from 'react';
import './App.css';
import Editor from './components/Editor';
import EducationCard from './components/EditableSections/EducationCard';
import PersonalDetailsCard from './components/EditableSections/PersonalDetailsCard';
import ExperienceCard from './components/EditableSections/ExperienceCard';
import Previewer from './components/Previewer';

function createEducationEntry(){
  const entry = {
    id: crypto.randomUUID(),
    data: {
      'School':'',
      'Degree': '',
      'Start Date': '',
      'End Date': '',
      'Location': '',
    }
  };

  return entry;
}
function createExperienceEntry(){
  const entry = {
    id: crypto.randomUUID(),
    data: {
      'Company':'',
      'Designation': '',
      'Start Date': '',
      'End Date': '',
      'Location': '',
      'Description': '',
    },
  };

  return entry;
}

const initialData = {
  personalDetails:[
    {
      id: 'details',
      data: {
        'Full name': 'Sai Eshwar Supreet P A',
        'Email': 'saieshwarsupreet@gmail.com',
        'Phone number': '9344429153',
        'Address': 'Tamil Nadu, India',
      }
    }
  ],
  education: [
    {
      id:'KCT',
      data: {
        'School':'Kumaraguru College of Technology',
        'Degree': 'Bachelor of Engineering',
        'Start Date': '08/2019',
        'End Date': '05/2023',
        'Location': 'Coimbatore, Tamil Nadu, India',
      }
    },
    {
      id:'G2M',
      data: {
        'School':'Gamer2Maker',
        'Degree': 'Diploma is Game design and production',
        'Start Date': '05/2024',
        'End Date': '09/2025',
        'Location': 'Hyderabad, India',
      }
    },
  ],
  experience: [
    {
      id:'STS',
      data: {
        'Company':'Shamla Tech Solutions',
        'Designation': 'Jr. Unity game developer',
        'Start Date': '10/2023',
        'End Date': '09/2024',
        'Location': 'Coimbatore, Tamil Nadu, India',
        'Description': '',
      },
    },
    {
      id:'108Play',
      data: {
        'Company':'108Play',
        'Designation': 'Unity game programmer',
        'Start Date': '05/2025',
        'End Date': '08/2025',
        'Location': 'Hyderabad, India',
        'Description': '',
      },
    },
  ],
}

function App() {
  const [personalDetails, setPersonalDetails] = useState(initialData.personalDetails);
  const [education, setEducation] = useState(initialData.education);
  const [experience, setExperience] = useState(initialData.experience);

  function handlePersonalDetailsUpdate(entryId, data){
    
      const entries = [...personalDetails];
  
      const index = entries.findIndex(entry => entry.id === entryId);
  
      entries[index].data = data;

      setPersonalDetails(entries);
  }

  function handleEducationAddition(){
      const entries = [...education];

      const newEntry = createEducationEntry();
  
      entries.push(newEntry);

      setEducation(entries);

      return newEntry.id;
  }
  function handleEducationDeletion(entryId){
      const entries = education.filter(entry => entry.id !== entryId);

      setEducation(entries);
  }

  function handleEducationUpdate(entryId, data){
    
      const entries = [...education];
  
      const index = entries.findIndex(entry => entry.id === entryId);
  
      entries[index].data = data;

      setEducation(entries);
  }
  function handleExperienceAddition(){
      const entries = [...experience];

      const newEntry = createExperienceEntry();
  
      entries.push(newEntry);

      setExperience(entries);

      return newEntry.id;
  }
  function handleExperienceDeletion(entryId){
      const entries = experience.filter(entry => entry.id !== entryId);

      setExperience(entries);
  }
  function handleExperienceUpdate(entryId, data){
    
      const entries = [...experience];
  
      const index = entries.findIndex(entry => entry.id === entryId);
  
      entries[index].data = data;

      setExperience(entries);
  }

  return (
    <main>
      <Editor>
        <PersonalDetailsCard entries={personalDetails} handleUpdate={handlePersonalDetailsUpdate}/>
        <EducationCard entries={education} handleUpdate={handleEducationUpdate} handleAddition={handleEducationAddition} handleDeletion={handleEducationDeletion} />
        <ExperienceCard entries={experience} handleUpdate={handleExperienceUpdate} handleAddition={handleExperienceAddition} handleDeletion={handleExperienceDeletion} />
      </Editor>

      <Previewer>
        
      </Previewer>
    </main>
  )
}

export default App

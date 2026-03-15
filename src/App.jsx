import { useRef, useState } from 'react';
import './App.css';
import Header from './components/MainLayout/Header';
import Editor from './components/MainLayout/Editor';
import Previewer from './components/MainLayout/Previewer';
import { useReactToPrint } from 'react-to-print';

const EXAMPLE_DATA = {
  personalDetails: {
    fullName: 'Alex Morgan',
    email: 'alex.morgan@email.com',
    phoneNumber: '+1 234 567 8901',
    location: 'Austin, Texas'
  },
  education: [
    {
      id: crypto.randomUUID(),
      school: 'State University',
      degree: 'Bachelor of Science in Computer Science',
      startDate: '2017-08',
      endDate: '2021-05',
      currentStudent: false, 
      location: 'Austin, Texas',
    }
  ],
  experience: [
    {
      id: crypto.randomUUID(),
      company: 'Tech Solutions Inc.',
      designation: 'Software Developer',
      startDate: '2021-06',
      endDate: '',
      currentEmployee: true,
      location: 'Austin, Texas',
      description: 
'• Developed and maintained web applications using modern JavaScript frameworks\n• Collaborated with designers and backend engineers to implement new features\n• Improved application performance and fixed production issues'
    }
  ]

};

function App() {
  const createContent = ([content, setContent]) => ({content, setContent});

  const state = Object.freeze({
    personalDetails: createContent(useState({})),
    educationData: createContent(useState([])),
    experienceData: createContent(useState([])),
  });

  const previewRef = useRef();

  const downloadPreview = useReactToPrint({contentRef: previewRef, documentTitle: `Resume_${state.personalDetails.content.fullName}`})


  function reset(){
    if(confirm('This action will reset your data.\nAre you sure to proceed?')){
      state.personalDetails.setContent({});
      state.educationData.setContent([]);
      state.experienceData.setContent([]);
    }
  }

  function loadExampleData(){
    if(confirm('This action will reset your data with example data.\nAre you sure to proceed?')){
      state.personalDetails.setContent(EXAMPLE_DATA.personalDetails);
      state.educationData.setContent(EXAMPLE_DATA.education);
      state.experienceData.setContent(EXAMPLE_DATA.experience);
    }
  }

  return (
    <>
      <Header handleReset={reset} handleExampleLoad={loadExampleData} handleDownload={downloadPreview}/>
      <main>
        <Editor state={state} />
        <Previewer ref={previewRef} state={state} />
      </main>
    </>
  )
}

export default App

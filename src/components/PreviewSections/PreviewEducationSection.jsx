import { ICONS } from "../../Helpers/Icons";

function PreviewEducationSection({entries}){
    return (
        <section className="resume-section">
            <header className="resume-header">
                <h3> 
                    {ICONS.education} 
                    <span>Education</span>
                </h3>
            </header>
            {
                entries.map((entry, index) => {
                    return (
                        <section className="resume-entry" key={entry.id}>
                                <h4 className="entry-element primary">{index + 1}. {entry.school}</h4>
                                <p className="entry-element secondary">{entry.degree}</p> 
                                <p className="entry-element tertiary"><span>{entry.startDate}</span>-<span>{entry.currentStudent? 'Present' : entry.endDate}</span></p>
                        </section>
                    )
                })
            }
        </section>
    )
}

export default PreviewEducationSection;
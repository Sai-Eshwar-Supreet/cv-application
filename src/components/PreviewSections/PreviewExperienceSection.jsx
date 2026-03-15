import { ICONS } from "../../Helpers/Icons";

function PreviewExperienceSection({entries}){
    return (
        <section className="resume-section">
            <header className="resume-header">
                <h3> 
                    {ICONS.experience} 
                    <span>Experience</span>
                </h3>
            </header>
            {
                entries.map((entry, index) => {
                    return (
                        <section className="resume-entry" key={entry.id}>
                            <header>
                                <h4 className="entry-element primary">{index + 1}. {entry.company}</h4>
                                <p className="entry-element secondary">{entry.designation}</p> 
                                <p className="entry-element tertiary">{entry.startDate}-{entry.currentEmployee? 'Present' : entry.endDate}</p>
                                <p className="entry-element tertiary">{entry.location}</p>
                                <pre className="entry-element secondary">{entry.description}</pre>
                            </header>
                        </section>
                    )
                })
            }
        </section>
    )
}

export default PreviewExperienceSection;
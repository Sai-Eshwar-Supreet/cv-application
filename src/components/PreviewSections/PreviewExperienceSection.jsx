function PreviewExperienceSection({entries}){
    return (
        <section className="resume-section">
            <header className="resume-header">
                <h3>Experience</h3>
            </header>
            {
                entries.map((entry, index) => {
                    return (
                        <section key={entry.id}>
                            <header>
                                <h4>{index + 1}. {entry.company}</h4>
                                <p>{entry.designation}</p> 
                                <p>{entry.startDate}-{entry.currentEmployee? 'Present' : entry.endDate}</p>
                                <p>{entry.location}</p>
                                <pre>{entry.description}</pre>
                            </header>
                        </section>
                    )
                })
            }
        </section>
    )
}

export default PreviewExperienceSection;
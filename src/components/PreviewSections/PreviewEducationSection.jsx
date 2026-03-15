function PreviewEducationSection({entries}){
    return (
        <section className="resume-section">
            <header className="resume-header">
                <h3>Education</h3>
            </header>
            {
                entries.map((entry, index) => {
                    return (
                        <section key={entry.id}>
                            <header>
                                <h4>{index + 1}. {entry.school}</h4>
                                <p>{entry.degree}</p> 
                                <p>{entry.startDate}-{entry.currentStudent? 'Present' : entry.endDate}</p>
                                <p>{entry.location}</p>
                            </header>
                        </section>
                    )
                })
            }
        </section>
    )
}

export default PreviewEducationSection;
function PreviewExperienceSection({entries}){
    return (
        <section>
            <header>
                <h2>Experience</h2>
            </header>
            {
                entries.map((entry, index) => {
                    return (
                        <section key={entry.id}>
                            <header>
                                <h3>{index + 1}. {entry.company}</h3>
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
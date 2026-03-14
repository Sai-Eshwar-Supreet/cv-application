function PreviewExperienceSection({entries}){
    return (
        <section>
            <header>
                <h1>Experience</h1>
            </header>
            {
                entries.map((entry, index) => {
                    return (
                        <section>
                            <header>
                                <h1>{index + 1}. {entry.company}</h1>
                                <p>{entry.designation}</p> 
                                <p>{entry.startDate}-{entry.endDate}</p>
                                <p>{entry.location}</p>
                                <p><pre>{entry.description}</pre></p>
                            </header>
                        </section>
                    )
                })
            }
        </section>
    )
}

export default PreviewExperienceSection;
function PreviewEducationSection({entries}){
    return (
        <section>
            <header>
                <h2>Education</h2>
            </header>
            {
                entries.map((entry, index) => {
                    return (
                        <section key={entry.id}>
                            <header>
                                <h3>{index + 1}. {entry.school}</h3>
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
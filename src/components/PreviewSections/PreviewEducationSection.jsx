function PreviewEducationSection({entries}){
    return (
        <section>
            <header>
                <h1>Education</h1>
            </header>
            {
                entries.map((entry, index) => {
                    return (
                        <section>
                            <header>
                                <h1>{index + 1}. {entry.school}</h1>
                                <p>{entry.degree}</p> 
                                <p>{entry.startDate}-{entry.endDate}</p>
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
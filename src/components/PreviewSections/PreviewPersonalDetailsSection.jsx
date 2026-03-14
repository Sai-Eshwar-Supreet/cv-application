function PreviewPersonalDetailsSection({entry}){
    return (
        <section>
            <header>
                <h1>{entry.fullName}</h1>
            </header>
                <div className="contact-bar">
                    <div>
                        {entry.email}
                    </div>
                    <div>
                        {entry.phoneNumber}
                    </div>
                    <div>
                        {entry.location}
                    </div>
                </div>
        </section>
    )
}

export default PreviewPersonalDetailsSection;
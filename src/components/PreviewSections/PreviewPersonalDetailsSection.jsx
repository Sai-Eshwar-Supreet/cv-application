import { ICONS } from "../../Helpers/Icons";

function PreviewPersonalDetailsSection({entry}){
    return (
        <section className="resume-section hero-section">
            <header className="resume-header" >
                <h3>{entry.fullName}</h3>
            </header>
                <ul className="contact-bar">
                    <li className="contact-item">
                        {ICONS.email}
                        <span>{entry.email}</span>
                    </li>
                    <li className="contact-item">
                        {ICONS.phone}
                        <span>{entry.phoneNumber}</span>
                    </li>
                    <li className="contact-item">
                        {ICONS.location}
                        <span>{entry.location}</span>
                    </li>
                </ul>
        </section>
    )
}

export default PreviewPersonalDetailsSection;
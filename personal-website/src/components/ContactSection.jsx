import { CONTACTS } from '../data/contacts';
import { asset } from '../utils/asset';
import '../styles/ContactSection.css';

const isExternal = (href) => href.startsWith('http');

const ContactSection = () => (
    <section id="contact" className="contact-container">
        <h1>Contact</h1>
        <div className="contact-logo-section">
            {CONTACTS.map(({ id, href, logo, alt, label }) => (
                <div key={id} className={`info-part info-part--${id}`}>
                    <a
                        href={href}
                        {...(isExternal(href) && { target: '_blank', rel: 'noopener noreferrer' })}
                    >
                        <img src={asset(logo)} alt={alt} className="clickable-image" id={`${id}-logo`} />
                    </a>
                    <span>{label}</span>
                </div>
            ))}
        </div>
    </section>
);

export default ContactSection;

import React from 'react';
import '../styles/ContactSection.css';

const ContactSection = () => {
    return (
        <>
            <div className="contact-container">
                <h1>Contact</h1>
                <div className="contact-logo-section">
                    <div className="info-part" style={{marginTop: '10px'}}>
                        <a href="mailto:andrew_kim3@brown.edu" target="_blank" rel="noopener noreferrer">
                            <img src="/gmail-logo.png" alt="Gmail" className="clickable-image" id="gmail-logo" />
                        </a>
                        <span>andrew_kim3@brown.edu</span>
                    </div>

                    <div className="info-part">
                        <a href="https://www.linkedin.com/in/andrew-jaewon-kim" target="_blank" rel="noopener noreferrer">
                            <img src="/linkedin-logo.png" alt="LinkedIN" className="clickable-image" id="linkedin-logo" />
                        </a>
                        <span>andrew-jaewon-kim</span>
                    </div>

                    <div className="info-part" style={{marginTop: '1px'}}>
                        <a href="https://github.com/akimender" target="_blank" rel="noopener noreferrer">
                            <img src="/github-logo.png" alt="Github" className="clickable-image" id="github-logo" />
                        </a>
                        <span>akimender</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactSection;
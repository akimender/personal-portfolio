import FadeInSection from './FadeInSection';
import LanguagesScroll from './LanguagesScroll';
import '../styles/Skills.css';

const Skills = () => (
    <FadeInSection>
        <div className="skills-container">
            <h1 className="skills-title">My Skills</h1>
            <div className="skills-description">
                <p>
                    I have developed a strong technical skill set through a combination of academic coursework, personal projects, and hands-on experience in software engineering and machine learning. My proficiency in Python, Java, and JavaScript comes from building full-stack applications for my personal projects where I use tools like React, Django, and Flask to create seamless user experiences. Additionally, I have experience deploying applications using AWS and Docker, optimizing performance and scalability. Through these experiences, I’ve honed my ability to design efficient systems, analyze complex problems, and build solutions that are both scalable and impactful.
                </p>
            </div>
            <LanguagesScroll />
        </div>
    </FadeInSection>
);

export default Skills;

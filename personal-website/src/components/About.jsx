import FadeInSection from './FadeInSection';
import { asset } from '../utils/asset';
import '../styles/About.css';

const About = () => (
    <FadeInSection>
        <h1>About Me</h1>
        <div className="about-text-container">
            <p>
                Hi, I&apos;m Andrew. I&apos;m studying Applied Math and Computer Science at Brown, where I focus on software development, machine learning, and algorithmic thinking. I love exploring how mathematical intuition and modern computation can be used to solve practical problems and bring creative ideas to life. I am always excited to learn, build, and take on new challenges.
            </p>

            <img src={asset('andrew-pose.jpg')} alt="Andrew Kim" />
        </div>
    </FadeInSection>
);

export default About;

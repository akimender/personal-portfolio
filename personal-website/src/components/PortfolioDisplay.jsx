import FadeInSection from './FadeInSection';
import { PROJECTS } from '../data/projects';
import { asset } from '../utils/asset';
import '../styles/PortfolioDisplay.css';

const ProjectCard = ({ title, image, alt, imageId, githubUrl, liveUrl }) => (
    <div className="portfolio-item">
        <div className="portfolio-item-header">
            <h4>{title}</h4>
        </div>
        <div className="portfolio-item-body">
            <img src={asset(image)} alt={alt} id={imageId} />
            {githubUrl && (
                <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`${title} source code on GitHub`}>
                    <div className="overlay-github" />
                </a>
            )}
            {liveUrl && (
                <a href={liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Open ${title}`}>
                    <div className="overlay-link" />
                </a>
            )}
        </div>
    </div>
);

const PortfolioDisplay = () => (
    <FadeInSection>
        <h1>Projects</h1>
        <div className="portfolio-container">
            {PROJECTS.map((project) => (
                <ProjectCard key={project.title} {...project} />
            ))}
        </div>
    </FadeInSection>
);

export default PortfolioDisplay;

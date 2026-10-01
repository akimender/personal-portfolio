import LogoMarquee from './LogoMarquee';
import { TOOLS } from '../data/skills';
import '../styles/ToolsScroll.css';

const ToolsScroll = () => (
    <div>
        <h3>Tools</h3>
        <LogoMarquee logos={TOOLS} className="tools-container" />
    </div>
);

export default ToolsScroll;

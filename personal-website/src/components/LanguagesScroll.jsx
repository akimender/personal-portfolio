import LogoMarquee from './LogoMarquee';
import { LANGUAGES } from '../data/skills';
import '../styles/LanguagesScroll.css';

const LanguagesScroll = () => (
    <LogoMarquee logos={LANGUAGES} className="languages-container" hasTrailingSpacer />
);

export default LanguagesScroll;

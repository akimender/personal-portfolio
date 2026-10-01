import ParticlesBackground from './ParticlesBackground';
import FullNameTitleText from './FullNameTitleText';
import { asset } from '../utils/asset';
import '../styles/IntroScreen.css';

const IntroScreen = () => (
    <div className="intro-screen">
        <ParticlesBackground id="tsparticles" />

        <img
            src={asset('andrew-selfie.jpg')}
            alt="Selfie of Andrew Kim"
            className="intro-selfie no-select"
        />

        <FullNameTitleText />
    </div>
);

export default IntroScreen;

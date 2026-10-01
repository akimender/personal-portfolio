import { asset } from '../utils/asset';

const LogoTrack = ({ logos, hasTrailingSpacer, isDuplicate }) => (
    <div className="logo-scroll__wrapper" aria-hidden={isDuplicate || undefined}>
        {[...logos, ...logos].map((logo, index) => (
            <div className="logo-item" key={`${logo.name}-${index}`}>
                <img src={asset(logo.logo)} alt={logo.name} />
            </div>
        ))}
        {hasTrailingSpacer && <div className="logo-spacer" />}
    </div>
);

const LogoMarquee = ({ logos, className, hasTrailingSpacer = false }) => (
    <div className={className}>
        <div className="logo-scroll">
            <LogoTrack logos={logos} hasTrailingSpacer={hasTrailingSpacer} />
            <LogoTrack logos={logos} hasTrailingSpacer={hasTrailingSpacer} isDuplicate />
        </div>
    </div>
);

export default LogoMarquee;

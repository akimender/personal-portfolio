import React from 'react';
import ParticlesBackground from './ParticlesBackground';
import FullNameTitleText from './FullNameTitleText';

const IntroScreen = () => {
    return (
        <div className="intro-screen">
            <ParticlesBackground id="tsparticles" />
            
            <img
                src="/andrew-selfie.jpg"
                alt="Selfie of Andrew Kim"
                style={{
                    width: "300px",
                    height: "300px",
                    borderRadius: "50%",
                    border: "2px white solid",
                    objectFit: "cover",
                }}
                className="no-select"
            />

            <FullNameTitleText />
        </div>
    );
};

export default IntroScreen;
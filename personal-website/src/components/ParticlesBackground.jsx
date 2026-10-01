import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useState } from "react";
import { loadSlim } from "@tsparticles/slim";

const PARTICLES_OPTIONS = {
  background: {
    color: {
      value: "#00020f",
    },
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "attract",
      },
      onHover: {
        enable: true,
        mode: 'grab',
      },
    },
    modes: {
      push: {
        distance: 200,
        duration: 15,
      },
      grab: {
        distance: 140,
      },
    },
  },
  particles: {
    color: {
      value: "#FFFFFF",
    },
    links: {
      color: "#FFFFFF",
      distance: 160,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: true,
      speed: 0.3,
      straight: false,
    },
    number: {
      density: {
        enable: true,
      },
      value: 140,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 3 },
    },
  },
  detectRetina: true,
};

const ParticlesBackground = ({ id }) => {
  const [isEngineReady, setIsEngineReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setIsEngineReady(true));
  }, []);

  if (!isEngineReady) return null;

  return <Particles id={id} options={PARTICLES_OPTIONS} />;
};

export default ParticlesBackground;

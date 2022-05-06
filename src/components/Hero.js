//Internal Imports
import "./Hero.css";

//External Imports
import Typography from "@mui/material/Typography";
import Fade from '@mui/material/Fade';

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import React from "react";

function MyParticle({particleColor}){
    const particlesInit = async (main) => {
        console.log(main);
        await loadFull(main);
      };
    
    const particlesLoaded = (container) => {
        console.log(container);
    };
    return (
        <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}

        options={{
          fullScreen: false,
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "grab",
              },
              resize: true,
            },
            modes: {
              grab: {
                  distance: 200,
              },
            },
          },
          particles: {
            color: {
              value: particleColor,
            },
            links: {
              color: particleColor,
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 100,
            },
            opacity: {
              value: 0.2,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
    );
}

function Hero(){
  return (
    <React.Fragment>
        <div className="hero-container">
            <Fade 
                in={true}
                timeout={3000}
            >
                <div>
                    <Typography 
                        variant={"h2"}
                    >
                        Zohan Marediya
                    </Typography>
                    <Typography 
                        variant={"h4"}
                        color={"lightgray"}
                    >
                        Software Engineer
                    </Typography>
                </div>
            </Fade>
        </div>
        <MyParticle particleColor={"#ffffff"}/>
    </React.Fragment>
  );
};

export default Hero;
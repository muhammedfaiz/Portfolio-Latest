import {  PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import HackerRoom from "../components/HackerRoom";
import { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants";
import Target from "../components/Target";
import ReactLogo from "../components/ReactLogo";
import Cube from "../components/Cube";
import Rings from "../components/Rings";
import HeroCamera from "../components/HeroCamera";
import Button from "../components/Button";

const Hero = () => {
  
  //   positionX: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionY: {
  //     value: 0,
  //     min: -20,
  //     max: 10,
  //   },
  //   positionZ: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationX: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationY: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationZ: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   scale: {
  //     value: 1,
  //     min: 0.1,
  //     max: 10,
  //   },
  // });
  const isMobile = useMediaQuery({maxWidth:'768px'});
  const isTablet = useMediaQuery({minWidth:'768px',maxWidth:'1024px'});
  const isSmall = useMediaQuery({maxWidth:'480px'});

  const sizes = calculateSizes(isSmall,isMobile,isTablet);
  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-2">
        <p className="sm:text-3xl  text-2xl font-medium text-white text-center font-generalsans ">
          Hi, I&rsquo;m Muhammed Faiz
        </p>
        <div className="flex justify-center items-center">
          <span className="text-white text-center typing-container ">
            <span className="typing-text"></span>
            <span className="text-content"></span>
          </span>
        </div>
      </div>
      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault fov={75} position={[0, 0, 30]} />
            <HeroCamera isSmall={isSmall}>
            <HackerRoom
              scale={sizes.deskScale}
              position={sizes.deskPosition}
              rotation={[0, -Math.PI/2, 0]}
            />
            
            </HeroCamera>
            {!isSmall && !isMobile &&(
              <group>
              <Target position={sizes.targetPosition}/>
              <ReactLogo position={sizes.reactLogoPosition}/>
              <Cube position={sizes.cubePosition}/>
              <Rings position={sizes.ringPosition}/>
            </group>
            )}

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
      <div className="absolute bottom-5 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button name="Let's Work Together" isBeam containerClass="sm:w-fit w-full sm:min-w-96"/>
        </a>
      </div>
    </section>
  );
};
export default Hero;

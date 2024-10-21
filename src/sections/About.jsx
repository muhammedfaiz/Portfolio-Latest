import Globe from "react-globe.gl";
import Button from "../components/Button";
import { useState } from "react";
const About = () => {
    const [isCopied, setIsCopied] = useState(false)
    const handleCopy = () => {
        navigator.clipboard.writeText('faizmuhammed342@gmail.com');
        setIsCopied(true)
        setTimeout(()=>{
            setIsCopied(false)
        }, 3000)
    }
  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="grid1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Hi, I&apos;m Muhammed Faiz</p>
              <p className="grid-subtext">
                I&apos;m a software developer with a passion for creating
                innovative solutions to complex problems. With a strong
                foundation in computer science and a passion for learning, I am
                always looking for new challenges and opportunities to grow.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid2.png"
              alt="grid-2"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I have hands on experience with a wide range of technologies,
                including: React js , Node js, MongoDb, Express js, Next js,
                Tailwind css, Html, Css, Javascript, Typescript, Sql, Mysql,
                Postgresql, Git, Github, Figma, Socket.IO, Redis, AWS, S3
                Bucket, Cloudinary, JWT, Razor Pay, Paypal, Nginx, Data
                Structures and Algorithms.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4" id="about">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl={
                  "//unpkg.com/three-globe/example/img/earth-night.jpg"
                }
                bumpImageUrl={
                  "//unpkg.com/three-globe/example/img/earth-topology.png"
                }
                labelsData={[
                  {
                    lat: 9.981636,
                    lng: 76.299881,
                    text: "Kerala, India",
                    color: "white",
                    size: 0.02,
                  },
                ]}
              />
            </div>
            <div>
              <p className="grid-headtext">
                I am available to work remotely across every timezones.
              </p>
              <p className="grid-subtext">
                I am based in Kerala, India and I am available to work remotely
                from anywhere.
              </p>
              <a href="#contact">
              <Button
                name={"Contact me"}
                isBeam
                containerClass={"w-full mt-10"}
              />
              </a>
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">My passion for Coding.</p>
              <p className="grid-subtext">
                I love problem solving and I am always looking for new
                challenges and opportunities to grow. As an aspiring software
                developer, I&apos;m constantly driven by the desire to create
                innovative solutions and push the boundaries of what&apos;s possible
                in the digital realm. I&apos;m excited about the ever-evolving nature
                of technology and eager to contribute my skills to meaningful
                projects that can make a positive impact on people&apos;s lives.
              </p>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="/assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px]  h-fit object-cover sm:object-top"
            />
            <div className="space-y-2">
                <p className="grid-subtext text-center"> Contact me</p>
                <div className="copy-container" onClick={handleCopy}>
                    <img src={isCopied ? '/assets/tick.svg' : '/assets/copy.svg'} alt="copy" />
                    <p className="lg:text-xl md:text-lg font-medium text-gray_gradient text-white">faizmuhammed342@gmail.com</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;

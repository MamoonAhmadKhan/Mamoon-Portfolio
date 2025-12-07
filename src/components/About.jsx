import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import profilePic from "../assets/profile_pic.png";

const About = () => {
  return (
    <section id="about" className="py-16 px-48 max-[1100px]:px-20 font-sans">
      <div className="flex max-[800px]:flex-col-reverse items-center justify-between">
        {/* left side */}
        <div className="text-white text-left max-[800px]:text-center max-[800px]:w-full mt-8 w-1/2">
          <h2 className="text-3xl max-[425px]:text-lg max-[800px]:text-2xl max-[1000px]:text-2xl min-[2300px]:text-6xl font-bold mb-2 leading-tight">Hi, I am</h2>
          <h1 className="text-4xl max-[425px]:text-xl max-[800px]:text-3xl max-[1000px]:text-3xl min-[2300px]:text-7xl font-bold mb-4 leading-tight">
            Mamoon Ahmad
          </h1>

          {/* skills heading with typing effect */}
          <h3 className="text-2xl max-[425px]:text-lg max-[800px]:text-xl max-[1000px]:text-xl min-[2300px]:text-5xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <Typewriter
              words={[
                "Software Engineer",
                "Frontend Developer",
                "Programmer",
                "UI/UX Developer",
                "Coder",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={200}
              deleteSpeed={100}
              delaySpeed={2000}
            />
          </h3>

          {/* about me section */}
          <p className="text-base max-[800px]:text-xs min-[2300px]:text-2xl max-[1000px]:text-sm text-gray-300 mb-10 mt-8 leading-relaxed">
            A Computer Science graduate with a strong foundation in programming
            and web development, specialized in the Frontend Development (HTML,
            CSS, JavaScript, React, TailwindCSS, Bootstrap, TypeScript).
            Aspiring software engineer, eager to contribute innovative solutions
            in a challenging environment.
          </p>

          {/* resume download button */}
          <a
            href="https://drive.google.com/file/d/1OAHQWdrjIkRdINjlmtHqPK5mu1slAoug/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer inline-block text-white py-3 px-8 max-[425px]:py-1 max-[425px]:px-5 max-[800px]:py-2 max-[800px]:px-7 min-[2300px]:py-4 min-[2300px]:px-9 rounded-full mt-4 max-[425px]:text-sm max-[425px]:font-medium text-lg min-[2300px]:text-xl font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
          >
            Get my Resume
          </a>
        </div>

        {/* right side */}
        <div className="flex justify-center w-1/2 max-[500px]:w-full">
        <Tilt className="w-2/3 min-[2300px]:w-1/2 border-4 border-purple-700 rounded-full"
        tiltMaxAngleX={20}
        tiltMaxAngleY={20}
        perspective={1000}
        scale={1.05}
        transitionSpeed={1000}>
          <img
            src={profilePic}
            alt="Mamoon_Profile_Pic"
            className="w-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
          />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;

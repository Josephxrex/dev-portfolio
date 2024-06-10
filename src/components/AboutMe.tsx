import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import josephImage from '../assets/images/josepxrex.jpg';

const AboutMe = () => {
  return (
    <div className="relative flex flex-col md:flex-row h-auto md:h-screen p-10 md:p-20">
      <div className="w-full md:w-1/2 flex justify-center items-center mb-10 md:mb-0">
        <div className="w-48 h-48 md:w-full md:h-full rounded-full overflow-hidden shadow-lg">
          <img src={josephImage} alt="Joseph Camargo" className="w-full h-full object-cover md:hidden" />
          <img src={josephImage} alt="Joseph Camargo" className="hidden md:block w-full h-full object-cover" />
        </div>
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center p-4 md:p-10">
        <h1 className="font-abc text-3xl md:text-6xl mb-4">
          <ReactTypingEffect
            text={["I'm Joseph Camargo!"]}
            speed={100}
            eraseSpeed={50}
            eraseDelay={2000}
            typingDelay={500}
            cursor="|"
            displayTextRenderer={(text, i) => {
              return (
                <h1>
                  {text.split('').map((char, i) => {
                    const key = `${i}`;
                    return (
                      <span key={key} style={{ color: 'inherit' }}>
                        {char}
                      </span>
                    );
                  })}
                </h1>
              );
            }}
          />
        </h1>
        <p className="text-base md:text-lg mt-5 p-2 md:p-10 leading-relaxed">
          I am a passionate software developer with strong experience in backend development and a keen interest in frontend. I specialize in creating efficient and scalable solutions using the latest technologies and methodologies. Furthermore, I'm particularly interested in cloud architecture, and I am always looking to innovate and optimize infrastructure for maximum performance and security. With both technical and analytical skills, I continually seek to expand my knowledge and apply it in challenging environments to develop software that exceeds expectations.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;

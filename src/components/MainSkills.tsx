import React from 'react';
import lambda from '../assets/images/lambda.png';
import react from '../assets/images/react.png';
import ts from '../assets/images/ts.png';

const MainSkills = () => {
  return (
    <div className="relative flex flex-col p-20 w-full">
      <div className="text-center">
        <h1 className="font-abc text-5xl md:text-6xl p-5 ">Main Skills</h1>
        <p className="text-lg md:text-xl p-5">
          Here are some of the skills and technologies I specialize in:
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center pt-5 md:space-y-0 md:space-x-10">
        <div className="flex flex-col items-center justify-center">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg">
            <img src={lambda} alt="Skill 1" className="w-full h-full object-cover" />
          </div>
          <p className="text-center text-lg md:text-xl mt-4 p-5">Lambda</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg">
            <img src={react} alt="Skill 2" className="w-full h-full object-cover" />
          </div>
          <p className="text-center text-lg md:text-xl mt-4 p-5">React</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg">
            <img src={ts} alt="Skill 3" className="w-full h-full object-cover" />
          </div>
          <p className="text-center text-lg md:text-xl mt-4 p-5">TypeScript</p>
        </div>
      </div>
    </div>
  );
};

export default MainSkills;

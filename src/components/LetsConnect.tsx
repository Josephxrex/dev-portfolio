import React from 'react';
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion'; 

const LetsConnect: React.FC = () => {
  return (
    <section className="bg-gray-900 text-white py-12">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="text-center lg:text-left mb-6 lg:mb-0">
          <h2 className="text-3xl lg:text-4xl font-abc font-bold leading-tight mb-4">Let's Work Together</h2>
          <p className="text-lg">I'm excited about the possibility of collaborating with you on incredible projects.</p>
        </div>
        <div className="flex justify-center lg:justify-end">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mr-4"
          >
            <a href="mailto:efraincamargo01@gmail.com">
              <FaEnvelope className="text-gray-400 hover:text-white mr-2" size={30} />
            </a>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mr-4"
          >
            <a href="https://github.com/Josephxrex" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-gray-400 hover:text-white mr-2" size={30} />
            </a>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <a href="https://www.linkedin.com/in/joseph-efrain-camargo-8a8983235" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-gray-400 hover:text-white" size={30} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LetsConnect;

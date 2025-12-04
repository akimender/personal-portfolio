import React from 'react';
import { motion } from 'framer-motion';
import '../styles/About.css';

const About = ({ isAboutVisible }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isAboutVisible ? 1 : 0 }}
            transition={{ duration: 2 }}
        >
            <h1>About Me</h1>
            <div class="about-text-container">
                <p>
                    Hi, I'm Andrew. I'm studying Applied Math and Computer Science at Brown, where I focus on software development, machine learning, and algorithmic thinking. I love exploring how mathematical intuition and modern computation can be used to solve practical problems and bring creative ideas to life. I am always excited to learn, build, and take on new challenges.
                </p>

                <img src="andrew-pose.jpg" alt="Andrew Kim" />
            </div>
        </motion.div>
    );
};

export default About;
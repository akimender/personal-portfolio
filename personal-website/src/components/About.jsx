import React from 'react';
import { motion } from 'framer-motion';
import '../styles/About.css';

const About = ({ isAboutVisible }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isAboutVisible ? 1 : 0 }}
            transition={{ duration: 1.5 }}
        >
            <h1>About Me</h1>
            <div class="about-text-container">
                <p>
                    Hi! I'm Andrew, a sophomore studying Applied Math + CS at Brown, and I'm developing my skills in software development, machine learning, and algorithmic problem solving! I'm passionate about applying my technical skills to real-world challenges and creating innovative solutions! I'm always curious to learn about applying mathematical techniques to overcoming challenges and creating cool stuff!
                </p>

                <img src="andrew-pose.jpg" alt="Andrew Kim" />
            </div>
        </motion.div>
    );
};

export default About;
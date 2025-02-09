import React from 'react';
import { motion } from 'framer-motion';

const About = ({ isAboutVisible }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isAboutVisible ? 1 : 0 }}
            transition={{ duration: 1.5 }}
        >
            <h1>About Me</h1>
            <p>Welcome to my personal website! Here you can learn more about me and my work.</p>
        </motion.div>
    );
};

export default About;
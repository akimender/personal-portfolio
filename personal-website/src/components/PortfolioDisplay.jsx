import React from 'react';
import { motion } from 'framer-motion';
import '../styles/PortfolioDisplay.css';

const PortfolioDisplay = ({ isVisible }) => {
    return (
        <div style={{ height: '100vh' }}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1>Projects</h1>
                <div class="portfolio-container">
                    <div class="portfolio-item">
                        <h2>Project 1</h2>
                        <p>Project description</p>
                    </div>
                    <div class="portfolio-item">
                        <h2>Project 2</h2>
                        <p>Project description</p>
                    </div>
                    <div class="portfolio-item">
                        <h2>Project 3</h2>
                        <p>Project description</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default PortfolioDisplay;
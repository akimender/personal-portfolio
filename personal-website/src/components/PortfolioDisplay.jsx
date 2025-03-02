import React from 'react';
import { motion } from 'framer-motion';
import '../styles/PortfolioDisplay.css';

const PortfolioDisplay = ({ isProjectsVisible }) => {
    return (
        <div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isProjectsVisible ? 1 : 0 }}
                transition={{ duration: 2 }}
            >
                <h1>Projects</h1>
                <div class="portfolio-container">
                    <div class="portfolio-item">
                        <div class="portfolio-item-header">
                            <h4>Polls</h4>
                        </div>
                        <div class="portfolio-item-body">
                            <img src="polls-website.jpg" alt="Polls" />
                            <a href="https://github.com/akimender/andrew-polls" target="_blank" rel="noopener noreferrer">
                                <div className="overlay-github">
                                </div>
                            </a>
                            <a href="https://polls-web-eb121049f17c.herokuapp.com" target="_blank" rel="noopener noreferrer">
                                <div className="overlay-link">
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="portfolio-item">
                        <div class="portfolio-item-header">
                            <h4>Todos</h4>
                        </div>
                        <div class="portfolio-item-body">
                            <img src="todos-website.jpg" alt="Todos" />
                            <a href="https://github.com/akimender/andrew-todo-website" target="_blank" rel="noopener noreferrer">
                                <div className="overlay-github">
                                </div>
                            </a>
                            <a href="https://andrew-todo-website-27b72ebd6d60.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                <div className="overlay-link">
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="portfolio-item">
                        <div class="portfolio-item-header">
                            <h4>Illuminate</h4>
                        </div>
                        <div class="portfolio-item-body">
                            <img src="illuminate.jpg" alt="Illuminate" />
                            <a href="https://devpost.com/software/illuminated-qf09ik" target="_blank" rel="noopener noreferrer">
                                <div className="overlay-link">
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="portfolio-item">
                        <div class="portfolio-item-header">
                            <h4>Spaceman</h4>
                        </div>
                        <div class="portfolio-item-body">
                            <img src="spaceman.jpg" alt="Spaceman" />
                            <a href="https://github.com/akimender/andrew-spaceman" target="_blank" rel="noopener noreferrer">
                                <div className="overlay-github">
                                </div>
                            </a>
                            <a href="https://pages.git.generalassemb.ly/akimender/andrew-spaceman/" target="_blank" rel="noopener noreferrer">
                                <div className="overlay-link">
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="portfolio-item">
                        <div class="portfolio-item-header">
                            <h4>Movie Review</h4>
                        </div>
                        <div class="portfolio-item-body">
                            <img src="movie-review.jpg" alt="Movie Review" id="movie-review" />
                            <a href="https://github.com/akimender/movie-review-front-end" target="_blank" rel="noopener noreferrer">
                                <div className="overlay-github">
                                </div>
                            </a>
                            <a href="https://transcendent-toffee-fb8e1a.netlify.app/" target="_blank" rel="noopener noreferrer">
                                <div className="overlay-link">
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="portfolio-item">
                        <div class="portfolio-item-header">
                            <h4>BMC Website</h4>
                        </div>
                        <div class="portfolio-item-body">
                            <img src="brown-marketing.jpg" alt="Brown Marketing" />
                            <a href="https://github.com/akimender/brown-marketing" target="_blank" rel="noopener noreferrer">
                                <div className="overlay-github">
                                </div>
                            </a>
                            <a href="http://www.brownmarketingclub.com/" target="_blank" rel="noopener noreferrer">
                                <div className="overlay-link">
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default PortfolioDisplay;
import React from 'react';
import '../styles/Dashboard.css';

const Dashboard = () => {
    const scrollToPosition = (y) => {
        window.scrollTo({
            top: y,
            behavior: 'smooth'
        });
    }

    return (
        <div className="dashboard-container">
            <nav className="dashboard-nav">
                <ul>
                    <li onClick={() => scrollToPosition(0)}>Home</li>
                    <li onClick={() => scrollToPosition(650)}>About</li>
                    <li onClick={() => scrollToPosition(1300)}>Skills</li>
                    <li onClick={() => scrollToPosition(2000)}>Projects</li>
                    <li onClick={() => scrollToPosition(3000)}>Contact</li>
                </ul>
            </nav>
        </div>
    );
};

export default Dashboard;
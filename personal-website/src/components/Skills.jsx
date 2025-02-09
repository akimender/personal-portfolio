import React from 'react';
import LanguagesScroll from './LanguagesScroll';
import ToolsScroll from './ToolsScroll';

const Skills = () => {
    return (
        <div>
            <h1>Skills</h1>
            
            <div className="skills-container">
                <div>
                    <LanguagesScroll />
                </div>

                <div>
                    {/* <ToolsScroll /> UNDER CONSTRUCTION!*/}
                </div>
            </div>
        </div>
    );
};

export default Skills;
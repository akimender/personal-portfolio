import React from 'react';
import { motion } from 'framer-motion';
import '../styles/FullNameTitleText.css';

const FullNameTitleText = () => {
  return (
    <div className="title-text no-select">
      <h1 className="full-name-text">Andrew Kim</h1>
      <p className="no-select">Brown University, Applied Mathematics & Computer Science</p>
    </div>
  );
};

export default FullNameTitleText;
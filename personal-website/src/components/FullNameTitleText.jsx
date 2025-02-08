import React from 'react';
import { motion } from 'framer-motion';

const FullNameTitleText = ({ titleText }) => {
    return (
      <div className="title-text">
        {titleText.map((el, i) => (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: (i**(5/4)) / 8, // Increases delay for each next word based on i
            }}
            key={i}
            style={{ fontSize: '70px' }}
          >
            {el}{" "}
          </motion.span>
        ))}
      </div>
    );
};

export default FullNameTitleText;
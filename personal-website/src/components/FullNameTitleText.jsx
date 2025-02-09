import React from 'react';
import { motion } from 'framer-motion';

const FullNameTitleText = () => {
  const titleText = "Andrew Kim".split(" ");

  return (
    <div className="title-text no-select">
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
      <p className="no-select">Brown University, Applied Mathematics & Computer Science</p>
    </div>
  );
};

export default FullNameTitleText;
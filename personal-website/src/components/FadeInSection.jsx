import { motion } from 'framer-motion';

const FadeInSection = ({ children }) => (
    <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 2 }}
    >
        {children}
    </motion.div>
);

export default FadeInSection;

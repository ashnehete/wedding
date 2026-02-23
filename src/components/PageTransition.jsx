import { motion } from 'framer-motion';
import { useEffect } from 'react';

const PageTransition = ({ children }) => {
    useEffect(() => {
        if (window.scrollY > 400) {
            window.scrollTo(0, 400);
        }
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
        >
            {children}
        </motion.div>
    );
};

export default PageTransition;

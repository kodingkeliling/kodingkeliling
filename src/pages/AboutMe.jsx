import AboutMeBio from '../components/about/AboutMeBio';
import { AboutMeProvider } from '../context/AboutMeContext';
import { motion } from 'framer-motion';
import React, { useEffect } from "react";

const About = () => {
    useEffect(() => {
        document.title = "Koding Keliling | Tentang Kami";
    }, []);
	return (
		<AboutMeProvider>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
				className="container mx-auto"
			>
				<AboutMeBio />
			</motion.div>
		</AboutMeProvider>
	);
};

export default About;

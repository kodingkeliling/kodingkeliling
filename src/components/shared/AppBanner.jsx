import useThemeSwitcher from '../../hooks/useThemeSwitcher';
import { FiInstagram } from 'react-icons/fi';
import developerLight from '../../images/graphical.png';
import developerDark from '../../images/graphical.png';
import { motion } from 'framer-motion';

const AppBanner = () => {
	const [activeTheme] = useThemeSwitcher();

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
			className="flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2"
		>
			<div className="w-full md:w-1/3 text-left">
				<motion.h1
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.1,
					}}
					className="font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light capitalize"
				>
					Hallo, Kolingers
				</motion.h1>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.2,
					}}
					className="font-general-medium mt-4 text-lg md:text-xl lg:text-2xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200"
				>
					Layanan Pembuatan Portfolio, Company Profile, Invitation, dan Greeting Website.
				</motion.p>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.3,
					}}
					className="flex justify-center sm:block"
				>
					<a
						// download="Stoman-Resume.pdf"
						href="https://www.instagram.com/p/DF2Z9XvP7KJ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
						className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-blue-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-blue-50 focus:ring-1 focus:ring-blue-900 hover:bg-secondBlue-light text-gray-500 hover:text-white duration-500"
						aria-label="Price List"
						target='_blank' 
						rel="noreferrer" 
					>
						<FiInstagram className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiInstagram>
						<span className="text-sm sm:text-lg font-general-medium duration-100">
							Price List
						</span>
					</a>
				</motion.div>
			</div>
			<motion.div
				initial={{ opacity: 0, y: -180 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
				className="w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0"
			>
				<img
					src={
						activeTheme === 'dark' ? developerLight : developerDark
					}
					alt="Developer"
				/>
			</motion.div>
		</motion.section>
	);
};

export default AppBanner;

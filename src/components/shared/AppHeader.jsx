import { useState } from 'react';
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import useThemeSwitcher from '../../hooks/useThemeSwitcher';
import HireMeModal from '../HireMeModal';
import logoLight from '../../images/logo-light.png';
import logoDark from '../../images/logo-dark.png';
import Whatsapp from '../../images/whatsapp.png';
import { motion } from 'framer-motion';
import Button from '../reusable/Button';
import { useLocation } from 'react-router-dom'; 

const AppHeader = () => {
	const location = useLocation(); 
	const [showMenu, setShowMenu] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [activeTheme, setTheme] = useThemeSwitcher();

	function toggleMenu() {
		if (!showMenu) {
			setShowMenu(true);
		} else {
			setShowMenu(false);
		}
	}

	function showHireMeModal() {
		if (!showModal) {
			document
				.getElementsByTagName('html')[0]
				.classList.add('overflow-y-hidden');
			setShowModal(true);
		} else {
			document
				.getElementsByTagName('html')[0]
				.classList.remove('overflow-y-hidden');
			setShowModal(false);
		}
	}

	return (
		<motion.nav
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			id="nav"
			className="sm:container sm:mx-auto"
		>
			<div className="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6">
				{/* Header menu links and small screen hamburger menu */}
				<div className="flex justify-between items-center px-4 sm:px-0">
					<div>
						<Link to="/" className='flex items-center gap-1'>
							{activeTheme === 'dark' ? (
								<img
									src={logoDark}
									className="rounded-md"
									style={{ width: '54px' }}
									alt="Dark Logo"
								/>
							) : (
								<img
									src={logoLight}
									className="rounded-md"
									style={{ width: '54px' }}
									alt="Dark Logo"
								/>
							)}
							<div
								className="flex flex-col text-left uppercase text-xl text-primary-dark font-bold dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2 font-montserrat tracking-wider"
							>
								<span className='text-secondBlue-light dark:text-firstBlue-light'>
								koding
								</span>
								<span className='text-sm'>
								keliling
								</span>
							</div>
						</Link>
					</div>

					{/* Small screen hamburger menu */}
					<div className="sm:hidden flex items-center gap-2">
					<div
						onClick={() => setTheme(activeTheme)}
						aria-label="Theme Switcher"
						className="block sm:hidden ml-0 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
					>
						{activeTheme === 'dark' ? (
							<FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
						) : (
							<FiSun className="text-gray-200 hover:text-gray-50 text-xl" />
						)}
					</div>
						<button
							onClick={toggleMenu}
							type="button"
							className="focus:outline-none mt-[-10px]"
							aria-label="Hamburger Menu"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								className="h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light"
							>
								{showMenu ? (
									<FiX className="text-3xl" />
								) : (
									<FiMenu className="text-3xl" />
								)}
							</svg>
						</button>
					</div>
				</div>

				{/* Header links small screen */}
				<div
					className={
						showMenu
							? 'block m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none'
							: 'hidden'
					}
				>
					<Link
						to="/projects"
						className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
						aria-label="Projects"
					>
						Projects
					</Link>
					<Link
						to="/about"
						className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
						aria-label="About Me"
					>
						About Me
					</Link>
					<Link
						to="/contact"
						className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
						aria-label="Contact"
					>
						Contact
					</Link>
					<div className="border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-primary-light dark:border-secondary-dark">
						<a
							href='https://api.whatsapp.com/send/?phone=6281257578571&text=Hallo+admin+Koding Keliling&type=phone_number&app_absent=0'
							className="font-general-medium sm:hidden flex items-center justify-center text-left text-md bg-secondBlue-light hover:bg-thirdBlue-light text-white shadow-sm rounded-sm px-4 py-2 mt-2 duration-300 w-24"
							aria-label="Whatsapp Button"
						>
							<Button 
								title={
									<img 
										src={Whatsapp}
										style={{ width: '24px' }}
										alt="Whatsapp Logo"
									/>} 
								/>
						</a>
					</div>
				</div>

				{/* Header links large screen */}
				<div className="font-general-medium hidden m-0 sm:ml-0 mt-5 sm:mt-0 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none">
					<Link
						to="/projects"
						className={`block text-left text-lg  sm:mx-4 mb-2 sm:py-2 hover:text-secondBlue-light dark:hover:text-firstBlue-light ${location.pathname === '/projects' ? 'text-secondBlue-light dark:text-firstBlue-light' : 'text-primary-dark dark:text-ternary-light'}`}
						aria-label="Projects"
					>
						Projects
					</Link>
					<Link
						to="/about"
						className={`block text-left text-lg  sm:mx-4 mb-2 sm:py-2 hover:text-secondBlue-light dark:hover:text-firstBlue-light ${location.pathname === '/about' ? 'text-secondBlue-light dark:text-firstBlue-light' : 'text-primary-dark dark:text-ternary-light'}`}
						aria-label="About Me"
					>
						About Me
					</Link>
					<Link
						to="/contact"
						className={`block text-left text-lg  sm:mx-4 mb-2 sm:py-2 hover:text-secondBlue-light dark:hover:text-firstBlue-light ${location.pathname === '/contact' ? 'text-secondBlue-light dark:text-firstBlue-light' : 'text-primary-dark dark:text-ternary-light'}`}
						aria-label="Contact"
					>
						Contact
					</Link>
				</div>

				{/* Header right section buttons */}
				<div className="hidden sm:flex justify-between items-center flex-col md:flex-row">
					<div className="hidden md:flex">
						<a
							href='https://api.whatsapp.com/send/?phone=6281257578571&text=Hallo+admin+Koding Keliling&type=phone_number&app_absent=0'
							className="text-md font-general-medium flex items-center justify-center bg-secondBlue-light hover:bg-thirdBlue-light text-white shadow-sm rounded-md px-5 py-2.5 duration-300"
							aria-label="Whatsapp Button"
						>
							<Button 
								title={
									<img 
										src={Whatsapp}
										style={{ width: '24px' }}
										alt="Whatsapp Logo"
									/>} 
								/>
						</a>
					</div>

					{/* Theme switcher large screen */}
					<div
						onClick={() => setTheme(activeTheme)}
						aria-label="Theme Switcher"
						className="ml-8 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
					>
						{activeTheme === 'dark' ? (
							<FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
						) : (
							<FiSun className="text-gray-200 hover:text-gray-50 text-xl" />
						)}
					</div>
				</div>
			</div>
			{/* Whatsapp modal */}
			<div>
				{showModal ? (
					<HireMeModal
						onClose={showHireMeModal}
						onRequest={showHireMeModal}
					/>
				) : null}
				{showModal ? showHireMeModal : null}
			</div>
		</motion.nav>
	);
};

export default AppHeader;

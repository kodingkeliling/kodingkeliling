import {
	FiGithub,
	FiTwitter,
	FiLinkedin,
	FiGlobe,
	FiYoutube,
	FiInstagram,
} from 'react-icons/fi';
import { FaWhatsapp } from "react-icons/fa";
import Whatsapp from '../../images/whatsapp.png';
import AppFooterCopyright from './AppFooterCopyright';

const socialLinks = [
	{
		id: 1,
		icon: <FiInstagram />,
		url: 'https://www.instagram.com/educode.ai',
	},
	{
		id: 2,
		icon: <FiGithub />,
		url: 'https://github.com/kodingkeliling',
	},
	{
		id: 3,
		icon: 	<FaWhatsapp />,
		url: 'https://api.whatsapp.com/send/?phone=6281257578571&text=Hallo+admin+Koding Keliling&type=phone_number&app_absent=0',
	},
];

const AppFooter = () => {
	return (
		<div className="container mx-auto">
			<div className="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
				{/* Footer social links */}
				<div className="font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-28">
					<p className="text-3xl sm:text-4xl text-primary-dark dark:text-primary-light mb-5">
						Ikuti Kami
					</p>
					<ul className="flex gap-4 sm:gap-8">
						{socialLinks.map((link) => (
							<a
								href={link.url}
								target="__blank"
								key={link.id}
								className="text-gray-400 hover:text-secondBlue-light dark:hover:text-firstBlue-light cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300"
							>
								<i className="text-xl sm:text-2xl md:text-3xl">
									{link.icon}
								</i>
							</a>
						))}
					</ul>
				</div>

				<AppFooterCopyright />
			</div>
		</div>
	);
};

export default AppFooter;

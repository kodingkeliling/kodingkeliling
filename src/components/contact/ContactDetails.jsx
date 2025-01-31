import { FiPhone, FiMapPin, FiMail } from 'react-icons/fi';
import { FaRegStar } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";

const contacts = [
	{
		id: 1,
		name: 'Kota Cimahi, Indonesia',
		icon: <FiMapPin />,
	},
	{
		id: 2,
		name: 'kodingkeliling@gmail.com',
		icon: <FiMail />,
	},
	{
		id: 3,
		name: '+62 812 5757 8571',
		icon: <FiPhone />,
	},
];

const ContactDetails = () => {
	return (
		<div className="w-full lg:w-1/2">
			<div className="text-left max-w-xl px-6">
				<h2 className="font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8">
					Detail Kontak
				</h2>
				<ul className="font-general-regular">
					{contacts.map((contact) => (
						<li className="flex " key={contact.id}>
							<i className="text-2xl text-gray-500 dark:text-gray-400 mr-4">
								{contact.icon}
							</i>
							<span className="text-lg mb-4 text-ternary-dark dark:text-ternary-light">
								{contact.name}
							</span>
						</li>
					))}
				</ul>
				<div className='flex items-center gap-2'>
					<button data-tally-open="3qJKj9" data-tally-layout="modal" data-tally-emoji-text="👋" data-tally-emoji-animation="wave" className='bg-secondBlue-light hover:bg-thirdBlue-light px-4 py-2 rounded-md text-white'><FaRegStar/></button>
					<div className='flex items-center gap-2 dark:text-white'><FaArrowLeft className='animate-bounce-left'/> Ayoo beri ulasan!</div>
				</div>
			</div>
		</div>
	);
};

export default ContactDetails;

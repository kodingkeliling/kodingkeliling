// Import images
import IomItb1 from '../images/iom/image1.png';
import IomItb2 from '../images/iom/image2.png';
import IomItb3 from '../images/iom/image3.png';
import PssLisma1 from '../images/pss-lisma/image1.png';
import PssLisma2 from '../images/pss-lisma/image2.png';
import PssLisma3 from '../images/pss-lisma/image3.png';

// Import icons
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube,
} from 'react-icons/fi';

export const singleProjectData = [
// IOM ITB
	{
	slug: 'iom-itb',
	ProjectHeader: {
		title: 'IOM ITB - Website Donations',
		publishDate: '09 Jul 2024',
		tags: 'Frontend / Backend',
	},
	ProjectImages: [
		{
			id: 1,
			title: 'IOM ITB - Website Donations',
			img: IomItb1,
		},
		{
			id: 2,
			title: 'IOM ITB - Website Donations',
			img: IomItb2,
		},
		{
			id: 3,
			title: 'IOM ITB - Website Donations',
			img: IomItb3,
		},
	],
	ProjectInfo: {
		ClientHeading: 'Tentang Pelanggan',
		CompanyInfo: [
			{
				id: 1,
				title: 'Nama',
				details: 'IOM ITB',
			},
			{
				id: 2,
				title: 'Layanan',
				details: 'Frontend & Backend Development',
			},
			{
				id: 3,
				title: 'Website',
				details: 'https://iom-itb.id',
			},
			{
				id: 4,
				title: 'Telp',
				details: '-',
			},
		],
		ObjectivesHeading: 'Capaian',
		ObjectivesDetails:
			'Proyek IOM ITB - Website Donations berhasil menghadirkan platform digital yang mendukung pengelolaan donasi dengan antarmuka yang modern dan responsif. Dengan menggunakan teknologi seperti HTML, CSS, JavaScript, Vue.js, TailwindCSS, dan Express.js, website ini dirancang untuk memberikan pengalaman pengguna yang optimal. Selain itu, integrasi dengan Tally.so memungkinkan pengumpulan data donasi secara efisien dan terorganisir.',
		Technologies: [
			{
				title: 'Tools & Teknologi',
				techs: [
					'HTML',
					'CSS',
					'JavaScript',
					'Vue.js',
					'TailwindCSS',
					'Express.js',
					'Tally.so',
				],
			},
		],
		ProjectDetailsHeading: 'Detail Projek',
		ProjectDetails: [
			{
				id: 1,
				details:
					'Proyek ini berhasil mengembangkan platform donasi yang modern dan responsif untuk mendukung IOM ITB dalam pengelolaan donasi secara digital. Website ini dirancang dengan antarmuka yang user-friendly, memungkinkan pengguna dengan berbagai latar belakang untuk dengan mudah menavigasi dan menggunakan fitur-fitur yang tersedia. Teknologi seperti Vue.js digunakan untuk membangun front-end yang dinamis, sementara Express.js menangani back-end dengan performa yang andal. Selain itu, penggunaan TailwindCSS memberikan fleksibilitas dalam menciptakan desain yang estetis namun tetap fungsional. Salah satu keberhasilan utama adalah integrasi dengan Tally.so, yang memungkinkan pencatatan data donasi secara otomatis dan akurat, sehingga mempermudah pengelolaan dan pelaporan.',
			},
			{
				id: 2,
				details:
					'Proyek ini tidak hanya memenuhi ekspektasi klien, tetapi juga memberikan nilai tambah dengan menghadirkan solusi digital yang mampu meningkatkan kepercayaan dan kenyamanan pengguna dalam berdonasi. Dengan kolaborasi tim yang efektif, setiap aspek teknis dan desain berhasil diwujudkan untuk memenuhi kebutuhan unik klien.',
			},
			{
				id: 3,
				details:
					'Proyek ini menghadapi sejumlah tantangan yang cukup kompleks selama proses pengembangannya. Salah satu tantangan utama adalah membangun fitur pengelolaan donasi yang aman dan intuitif, sehingga dapat diakses dengan mudah oleh berbagai tipe pengguna tanpa mengorbankan aspek keamanan data. Responsivitas website menjadi perhatian utama, mengingat pengguna dapat mengakses platform ini melalui berbagai perangkat, mulai dari desktop hingga ponsel.',
			},
			{
				id: 4,
				details:
					'Proses debugging dan pengujian yang ketat diperlukan untuk menjamin stabilitas dan performa website, terutama ketika menangani jumlah pengguna dan data yang besar. Meski begitu, tantangan-tantangan ini berhasil diatasi melalui komunikasi yang efektif dalam tim serta dedikasi untuk terus mencari solusi terbaik dalam setiap tahap pengembangan.',
			},
		],
		SocialSharingHeading: 'Sosial Media',
		SocialSharing: [
			{
				id: 1,
				name: 'Instagram',
				icon: <FiInstagram />,
				url: 'https://www.instagram.com/iom_itb',
			},
			{
				id: 2,
				name: 'Youtube',
				icon: <FiYoutube />,
				url: 'https://www.youtube.com/@iom-itb',
			},
		],
	},
	RelatedProject: {
		title: 'Projek Serupa',
		Projects: [
			{
				id: 1,
				title: 'PSS LISMA UNPAS',
				img: PssLisma1,
				slug: 'pss-lisma'
			},
		],
	},
},

// PSS LISMA
{
	slug: 'pss-lisma',
	ProjectHeader: {
		title: 'PSS LISMA UNPAS - Pasanggiri Seni Sunda',
		publishDate: '02 Mar 2024',
		tags: 'Frontend',
	},
	ProjectImages: [
		{
			id: 1,
			title: 'PSS LISMA UNPAS - Pasanggiri Seni Sunda',
			img: PssLisma1,
		},
		{
			id: 2,
			title: 'PSS LISMA UNPAS - Pasanggiri Seni Sunda',
			img: PssLisma2,
		},
		{
			id: 3,
			title: 'PSS LISMA UNPAS - Pasanggiri Seni Sunda',
			img: PssLisma3,
		},
	],
	ProjectInfo: {
		ClientHeading: 'Tentang Pelanggan',
		CompanyInfo: [
			{
				id: 1,
				title: 'Nama',
				details: 'LISMA UNPAS',
			},
			{
				id: 2,
				title: 'Layanan',
				details: 'Frontend',
			},
			{
				id: 3,
				title: 'Website',
				details: 'https://www.psslismaunpasbdg.com/',
			},
			{
				id: 4,
				title: 'Telp',
				details: '-',
			},
		],
		ObjectivesHeading: 'Capaian',
		ObjectivesDetails:
			'Proyek PSS LISMA UNPAS bertujuan untuk menciptakan platform digital yang mendukung penyelenggaraan Pasanggiri Seni Sunda sebagai bagian dari upaya pelestarian budaya. Website ini dirancang dengan antarmuka modern dan responsif, yang tetap mencerminkan nilai-nilai budaya Sunda sebagai identitas utama. Melalui teknologi seperti Vue.js dan TailwindCSS, platform ini berhasil memberikan pengalaman pengguna yang intuitif dan nyaman, baik pada perangkat desktop maupun seluler.',
		Technologies: [
			{
				title: 'Tools & Teknologi',
				techs: [
					'HTML',
					'CSS',
					'JavaScript',
					'Vue.js',
					'TailwindCSS',
					'Tally.so'
				],
			},
		],
		ProjectDetailsHeading: 'Detail Projek',
		ProjectDetails: [
			{
				id: 1,
				details:
					'Proyek PSS LISMA UNPAS - Pasanggiri Seni Sunda dirancang sebagai platform digital modern untuk mendukung kegiatan Pasanggiri Seni Sunda yang diselenggarakan oleh LISMA UNPAS. Dengan fokus pada frontend development, proyek ini memanfaatkan teknologi Vue.js dan TailwindCSS untuk menciptakan antarmuka yang responsif, estetis, dan mudah digunakan di berbagai perangkat.',
			},
			{
				id: 2,
				details:
					'Salah satu tujuan utama website ini adalah menyediakan sistem pendaftaran peserta Pasanggiri Seni Sunda secara daring. Untuk mendukung hal ini, Tally.so diintegrasikan sebagai alat pendataan peserta yang mendaftar. Melalui sistem ini, peserta dapat dengan mudah mengisi formulir pendaftaran, menyampaikan informasi yang dibutuhkan, dan mengkonfirmasi partisipasi mereka dalam acara. Proses ini memudahkan panitia dalam mengelola data peserta secara efisien dan terorganisir.',
			},
			{
				id: 3,
				details:
					'Tantangan terbesar dalam pengembangan proyek ini adalah memastikan antarmuka pengguna mencerminkan keindahan budaya Sunda tanpa mengorbankan kemudahan akses bagi pengguna modern. Oleh karena itu, desain dan pengembangan website dilakukan dengan mengutamakan elemen budaya tradisional Sunda yang selaras dengan kenyamanan pengguna.',
			},
			{
				id: 4,
				details:
					'Dengan keberhasilan penyelesaian proyek ini, LISMA UNPAS kini memiliki platform digital yang tidak hanya mempermudah pengelolaan acara, tetapi juga memperkuat pelestarian seni dan budaya Sunda melalui teknologi modern. Website ini menjadi penghubung antara tradisi dan kemajuan, mendukung keterlibatan yang lebih luas dari masyarakat.',
			},
		],
		SocialSharingHeading: 'Sosial Media',
		SocialSharing: [
			{
				id: 1,
				name: 'Instagram',
				icon: <FiInstagram />,
				url: 'https://www.instagram.com/pasanggiri.lisma',
			},
			{
				id: 2,
				name: 'Youtube',
				icon: <FiYoutube />,
				url: 'https://www.youtube.com/@lingkungsenimahasiswa8569',
			},
		],
	},
	RelatedProject: {
		title: 'Projek Serupa',
		Projects: [
			{
				id: 1,
				title: 'IOM-ITB',
				img: IomItb1,
				slug: 'iom-itb'
			},
		],
	},
}];

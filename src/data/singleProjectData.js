// Import images
import IomItb1 from '../images/iom/image1.png';
import IomItb2 from '../images/iom/image2.png';
import IomItb3 from '../images/iom/image3.png';
import PssLisma1 from '../images/pss-lisma/image1.png';
import PssLisma2 from '../images/pss-lisma/image2.png';
import PssLisma3 from '../images/pss-lisma/image3.png';
import Karavista1 from '../images/karavista/image1.png';
import Karavista2 from '../images/karavista/image2.png';
import Karavista3 from '../images/karavista/image3.png';
import Jamjam1 from '../images/jamjam/image1.png';
import Jamjam2 from '../images/jamjam/image2.png';
import Jamjam3 from '../images/jamjam/image3.png';
import ValentineChalida1 from '../images/valentine-chalida/image1.png';
import ValentineChalida2 from '../images/valentine-chalida/image2.png';
import KsrUnpas1 from '../images/ksr-app/image1.png';
import KsrUnpas2 from '../images/ksr-app/image2.png';
import KsrUnpas3 from '../images/ksr-app/image3.png';
import LismaUnpas1 from '../images/lisma-app/image1.png';
import LismaUnpas2 from '../images/lisma-app/image2.png';
import LismaUnpas3 from '../images/lisma-app/image3.png';
import LllApp1 from '../images/lll-app/image1.png';
import LllApp2 from '../images/lll-app/image2.png';
import LllApp3 from '../images/lll-app/image3.png';

// Import icons
import {
	FiInstagram,
	FiYoutube,
} from 'react-icons/fi';

export const singleProjectData = [
// KSR
	{
	slug: '777luckylaunchatlucy',
	ProjectHeader: {
		title: '777 Lucky Launch at Lucy',
		publishDate: '24 Sep 2025',
		tags: 'Frontend / Backend',
	},
	ProjectImages: [
		{
			id: 1,
			title: 'LLL - Section Hero LLL',
			img: LllApp1,
		},
		{
			id: 2,
			title: 'LLL - Section Booking Tenant',
			img: LllApp2,
		},
		{
			id: 3,
			title: 'LLL - Section Register Fun Run',
			img: LllApp3,
		},
	],
	ProjectInfo: {
		ClientHeading: 'Tentang Pelanggan',
		CompanyInfo: [
			{
				id: 1,
				title: 'Nama',
				details: '777 Lucky Launch at Lucy',
			},
			{
				id: 2,
				title: 'Layanan',
				details: 'Frontend & Backend Development',
			},
			{
				id: 3,
				title: 'Website',
				details: 'https://777luckylaunchatlucy.com',
			},
			{
				id: 4,
				title: 'Telp',
				details: '-',
			},
		],
		ObjectivesHeading: 'Capaian',
		ObjectivesDetails:
			'Website 777 Lucky Launch at Lucy merupakan platform utama untuk acara fun run dan bazar produk yang diselenggarakan oleh Lucy. Pengguna dapat dengan mudah mendaftar untuk mengikuti fun run secara online, serta booking tenant (stand) untuk mengikuti bazar produk melalui aplikasi ini. Fitur utama dari website ini adalah sistem pendaftaran peserta fun run dan reservasi tenant bazar yang praktis serta otomatis, sehingga memudahkan seluruh proses administrasi acara. Dengan antarmuka yang modern dan user-friendly, 777 Lucky Launch at Lucy memberikan pengalaman terbaik untuk peserta maupun tenant agar dapat terlibat langsung dalam rangkaian acara secara efisien dan tanpa hambatan.',
		Technologies: [
			{
				title: 'Tools & Teknologi',
				techs: [
					'Typescript',
					'Next.js',
					'TailwindCSS',
					'Spreadsheet',
				],
			},
		],
		ProjectDetailsHeading: 'Detail Projek',
		ProjectDetails: [
			{
				id: 1,
				details:
					'Website 777 Lucky Launch at Lucy dibangun untuk mendukung event fun run serta bazar produk dari Lucy. Sistem digital ini memudahkan peserta mendaftar fun run secara online maupun melakukan reservasi tenant bazar produk dengan proses yang otomatis dan efisien. Setiap data pendaftaran langsung direkap secara real-time, sehingga memudahkan panitia dalam pengelolaan administrasi.',
			},
			{
				id: 2,
				details:
					'Dalam perjalanan pengembangan, tantangan muncul pada implementasi pendaftaran peserta dan reservasi tenant yang fleksibel, serta memastikan keamanan data hingga kemudahan akses di berbagai perangkat. Integrasi otomatis ke spreadsheet membantu tim event mengelola data peserta tanpa proses manual yang rumit.',
			},
			{
				id: 3,
				details:
					'Desain website dibuat modern serta user-friendly untuk memudahkan seluruh pengunjung, baik peserta fun run maupun tenant bazar. Fitur navigasi, konfirmasi pendaftaran otomatis, serta sistem booking yang terstruktur menjadi nilai tambah agar pengalaman pengguna berjalan lancar.',
			},
			{
				id: 4,
				details:
					'Penerapan teknologi seperti Typescript, Next.js, TailwindCSS, serta integrasi spreadsheet menjadi fondasi utama sistem ini. Kolaborasi tim yang terkoordinasi memastikan setiap kebutuhan event dapat terpenuhi dengan baik melalui platform yang informatif dan mudah digunakan.',
			},
		],
		SocialSharingHeading: 'Sosial Media',
		SocialSharing: [
			{
				id: 1,
				name: 'Instagram',
				icon: <FiInstagram />,
				url: 'https://www.instagram.com/limsaunpas',
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
				title: 'LISMA UNPAS',
				img: LismaUnpas1,
				slug: 'limsa-unpas'
			},
			{
				id: 1,
				title: 'KSR UNPAS',
				img: KsrUnpas1,
				slug: 'karavista'
			},
			{
				id: 1,
				title: 'IOM ITB',
				img: IomItb1,
				slug: 'iom-itb'
			},
		],
	},
},

// KSR
	{
	slug: 'ksr-unpas',
	ProjectHeader: {
		title: 'Koprs Sukarela UNPAS',
		publishDate: '22 Agu 2025',
		tags: 'Frontend / Backend',
	},
	ProjectImages: [
		{
			id: 1,
			title: 'KSR UNPAS - Section Hero KSR',
			img: KsrUnpas1,
		},
		{
			id: 2,
			title: 'KSR UNPAS - Section Tim Kami',
			img: KsrUnpas2,
		},
		{
			id: 3,
			title: 'KSR UNPAS - Section Pendaftaran',
			img: KsrUnpas3,
		},
	],
	ProjectInfo: {
		ClientHeading: 'Tentang Pelanggan',
		CompanyInfo: [
			{
				id: 1,
				title: 'Nama',
				details: 'KSR UNPAS',
			},
			{
				id: 2,
				title: 'Layanan',
				details: 'Frontend & Backend Development',
			},
			{
				id: 3,
				title: 'Website',
				details: 'https://ksruniversitaspasundan.com',
			},
			{
				id: 4,
				title: 'Telp',
				details: '-',
			},
		],
		ObjectivesHeading: 'Capaian',
		ObjectivesDetails:
			'Website KSR (Korps Sukarela) UNPAS berhasil menjadi pusat informasi utama bagi organisasi KSR Universitas Pasundan. Dengan tampilan modern dan aksesibel, website ini memuat profil organisasi, program kegiatan, struktur kepengurusan, hingga informasi pendaftaran anggota baru secara lengkap dan terstruktur. Salah satu fitur utamanya adalah sistem pendaftaran anggota baru secara online, di mana data pendaftar langsung tersimpan otomatis pada spreadsheet, sehingga memudahkan proses administrasi dan pengelolaan data anggota. Teknologi yang digunakan seperti Typescript, Next.js, TailwindCSS, Tally.so, dan integrasi Spreadsheet, memastikan website ini tidak hanya informatif tetapi juga efisien dalam pengelolaan data dan mudah diakses oleh seluruh mahasiswa yang ingin bergabung dengan KSR.',
		Technologies: [
			{
				title: 'Tools & Teknologi',
				techs: [
					'Typescript',
					'Next.js',
					'TailwindCSS',
					'Tally.so',
					'Spreadsheet',
				],
			},
		],
		ProjectDetailsHeading: 'Detail Projek',
		ProjectDetails: [
			{
				id: 1,
				details:
					'Projek ini berhasil mengembangkan website organisasi KSR UNPAS dengan tampilan modern, informatif, serta mudah diakses oleh mahasiswa. Website menyediakan fitur-fitur utama seperti halaman profil organisasi, informasi program kegiatan, struktur kepengurusan, dan sistem pendaftaran anggota baru secara online. Dengan antarmuka yang user-friendly dan desain yang clean, seluruh informasi dan fitur yang dibutuhkan anggota dapat diakses dengan cepat dan mudah.',
			},
			{
				id: 2,
				details:
					'KSR UNPAS kini memiliki sistem pendaftaran anggota baru secara digital yang terintegrasi langsung ke spreadsheet, sehingga proses rekap dan pengelolaan data anggota menjadi jauh lebih terstruktur dan efisien. Selain itu, admin dapat dengan mudah memantau data pendaftar dan melakukan rekap secara otomatis tanpa proses manual yang memakan waktu.',
			},
			{
				id: 3,
				details:
					'Dalam proses pengembangan, beberapa tantangan muncul seperti integrasi form pendaftaran dengan spreadsheet agar data dapat terekam otomatis dan aman, serta memastikan website tetap responsif di berbagai perangkat. Optimalisasi kecepatan akses dan kemudahan navigasi juga menjadi perhatian khusus agar pengalaman pengguna tetap maksimal.',
			},
			{
				id: 4,
				details:
					'Dengan kolaborasi tim yang solid serta pemilihan teknologi yang tepat seperti Typescript, Next.js, TailwindCSS, dan Tally.so, seluruh kendala dalam pengembangan website KSR UNPAS berhasil diatasi. Hasilnya adalah website informatif dan efisien yang mendukung aktivitas organisasi secara digital dan modern.',
			},
		],
		SocialSharingHeading: 'Sosial Media',
		SocialSharing: [
			{
				id: 1,
				name: 'Instagram',
				icon: <FiInstagram />,
				url: 'https://www.instagram.com/ksrunpas',
			},
			{
				id: 2,
				name: 'Youtube',
				icon: <FiYoutube />,
				url: 'https://www.youtube.com/@ksrunpas8325',
			},
		],
	},
	RelatedProject: {
		title: 'Projek Serupa',
		Projects: [
			{
				id: 1,
				title: 'Lisma UNPAS',
				img: LismaUnpas1,
				slug: 'pss-lisma'
			},
			{
				id: 1,
				title: 'Karavista',
				img: Karavista3,
				slug: 'karavista'
			},
			{
				id: 1,
				title: 'IOM ITB',
				img: IomItb1,
				slug: 'iom-itb'
			},
		],
	},
},

// Lisma
	{
	slug: 'limsa-unpas',
	ProjectHeader: {
		title: 'Lingkung Seni Mahasiswa UNPAS',
		publishDate: '22 Agu 2025',
		tags: 'Frontend / Backend',
	},
	ProjectImages: [
		{
			id: 1,
			title: 'LISMA UNPAS - Section Hero Lisma',
			img: LismaUnpas1,
		},
		{
			id: 2,
			title: 'LISMA UNPAS - Section Tim Kami',
			img: LismaUnpas2,
		},
		{
			id: 3,
			title: 'LISMA UNPAS - Section Pendaftaran',
			img: LismaUnpas3,
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
				details: 'Frontend & Backend Development',
			},
			{
				id: 3,
				title: 'Website',
				details: 'https://limsa-unpas.com',
			},
			{
				id: 4,
				title: 'Telp',
				details: '-',
			},
		],
		ObjectivesHeading: 'Capaian',
		ObjectivesDetails:
			'Website LISMA UNPAS berhasil menjadi wadah informasi utama bagi Lingkung Seni Mahasiswa Universitas Pasundan. Melalui tampilan yang modern dan aksesibel, website ini menampilkan profil organisasi, unit kegiatan, struktur kepengurusan, hingga informasi pendaftaran anggota baru secara lengkap dan terstruktur. Salah satu fitur unggulannya adalah pendaftaran anggota baru secara online, di mana data pendaftar langsung tersimpan otomatis pada spreadsheet, sehingga memudahkan proses administrasi dan pengelolaan anggota. Teknologi yang digunakan seperti Typescript, Next.js, TailwindCSS, Tally.so, dan integrasi Spreadsheet, memastikan website ini tidak hanya informatif namun juga efisien dalam pengelolaan data dan mudah diakses oleh seluruh mahasiswa yang ingin bergabung dengan LISMA.',
		Technologies: [
			{
				title: 'Tools & Teknologi',
				techs: [
					'Typescript',
					'Next.js',
					'TailwindCSS',
					'Tally.so',
					'Spreadsheet',
				],
			},
		],
		ProjectDetailsHeading: 'Detail Projek',
		ProjectDetails: [
			{
				id: 1,
				details:
					'Projek ini berhasil mengembangkan website organisasi LISMA UNPAS dengan tampilan modern, informatif, dan mudah diakses oleh seluruh mahasiswa. Website ini dilengkapi berbagai fitur utama seperti halaman profil organisasi, list unit kegiatan, struktur kepengurusan interaktif, serta sistem pendaftaran anggota baru secara online. Dengan antarmuka yang user-friendly dan desain yang clean, seluruh informasi organisasi dapat diakses dengan mudah dan cepat.',
			},
			{
				id: 2,
				details:
					'LISMA UNPAS kini memiliki sistem pendaftaran anggota baru secara digital yang langsung terhubung ke spreadsheet, sehingga proses rekap dan manajemen data menjadi lebih terstruktur, aman, dan mempermudah admin dalam mengelola data anggota. Selain itu, website ini juga mendukung publikasi acara dan pengumuman penting agar bisa menjangkau lebih banyak mahasiswa di lingkungan kampus.',
			},
			{
				id: 3,
				details:
					'Dalam proses pengembangan, tim menghadapi tantangan pada integrasi form pendaftaran dengan spreadsheet agar data dapat terekam otomatis tanpa kendala, serta memastikan website tetap responsif di berbagai perangkat. Optimalisasi kecepatan akses dan kemudahan navigasi untuk pengunjung juga menjadi perhatian khusus agar pengalaman pengguna tetap maksimal.',
			},
			{
				id: 4,
				details:
					'Melalui kolaborasi tim dan pemilihan teknologi yang sesuai seperti Typescript, Next.js, TailwindCSS, dan Tally.so, seluruh tantangan pada pengembangan website LISMA UNPAS dapat diatasi dan menghasilkan platform informatif serta efisien yang siap menunjang aktivitas organisasi secara digital.',
			},
		],
		SocialSharingHeading: 'Sosial Media',
		SocialSharing: [
			{
				id: 1,
				name: 'Instagram',
				icon: <FiInstagram />,
				url: 'https://www.instagram.com/limsaunpas',
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
				title: 'PSS LISMA UNPAS',
				img: PssLisma2,
				slug: 'pss-lisma'
			},
			{
				id: 1,
				title: 'Karavista',
				img: Karavista3,
				slug: 'karavista'
			},
			{
				id: 1,
				title: 'IOM ITB',
				img: IomItb1,
				slug: 'iom-itb'
			},
		],
	},
},

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
			'Projek IOM ITB - Website Donations berhasil menghadirkan platform digital yang mendukung pengelolaan donasi dengan antarmuka yang modern dan responsif. Dengan menggunakan teknologi seperti HTML, CSS, JavaScript, Vue.js, TailwindCSS, dan Express.js, website ini dirancang untuk memberikan pengalaman pengguna yang optimal. Selain itu, integrasi dengan Tally.so memungkinkan pengumpulan data donasi secara efisien dan terorganisir.',
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
					'Projek ini berhasil mengembangkan platform donasi yang modern dan responsif untuk mendukung IOM ITB dalam pengelolaan donasi secara digital. Website ini dirancang dengan antarmuka yang user-friendly, memungkinkan pengguna dengan berbagai latar belakang untuk dengan mudah menavigasi dan menggunakan fitur-fitur yang tersedia. Teknologi seperti Vue.js digunakan untuk membangun front-end yang dinamis, sementara Express.js menangani back-end dengan performa yang andal. Selain itu, penggunaan TailwindCSS memberikan fleksibilitas dalam menciptakan desain yang estetis namun tetap fungsional. Salah satu keberhasilan utama adalah integrasi dengan Tally.so, yang memungkinkan pencatatan data donasi secara otomatis dan akurat, sehingga mempermudah pengelolaan dan pelaporan.',
			},
			{
				id: 2,
				details:
					'Projek ini tidak hanya memenuhi ekspektasi klien, tetapi juga memberikan nilai tambah dengan menghadirkan solusi digital yang mampu meningkatkan kepercayaan dan kenyamanan pengguna dalam berdonasi. Dengan kolaborasi tim yang efektif, setiap aspek teknis dan desain berhasil diwujudkan untuk memenuhi kebutuhan unik klien.',
			},
			{
				id: 3,
				details:
					'Projek ini menghadapi sejumlah tantangan yang cukup kompleks selama proses pengembangannya. Salah satu tantangan utama adalah membangun fitur pengelolaan donasi yang aman dan intuitif, sehingga dapat diakses dengan mudah oleh berbagai tipe pengguna tanpa mengorbankan aspek keamanan data. Responsivitas website menjadi perhatian utama, mengingat pengguna dapat mengakses platform ini melalui berbagai perangkat, mulai dari desktop hingga ponsel.',
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
				img: PssLisma2,
				slug: 'pss-lisma'
			},
			{
				id: 1,
				title: 'Karavista',
				img: Karavista3,
				slug: 'karavista'
			},
		],
	},
},

// Jamjam
{
	slug: 'jamjam',
	ProjectHeader: {
		title: 'Jamjam - Developer',
		publishDate: '20 Des 2023',
		tags: 'Frontend',
	},
	ProjectImages: [
		{
			id: 1,
			title: 'Jamjam - Developer',
			img: Jamjam1,
		},
		{
			id: 2,
			title: 'Jamjam - Developer',
			img: Jamjam2,
		},
		{
			id: 3,
			title: 'Jamjam - Developer',
			img: Jamjam3,
		},
	],
	ProjectInfo: {
		ClientHeading: 'Tentang Pelanggan',
		CompanyInfo: [
			{
				id: 1,
				title: 'Nama',
				details: 'Muhamad Jamaludin',
			},
			{
				id: 2,
				title: 'Layanan',
				details: 'Frontend',
			},
			{
				id: 3,
				title: 'Website',
				details: 'https://muhjam.github.io/jamjam.com',
			},
			{
				id: 4,
				title: 'Telp',
				details: '-',
			},
		],
		ObjectivesHeading: 'Capaian',
		ObjectivesDetails: "Portofolio website ini dibuat untuk menampilkan hasil kerja dari Muhamad Jamaludin, seorang Fullstack Developer dan Prompt Engineer, yang mencakup proyek-proyek yang pernah ia kerjakan, keahlian yang dikuasainya, serta pengalaman profesionalnya di bidang pengembangan perangkat lunak. Website ini bertujuan untuk memberikan gambaran kepada klien potensial mengenai kompetensi teknis dan kreativitasnya dalam membangun aplikasi berbasis web.",
		Technologies: [
			{
				title: 'Tools & Teknologi',
				techs: [
					'HTML',
					'CSS',
					'JavaScript',
				],
			},
		],
		ProjectDetailsHeading: 'Detail Projek',
		ProjectDetails: [
			{
				"id": 1,
				"details": "Website portofolio ini dirancang untuk memberikan pengalaman pengguna yang interaktif dan profesional dalam menampilkan informasi tentang seorang pengembang perangkat lunak. Struktur halaman mencakup berbagai bagian, seperti profil pribadi, daftar proyek yang telah dikerjakan, pengalaman kerja, serta kontak yang memungkinkan calon klien atau rekruter untuk menghubungi Jamjam dengan mudah."
			  },
			  {
				"id": 2,
				"details": "Tampilan website dibuat menggunakan HTML, CSS, dan JavaScript untuk memastikan performa yang ringan dan cepat diakses di berbagai perangkat. Layout responsif diterapkan agar tampilan tetap optimal baik di desktop maupun mobile. Animasi sederhana dengan JavaScript ditambahkan untuk meningkatkan interaksi pengguna, seperti efek hover pada proyek dan transisi halaman yang mulus."
			  },
			  {
				"id": 3,
				"details": "Setiap proyek yang ditampilkan dalam website ini memiliki detail yang menjelaskan teknologi yang digunakan, tantangan yang dihadapi, serta solusi yang diterapkan. Hal ini bertujuan untuk menunjukkan keahlian teknis Jamjam dalam membangun aplikasi dan memberikan wawasan kepada pengunjung tentang cara kerja serta pendekatan pemecahan masalah yang digunakannya."
			  },
			  {
				"id": 4,
				"details": "Website ini juga terintegrasi dengan GitHub, di mana pengguna dapat melihat kode sumber proyek secara langsung. Hal ini memberikan transparansi kepada klien yang ingin mengevaluasi kualitas kode serta metode pengembangan yang diterapkan oleh Jamjam. Selain itu, terdapat fitur 'Contact Me' yang memungkinkan komunikasi lebih mudah antara pengunjung dan pemilik website."
			  }
		],
		SocialSharingHeading: 'Sosial Media',
		SocialSharing: [
			{
				id: 1,
				name: 'Instagram',
				icon: <FiInstagram />,
				url: 'https://www.instagram.com/karavista2.0/',
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
			{
				id: 2,
				title: 'Karavista',
				img: Karavista3,
				slug: 'karavista'
			},
			{
				id: 3,
				title: 'PSS LISMA UNPAS',
				img: PssLisma2,
				slug: 'pss-lisma'
			},
		],
	},
},

// valentine Chalida
{
	slug: 'valentine-chalida',
	ProjectHeader: {
		title: 'Valentine Day - Chalida',
		publishDate: '2 Feb 2025',
		tags: 'Frontend',
	},
	ProjectImages: [
		{
			id: 1,
			title: 'Valentine Day - Chalida',
			img: ValentineChalida1,
		},
		{
			id: 2,
			title: 'Valentine Day - Chalida',
			img: ValentineChalida2,
		},
	],
	ProjectInfo: {
		ClientHeading: 'Tentang Pelanggan',
		CompanyInfo: [
			{
				id: 1,
				title: 'Nama',
				details: 'Jamjam',
			},
			{
				id: 2,
				title: 'Layanan',
				details: 'Frontend',
			},
			{
				id: 3,
				title: 'Website',
				details: 'https://kodingkeliling.github.io/valentine',
			},
			{
				id: 4,
				title: 'Telp',
				details: '-',
			},
		],
		ObjectivesHeading: 'Capaian',
		ObjectivesDetails: "Website ini dibuat khusus untuk memperingati Hari Valentine dan mengungkapkan perasaan cinta kepada Chalida. Dengan tampilan yang romantis, desain interaktif, serta pesan-pesan spesial, proyek ini bertujuan untuk memberikan pengalaman digital yang menyentuh hati dan menciptakan momen berharga antara Jamjam dan Chalida.",
		Technologies: [
			{
				title: 'Tools & Teknologi',
				techs: [
					'HTML',
					'CSS',
					'JavaScript',
				],
			},
		],
		ProjectDetailsHeading: 'Detail Projek',
		ProjectDetails: [
			{
				"id": 1,
				"details": "Website ini dirancang dengan tampilan romantis yang didominasi oleh warna merah muda dan elemen-elemen khas Valentine, seperti animasi hati yang berjatuhan, musik latar yang lembut, serta efek transisi yang elegan untuk memberikan kesan hangat dan penuh kasih sayang."
			  },
			  {
				"id": 2,
				"details": "Salah satu fitur utama adalah surat cinta digital yang memungkinkan Chalida membaca pesan spesial dari Jamjam. Pesan ini ditampilkan dengan efek ketikan otomatis yang memberikan kesan lebih personal dan emosional."
			  },
			  {
				"id": 3,
				"details": "Website ini juga menyertakan galeri kenangan yang berisi foto-foto spesial dari momen indah yang telah dilalui bersama. Selain itu, terdapat fitur interaktif seperti kuis cinta ringan yang dapat dimainkan untuk menambah keseruan di Hari Valentine."
			  }
		],
		SocialSharingHeading: 'Sosial Media',
		SocialSharing: [
			{
				id: 1,
				name: 'Instagram',
				icon: <FiInstagram />,
				url: 'https://www.instagram.com/karavista2.0/',
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
				title: 'Jamjam',
				img: Jamjam1,
				slug: 'jamjam'
			},
		],
	},
},

// Karavista
{
	slug: 'karavista',
	ProjectHeader: {
		title: 'Karavista - Konser Kampus',
		publishDate: '01 Feb 2024',
		tags: 'Frontend',
	},
	ProjectImages: [
		{
			id: 1,
			title: 'Karavista - Konser Kampus',
			img: Karavista1,
		},
		{
			id: 2,
			title: 'Karavista - Konser Kampus',
			img: Karavista2,
		},
		{
			id: 3,
			title: 'Karavista - Konser Kampus',
			img: Karavista3,
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
				details: 'https://www.karavistalisma.com',
			},
			{
				id: 4,
				title: 'Telp',
				details: '-',
			},
		],
		ObjectivesHeading: 'Capaian',
		ObjectivesDetails:
    'Karavista LISMA UNPAS merupakan inisiatif dari Lingkung Seni Mahasiswa Universitas Pasundan Bandung (LISMA UNPAS) untuk melestarikan dan mengembangkan budaya Indonesia, khususnya seni pertunjukan seperti tari tradisional, tari modern, musik, fotografi, dan teater. Sebagai bagian dari rangkaian PAGELARAN KRISIS KARYA LISMA 2.0, platform digital ini dirancang untuk pembelian tiket agar lebih mudah dan modern dan dapat membantu penjualan tiket lebih cepat.',
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
				"id": 1,
				"details": "Proyek Karavista LISMA UNPAS bertujuan untuk menyediakan solusi digital bagi sistem pembelian tiket konser kampus. Sebelumnya, proses pendaftaran tiket masih dilakukan secara manual melalui pesan singkat atau pengisian formulir fisik, yang menyulitkan panitia dalam mendata peserta. Dengan implementasi formulir digital melalui Tally.so, calon penonton kini dapat dengan mudah mengisi data secara online, memilih jenis tiket yang diinginkan, serta mendapatkan informasi lengkap mengenai rekening tujuan untuk pembayaran. Setelah melakukan transfer, pengguna dapat mengunggah bukti pembayaran secara langsung dalam formulir, yang kemudian akan secara otomatis tersimpan dalam Google Spreadsheet untuk validasi panitia."
			  },
			  {
				"id": 2,
				"details": "Teknologi yang digunakan dalam proyek ini berfokus pada integrasi frontend modern menggunakan Vue.js dan TailwindCSS untuk membangun antarmuka yang responsif dan estetis. Platform ini tidak memproses pembayaran secara otomatis, melainkan hanya menyajikan informasi dan mengarahkan pengguna untuk melakukan pembayaran manual melalui transfer bank. Data dari setiap pengisian formulir akan masuk ke Google Spreadsheet secara real-time, memungkinkan panitia untuk melakukan pengecekan dengan lebih efisien. Dengan alur ini, pengelolaan tiket menjadi lebih terstruktur dan mengurangi risiko kehilangan data dibandingkan sistem pencatatan manual."
			  },
			  {
				"id": 4,
				"details": "Dampak dari implementasi Karavista LISMA UNPAS sangat terasa dalam pengelolaan acara PAGELARAN KRISIS KARYA LISMA 2.0. Dengan adanya platform ini, panitia tidak perlu lagi menerima pendaftaran tiket secara manual melalui pesan atau chat pribadi, yang sebelumnya sering kali menyebabkan kebingungan dan kesalahan input data. Selain itu, calon penonton merasa lebih nyaman karena mereka dapat melakukan pendaftaran kapan saja tanpa harus mengunjungi lokasi fisik untuk membeli tiket. Dengan sistem ini, proses pembelian tiket menjadi lebih praktis, transparan, dan dapat dikelola dengan lebih baik oleh panitia."
			  }
		],
		SocialSharingHeading: 'Sosial Media',
		SocialSharing: [
			{
				id: 1,
				name: 'Instagram',
				icon: <FiInstagram />,
				url: 'https://www.instagram.com/karavista2.0/',
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
			{
				id: 2,
				title: 'PSS LISMA UNPAS',
				img: PssLisma2,
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
			'Projek PSS LISMA UNPAS bertujuan untuk menciptakan platform digital yang mendukung penyelenggaraan Pasanggiri Seni Sunda sebagai bagian dari upaya pelestarian budaya. Website ini dirancang dengan antarmuka modern dan responsif, yang tetap mencerminkan nilai-nilai budaya Sunda sebagai identitas utama. Melalui teknologi seperti Vue.js dan TailwindCSS, platform ini berhasil memberikan pengalaman pengguna yang intuitif dan nyaman, baik pada perangkat desktop maupun seluler.',
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
					'Projek PSS LISMA UNPAS - Pasanggiri Seni Sunda dirancang sebagai platform digital modern untuk mendukung kegiatan Pasanggiri Seni Sunda yang diselenggarakan oleh LISMA UNPAS. Dengan fokus pada frontend development, projek ini memanfaatkan teknologi Vue.js dan TailwindCSS untuk menciptakan antarmuka yang responsif, estetis, dan mudah digunakan di berbagai perangkat.',
			},
			{
				id: 2,
				details:
					'Salah satu tujuan utama website ini adalah menyediakan sistem pendaftaran peserta Pasanggiri Seni Sunda secara daring. Untuk mendukung hal ini, Tally.so diintegrasikan sebagai alat pendataan peserta yang mendaftar. Melalui sistem ini, peserta dapat dengan mudah mengisi formulir pendaftaran, menyampaikan informasi yang dibutuhkan, dan mengkonfirmasi partisipasi mereka dalam acara. Proses ini memudahkan panitia dalam mengelola data peserta secara efisien dan terorganisir.',
			},
			{
				id: 3,
				details:
					'Tantangan terbesar dalam pengembangan projek ini adalah memastikan antarmuka pengguna mencerminkan keindahan budaya Sunda tanpa mengorbankan kemudahan akses bagi pengguna modern. Oleh karena itu, desain dan pengembangan website dilakukan dengan mengutamakan elemen budaya tradisional Sunda yang selaras dengan kenyamanan pengguna.',
			},
			{
				id: 4,
				details:
					'Dengan keberhasilan penyelesaian projek ini, LISMA UNPAS kini memiliki platform digital yang tidak hanya mempermudah pengelolaan acara, tetapi juga memperkuat pelestarian seni dan budaya Sunda melalui teknologi modern. Website ini menjadi penghubung antara tradisi dan kemajuan, mendukung keterlibatan yang lebih luas dari masyarakat.',
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
			{
				id: 1,
				title: 'Karavista',
				img: Karavista3,
				slug: 'karavista'
			},
		],
	},
}
];

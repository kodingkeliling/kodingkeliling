const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	darkMode: 'class',
	theme: {
		fontFamily:{
			display: ["Montserrat", "Poppins"],
		},
		extend: {
			colors: {
				blue: {
					"50": "#ebf8ff",
					"100": "#bee3f8",
					"200": "#90cdf4",
					"300": "#63b3ed",
					"400": "#47c5fb", 
					"500": "#3182ce",
					"600": "#2b6cb0",
					"700": "#2c5282",
					"800": "#2a4365",
					"900": "#1a365d",
					"950": "#0c223a",
				  },
				  
				'primary-light': '#F7F8FC',
				'firstBlue-light': '#47c5fb',
				'secondBlue-light': '#048aff',
				'thirdBlue-light': '#00569e',
				'secondary-light': '#FFFFFF',
				'ternary-light': '#f6f7f8',

				'primary-dark': '#0D2438',
				'firstBlue-dark': '#47c5fb',
				'secondBlue-dark': '#048aff',
				'thirdBlue-dark': '#00569e',
				'secondary-dark': '#102D44',
				'ternary-dark': '#1E3851',
			},
			animation: {
				'bounce-left': 'bounceLeft 1s ease-in-out infinite',
			},
			keyframes: {
				bounceLeft: {
					'0%, 100%': { transform: 'translateX(0)', opacity: '1' },
					'50%': { transform: 'translateX(-5px)', opacity: '0.8' },
				},
			},
			container: {
				padding: {
					DEFAULT: '1rem',
					sm: '2rem',
					lg: '5rem',
					xl: '6rem',
					'2xl': '8rem',
				},
			},
		},
	},
	variants: {
		extend: { opacity: ['disabled'] },
	},
	plugins: ['@tailwindcss/forms'],
};

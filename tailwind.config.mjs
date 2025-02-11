/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				lightHover: '#AFEEEE',
				darkHover: '#291A36',
				darkTheme: '#11001F'
			},
			fontFamily: {
				Outfit: [
					'Outfit',
					'sans-serif'
				],
				Ovo: [
					'Ovo',
					'serif'
				]
			},
			boxShadow: {
				'forblack': '6px 6px 0 #000000BF',
				'forwhite': '6px 6px 0 #FFFFFFBF',
			},
			gridTemplateColumns: {
				'auto': 'repeat(auto-fill, minmax(250px, 1fr))'
			},
  		borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		}
	},
	darkMode:'selector',
	plugins: [require("tailwindcss-animate")],
};

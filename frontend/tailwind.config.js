/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		fontFamily: {
			base: ["sans-serif"],
			alt: ["Rufina, serif"],
		},
		extend: {},
	},
	plugins: [],
};

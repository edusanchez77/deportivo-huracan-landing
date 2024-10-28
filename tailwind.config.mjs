
import defaultTheme from 'tailwindcss/defaultTheme'
import animations from '@midudev/tailwind-animations'
import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': "#eeeded",
				'secondary': "#e30613",
				'button': "#86191f"
			},
			fontFamily: {
				roboto: ['Roboto Condensed Variable', ...defaultTheme.fontFamily.sans],
				dosis: ['Dosis Variable', ...defaultTheme.fontFamily.sans],
				oswald: ['Oswald Variable', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [
		animations,
		typography
	],
}

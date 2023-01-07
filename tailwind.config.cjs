/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				adobe: '#ff0000',
				airbnb: '#fd5c63',
				algolia: '#050f2c',
				amazon: '#ff9900',
				android: '#a4c639',
				atlassian: '#003366',
				behance: '#1769ff',
				codepen: '#0ebeff',
				dailymotion: '#00aaff',
				deviantart: '#05cc47',
				discord: '#5865F2',
				dribbble: '#ea4c89',
				dropbox: '#007ee5',
				duolingo: '#7ac70c',
				etsy: '#d5641c',
				evernote: '#2dbe60',
				facebook: '#3b5998',
				feedly: '#2bb24c',
				github: '#333',
				gitlab: '#fc6d26',
				google: '#4285f4',
				instagram: '#e1306c',
				linkedin: '#0077b5',
				medium: '#00ab6c',
				messenger: '#0084ff',
				microsoft: '#f65314',
				netflix: '#e50914',
				pinterest: '#e60023',
				pocket: '#ef4056',
				react: '#00d8ff',
				reddit: '#ff4500',
				shopify: '#96bf48',
				skype: '#00aff0',
				slack: '#611f69',
				snapchat: '#fffc00',
				spotify: '#1db954',
				stackoverflow: '#f48024',
				stripe: '#6772e5',
				telegram: '#0088cc',
				trello: '#0079bf',
				tumblr: '#35465c',
				twitch: '#6441a5',
				twitter: '#1da1f2',
				uber: '#09091a',
				ubuntu: '#dd4814',
				vimeo: '#162221',
				vue: '#42b883',
				whatsapp: '#075e54',
				wikipedia: '#000000',
				youtube: '#ff0000',
				transparent: 'transparent',
				current: 'currentColor',
				black: '#000',
				white: '#fff',
				background: '#F9F9F1',
				blue: '#44C3EC',
			},
			/*
			fontFamily: {
				default: ['Outfit', 'sans-serif'],
			},
			*/
			backgroundImage: {
				primaryDotted: 'radial-gradient(#E6E6D1 1px, #F9F9F1 1px)',
			},
			backgroundSize: {
				primaryDottedSize: '15px 15px',
			},
		},
	},
	plugins: [],
};

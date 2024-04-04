export const SITE = {
	title: 'Butwm Links',
	description: '',
	url: 'https://links.github.io',
	themeColor: '#f9f9f1',
};

export const OPEN_GRAPH = {
	image: {
		src: 'https://cdn.discordapp.com/avatars/795996972758204426/1fedd8ab05818df52c73fc621bb8f816?size=1024',
		alt: 'Links',
	},
	discord: 'but_gg',
};

export const BUTTONS = [
	{
		name: 'GitHub',
		background: 'bg-github hover:bg-github/80',
		href: 'https://github.com/Butwm',
	},
	{
		name: 'Discord',
		background: 'bg-discord hover:bg-discord/80',
		href: 'https://discordapp.com/users/795996972758204426',
	},
	{
		name: 'Dev',
		background: 'bg-dev hover:bg-dev/80',	
	},
	{
		name: 'Ko-fi',
		background: 'bg-kofi hover:bg-kofi/80',
		href: 'https://ko-fi.com/Butwm',
	},
	{
		name: 'Threads',
		background: 'bg-threads hover:bg-threads/80',
		href: 'https://www.threads.net/@butwm.dev',
	},
	{
		name: 'HackerOne',
		background: 'bg-discord/90 hover:bg-discord/60',
		href: 'https://hackerone.com/butwm',
	},
	{
		name: 'Website',
		background: 'bg-vue hover:bg-vue/80',
		//Todo: add website URL
	}
];
